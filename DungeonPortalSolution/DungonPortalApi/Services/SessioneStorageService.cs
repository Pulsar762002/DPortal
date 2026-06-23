using System.Text.Json;
using System.Text.Json.Nodes;
using DungeonPortal.Api.Models;

namespace DungeonPortal.Api.Services;

/// <summary>
/// Gestisce la lettura/scrittura su disco delle Sessioni di campagna sotto
/// "content/sessioni/{campagna}/". Stesso pattern di ArchivioStorageService:
/// cartella versionata, non effimera come "uploads/".
///
/// "elenco-sessioni.json" contiene anche sezioni non legate alle sessioni
/// (Personaggi, Luoghi, Cronologia, ...) usate dalla pagina campagna: viene
/// trattato come documento JSON opaco e mutato solo nella sezione con
/// type == "sessions", lasciando intatto il resto.
/// </summary>
public class SessioneStorageService
{
    private readonly string _basePath =
        Path.Combine(Directory.GetCurrentDirectory(), "content", "sessioni");

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        WriteIndented = true,
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
    };

    private string CampagnaPath(string campagna) =>
        Path.Combine(_basePath, campagna);

    private string ElencoPath(string campagna) =>
        Path.Combine(CampagnaPath(campagna), "elenco-sessioni.json");

    private string SessionePath(string campagna, int sessionNumber) =>
        Path.Combine(CampagnaPath(campagna), $"session-{sessionNumber}.json");

    private string ImmaginiPath(string campagna) =>
        Path.Combine(CampagnaPath(campagna), "immagini");

    private static readonly HashSet<string> EstensioniImmagineConsentite =
        new(StringComparer.OrdinalIgnoreCase) { ".png", ".jpg", ".jpeg", ".gif", ".webp" };

    public async Task<string> SalvaImmagineAsync(string campagna, IFormFile file)
    {
        var estensione = Path.GetExtension(file.FileName);
        if (!EstensioniImmagineConsentite.Contains(estensione))
            throw new TipoImmagineNonSupportatoException(estensione);

        var cartella = ImmaginiPath(campagna);
        Directory.CreateDirectory(cartella);

        var fileName = $"{Guid.NewGuid()}{estensione.ToLowerInvariant()}";
        var filePath = Path.Combine(cartella, fileName);

        await using var stream = new FileStream(filePath, FileMode.Create);
        await file.CopyToAsync(stream);

        return $"/content/sessioni/{campagna}/immagini/{fileName}";
    }

    public async Task<JsonNode?> GetElencoAsync(string campagna)
    {
        var path = ElencoPath(campagna);
        if (!File.Exists(path))
            return null;

        var json = await File.ReadAllTextAsync(path);
        return JsonNode.Parse(json);
    }

    private async Task SalvaElencoAsync(string campagna, JsonNode elenco)
    {
        Directory.CreateDirectory(CampagnaPath(campagna));
        await File.WriteAllTextAsync(ElencoPath(campagna), elenco.ToJsonString(JsonOptions));
    }

    /// <summary>Trova nell'elenco gli `items` della sezione "I. Sessioni" (type == "sessions").</summary>
    private static JsonArray? TrovaItemsSessioni(JsonNode elenco)
    {
        if (elenco["sections"] is not JsonArray sections)
            return null;

        foreach (var section in sections)
        {
            if (section?["type"]?.GetValue<string>() == "sessions")
                return section["items"] as JsonArray;
        }

        return null;
    }

    public async Task<List<SessioneMeta>> GetVociAsync(string campagna)
    {
        var elenco = await GetElencoAsync(campagna);
        var items = elenco != null ? TrovaItemsSessioni(elenco) : null;
        if (items == null)
            return new();

        return items
            .Where(item => item != null)
            .Select(item => new SessioneMeta
            {
                SessionNumber = item!["sessionNumber"]?.GetValue<int>() ?? 0,
                Label = item["label"]?.GetValue<string>() ?? "",
                Visible = item["visible"]?.GetValue<bool>() ?? false
            })
            .ToList();
    }

    public async Task<SessioneMeta> CreaSessioneAsync(string campagna, string label)
    {
        var elenco = await GetElencoAsync(campagna) ?? new JsonObject { ["sections"] = new JsonArray() };

        if (elenco["sections"] is not JsonArray sections)
        {
            sections = new JsonArray();
            elenco["sections"] = sections;
        }

        var items = TrovaItemsSessioni(elenco);
        if (items == null)
        {
            items = new JsonArray();
            sections.Insert(0, new JsonObject
            {
                ["title"] = "I. Sessioni",
                ["type"] = "sessions",
                ["items"] = items
            });
        }

        var prossimoNumero = items
            .Select(item => item?["sessionNumber"]?.GetValue<int>() ?? 0)
            .DefaultIfEmpty(0)
            .Max() + 1;

        items.Add(new JsonObject
        {
            ["label"] = label,
            ["sessionNumber"] = prossimoNumero,
            ["visible"] = false
        });

        await SalvaElencoAsync(campagna, elenco);

        var contenuto = new SessioneContenuto
        {
            Id = prossimoNumero,
            Title = label,
            Chapters = JsonDocument.Parse("[]").RootElement
        };

        Directory.CreateDirectory(CampagnaPath(campagna));
        await File.WriteAllTextAsync(
            SessionePath(campagna, prossimoNumero),
            JsonSerializer.Serialize(contenuto, JsonOptions));

        return new SessioneMeta { SessionNumber = prossimoNumero, Label = label, Visible = false };
    }

    public async Task<bool> AggiornaVoceElencoAsync(string campagna, int sessionNumber, string label, bool visible)
    {
        var elenco = await GetElencoAsync(campagna);
        var items = elenco != null ? TrovaItemsSessioni(elenco) : null;
        var voce = items?.FirstOrDefault(item => item?["sessionNumber"]?.GetValue<int>() == sessionNumber);
        if (voce == null)
            return false;

        voce["label"] = label;
        voce["visible"] = visible;
        await SalvaElencoAsync(campagna, elenco!);

        return true;
    }

    public async Task<bool> EliminaSessioneAsync(string campagna, int sessionNumber)
    {
        var elenco = await GetElencoAsync(campagna);
        var items = elenco != null ? TrovaItemsSessioni(elenco) : null;
        var voce = items?.FirstOrDefault(item => item?["sessionNumber"]?.GetValue<int>() == sessionNumber);
        if (voce == null)
            return false;

        items!.Remove(voce);
        await SalvaElencoAsync(campagna, elenco!);

        var path = SessionePath(campagna, sessionNumber);
        if (File.Exists(path))
            File.Delete(path);

        return true;
    }

    public async Task<SessioneContenuto?> GetSessioneAsync(string campagna, int sessionNumber)
    {
        var path = SessionePath(campagna, sessionNumber);
        if (!File.Exists(path))
            return null;

        var json = await File.ReadAllTextAsync(path);
        return JsonSerializer.Deserialize<SessioneContenuto>(json, JsonOptions);
    }

    public async Task<bool> AggiornaSessioneAsync(
        string campagna,
        int sessionNumber,
        string title,
        string? videoId,
        JsonElement chapters)
    {
        var path = SessionePath(campagna, sessionNumber);
        if (!File.Exists(path))
            return false;

        var contenuto = new SessioneContenuto
        {
            Id = sessionNumber,
            Title = title,
            VideoId = videoId,
            Chapters = chapters
        };

        await File.WriteAllTextAsync(path, JsonSerializer.Serialize(contenuto, JsonOptions));

        return true;
    }
}
