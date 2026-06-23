using System.Text.Json;
using DungeonPortal.Api.Models;

namespace DungeonPortal.Api.Services;

/// <summary>Errore applicativo: estensione immagine non in whitelist.</summary>
public class TipoImmagineNonSupportatoException : Exception
{
    public TipoImmagineNonSupportatoException(string estensione)
        : base($"Estensione immagine non supportata: {estensione}") { }
}

/// <summary>
/// Gestisce la lettura/scrittura su disco degli "Archivi" (cartelle + voci
/// stile journal) sotto "content/archivi/{campagna}/". A differenza di
/// "uploads/" (file effimeri, non versionati), questa cartella contiene
/// materiale di campagna e va tenuta sotto controllo di versione.
/// </summary>
public class ArchivioStorageService
{
    private readonly string _basePath =
        Path.Combine(Directory.GetCurrentDirectory(), "content", "archivi");

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        WriteIndented = true,
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
    };

    private string CampagnaPath(string campagna) =>
        Path.Combine(_basePath, campagna);

    private string IndicePath(string campagna) =>
        Path.Combine(CampagnaPath(campagna), "index.json");

    private string VocePath(string campagna, string voceId) =>
        Path.Combine(CampagnaPath(campagna), "voci", $"{voceId}.json");

    private string ImmaginiPath(string campagna) =>
        Path.Combine(CampagnaPath(campagna), "immagini");

    private static readonly HashSet<string> EstensioniImmagineConsentite =
        new(StringComparer.OrdinalIgnoreCase) { ".png", ".jpg", ".jpeg", ".gif", ".webp" };

    /// <summary>
    /// Salva un'immagine sotto content/archivi/{campagna}/immagini/ con nome
    /// generato (GUID), così che possa essere referenziata come `src` nei
    /// blocchi `image`/`scene` senza richiedere un rebuild del frontend
    /// (la cartella "content" è un volume Docker, letta/scritta live).
    /// </summary>
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

        return $"/content/archivi/{campagna}/immagini/{fileName}";
    }

    /// <summary>Cerca una cartella per id in tutto l'albero (cartelle annidate a profondità arbitraria).</summary>
    private static ArchivioCartella? TrovaCartella(IEnumerable<ArchivioCartella> cartelle, string id)
    {
        foreach (var cartella in cartelle)
        {
            if (cartella.Id == id)
                return cartella;

            var trovata = TrovaCartella(cartella.Sottocartelle, id);
            if (trovata != null)
                return trovata;
        }

        return null;
    }

    /// <summary>Rimuove dall'albero la cartella con l'id indicato, ovunque si trovi.</summary>
    private static bool RimuoviCartella(List<ArchivioCartella> cartelle, string id)
    {
        var cartella = cartelle.FirstOrDefault(c => c.Id == id);
        if (cartella != null)
        {
            cartelle.Remove(cartella);
            return true;
        }

        foreach (var c in cartelle)
        {
            if (RimuoviCartella(c.Sottocartelle, id))
                return true;
        }

        return false;
    }

    /// <summary>Tutte le cartelle dell'albero (sé stesse incluse), per ricerche cross-livello (es. voce per id).</summary>
    private static IEnumerable<ArchivioCartella> TutteLeCartelle(IEnumerable<ArchivioCartella> cartelle)
    {
        foreach (var cartella in cartelle)
        {
            yield return cartella;
            foreach (var sotto in TutteLeCartelle(cartella.Sottocartelle))
                yield return sotto;
        }
    }

    public async Task<ArchivioIndice> GetIndiceAsync(string campagna)
    {
        var path = IndicePath(campagna);
        if (!File.Exists(path))
            return new ArchivioIndice();

        var json = await File.ReadAllTextAsync(path);
        return JsonSerializer.Deserialize<ArchivioIndice>(json, JsonOptions)
               ?? new ArchivioIndice();
    }

    private async Task SalvaIndiceAsync(string campagna, ArchivioIndice indice)
    {
        Directory.CreateDirectory(CampagnaPath(campagna));
        var json = JsonSerializer.Serialize(indice, JsonOptions);
        await File.WriteAllTextAsync(IndicePath(campagna), json);
    }

    public async Task<ArchivioVoce?> GetVoceAsync(string campagna, string voceId)
    {
        var path = VocePath(campagna, voceId);
        if (!File.Exists(path))
            return null;

        var json = await File.ReadAllTextAsync(path);
        return JsonSerializer.Deserialize<ArchivioVoce>(json, JsonOptions);
    }

    public async Task<ArchivioCartella?> CreaCartellaAsync(string campagna, string nome, string? cartellaParentId)
    {
        var indice = await GetIndiceAsync(campagna);

        var cartella = new ArchivioCartella
        {
            Id = Guid.NewGuid().ToString("N"),
            Nome = nome
        };

        if (cartellaParentId == null)
        {
            indice.Cartelle.Add(cartella);
        }
        else
        {
            var padre = TrovaCartella(indice.Cartelle, cartellaParentId);
            if (padre == null)
                return null;

            padre.Sottocartelle.Add(cartella);
        }

        await SalvaIndiceAsync(campagna, indice);

        return cartella;
    }

    public async Task<bool> RinominaCartellaAsync(string campagna, string cartellaId, string nome)
    {
        var indice = await GetIndiceAsync(campagna);
        var cartella = TrovaCartella(indice.Cartelle, cartellaId);
        if (cartella == null)
            return false;

        cartella.Nome = nome;
        await SalvaIndiceAsync(campagna, indice);

        return true;
    }

    public async Task<bool> EliminaCartellaAsync(string campagna, string cartellaId)
    {
        var indice = await GetIndiceAsync(campagna);
        var cartella = TrovaCartella(indice.Cartelle, cartellaId);
        if (cartella == null)
            return false;

        foreach (var voce in TutteLeCartelle(new[] { cartella }).SelectMany(c => c.Voci))
        {
            var vocePath = VocePath(campagna, voce.Id);
            if (File.Exists(vocePath))
                File.Delete(vocePath);
        }

        RimuoviCartella(indice.Cartelle, cartellaId);
        await SalvaIndiceAsync(campagna, indice);

        return true;
    }

    public async Task<ArchivioVoce?> CreaVoceAsync(
        string campagna,
        string cartellaId,
        string titolo,
        JsonElement? blocks)
    {
        var indice = await GetIndiceAsync(campagna);
        var cartella = TrovaCartella(indice.Cartelle, cartellaId);
        if (cartella == null)
            return null;

        var voce = new ArchivioVoce
        {
            Id = Guid.NewGuid().ToString("N"),
            Titolo = titolo,
            Blocks = blocks ?? JsonDocument.Parse("[]").RootElement
        };

        cartella.Voci.Add(new ArchivioVoceMeta { Id = voce.Id, Titolo = voce.Titolo });

        Directory.CreateDirectory(Path.Combine(CampagnaPath(campagna), "voci"));
        await File.WriteAllTextAsync(
            VocePath(campagna, voce.Id),
            JsonSerializer.Serialize(voce, JsonOptions));

        await SalvaIndiceAsync(campagna, indice);

        return voce;
    }

    public async Task<bool> AggiornaVoceAsync(
        string campagna,
        string voceId,
        string titolo,
        JsonElement blocks)
    {
        var indice = await GetIndiceAsync(campagna);
        var meta = TutteLeCartelle(indice.Cartelle).SelectMany(c => c.Voci).FirstOrDefault(v => v.Id == voceId);
        if (meta == null)
            return false;

        meta.Titolo = titolo;

        var voce = new ArchivioVoce { Id = voceId, Titolo = titolo, Blocks = blocks };
        await File.WriteAllTextAsync(
            VocePath(campagna, voceId),
            JsonSerializer.Serialize(voce, JsonOptions));

        await SalvaIndiceAsync(campagna, indice);

        return true;
    }

    public async Task<bool> EliminaVoceAsync(string campagna, string voceId)
    {
        var indice = await GetIndiceAsync(campagna);
        var cartella = TutteLeCartelle(indice.Cartelle).FirstOrDefault(c => c.Voci.Any(v => v.Id == voceId));
        if (cartella == null)
            return false;

        cartella.Voci.RemoveAll(v => v.Id == voceId);

        var vocePath = VocePath(campagna, voceId);
        if (File.Exists(vocePath))
            File.Delete(vocePath);

        await SalvaIndiceAsync(campagna, indice);

        return true;
    }
}
