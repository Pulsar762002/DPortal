using System.Text.Json;
using DungeonPortal.Api.Models;

namespace DungeonPortal.Api.Services;

/// <summary>
/// Gestisce la lettura/scrittura su disco della pagina "Come si gioca" di
/// una campagna, sotto "content/come-si-gioca/{campagna}/". Stesso pattern
/// di ArchivioStorageService/SessioneStorageService: "index.json" contiene
/// categorie (piatte, senza nidificazione) e i metadati degli argomenti,
/// ogni argomento ha un file separato in "argomenti/" con il contenuto
/// completo (inclusi i blocks).
/// </summary>
public class ComeSiGiocaStorageService
{
    private readonly string _basePath =
        Path.Combine(Directory.GetCurrentDirectory(), "content", "come-si-gioca");

    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        WriteIndented = true,
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
    };

    private string CampagnaPath(string campagna) =>
        Path.Combine(_basePath, campagna);

    private string IndicePath(string campagna) =>
        Path.Combine(CampagnaPath(campagna), "index.json");

    private string ArgomentoPath(string campagna, string argomentoId) =>
        Path.Combine(CampagnaPath(campagna), "argomenti", $"{argomentoId}.json");

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

        return $"/content/come-si-gioca/{campagna}/immagini/{fileName}";
    }

    public async Task<ComeSiGiocaIndice> GetIndiceAsync(string campagna)
    {
        var path = IndicePath(campagna);
        if (!File.Exists(path))
            return new ComeSiGiocaIndice();

        var json = await File.ReadAllTextAsync(path);
        return JsonSerializer.Deserialize<ComeSiGiocaIndice>(json, JsonOptions)
               ?? new ComeSiGiocaIndice();
    }

    private async Task SalvaIndiceAsync(string campagna, ComeSiGiocaIndice indice)
    {
        Directory.CreateDirectory(CampagnaPath(campagna));
        await File.WriteAllTextAsync(IndicePath(campagna), JsonSerializer.Serialize(indice, JsonOptions));
    }

    public async Task<ComeSiGiocaArgomento?> GetArgomentoAsync(string campagna, string argomentoId)
    {
        var path = ArgomentoPath(campagna, argomentoId);
        if (!File.Exists(path))
            return null;

        var json = await File.ReadAllTextAsync(path);
        return JsonSerializer.Deserialize<ComeSiGiocaArgomento>(json, JsonOptions);
    }

    // ===== Categorie =====

    public async Task<ComeSiGiocaCategoria> CreaCategoriaAsync(string campagna, string titolo)
    {
        var indice = await GetIndiceAsync(campagna);

        var categoria = new ComeSiGiocaCategoria { Id = Guid.NewGuid().ToString("N"), Titolo = titolo };
        indice.Categorie.Add(categoria);

        await SalvaIndiceAsync(campagna, indice);

        return categoria;
    }

    public async Task<bool> RinominaCategoriaAsync(string campagna, string categoriaId, string titolo)
    {
        var indice = await GetIndiceAsync(campagna);
        var categoria = indice.Categorie.FirstOrDefault(c => c.Id == categoriaId);
        if (categoria == null)
            return false;

        categoria.Titolo = titolo;
        await SalvaIndiceAsync(campagna, indice);

        return true;
    }

    /// <summary>Elimina la categoria e, a cascata, tutti gli argomenti che vi appartengono.</summary>
    public async Task<bool> EliminaCategoriaAsync(string campagna, string categoriaId)
    {
        var indice = await GetIndiceAsync(campagna);
        var categoria = indice.Categorie.FirstOrDefault(c => c.Id == categoriaId);
        if (categoria == null)
            return false;

        foreach (var argomento in indice.Argomenti.Where(a => a.Categoria == categoriaId).ToList())
        {
            var path = ArgomentoPath(campagna, argomento.Id);
            if (File.Exists(path))
                File.Delete(path);
        }

        indice.Argomenti.RemoveAll(a => a.Categoria == categoriaId);
        indice.Categorie.Remove(categoria);
        await SalvaIndiceAsync(campagna, indice);

        return true;
    }

    // ===== Argomenti =====

    public async Task<ComeSiGiocaArgomentoMeta?> CreaArgomentoAsync(string campagna, string titolo, string categoriaId)
    {
        var indice = await GetIndiceAsync(campagna);
        if (!indice.Categorie.Any(c => c.Id == categoriaId))
            return null;

        var meta = new ComeSiGiocaArgomentoMeta
        {
            Id = Guid.NewGuid().ToString("N"),
            Titolo = titolo,
            Categoria = categoriaId,
            Immagine = ""
        };
        indice.Argomenti.Add(meta);
        await SalvaIndiceAsync(campagna, indice);

        var argomento = new ComeSiGiocaArgomento
        {
            Id = meta.Id,
            Titolo = titolo,
            Categoria = categoriaId,
            Immagine = "",
            Blocks = JsonDocument.Parse("[]").RootElement
        };

        Directory.CreateDirectory(Path.Combine(CampagnaPath(campagna), "argomenti"));
        await File.WriteAllTextAsync(
            ArgomentoPath(campagna, meta.Id),
            JsonSerializer.Serialize(argomento, JsonOptions));

        return meta;
    }

    public async Task<bool> AggiornaArgomentoAsync(
        string campagna,
        string argomentoId,
        string titolo,
        string categoriaId,
        string? sommario,
        string immagine,
        JsonElement blocks)
    {
        var indice = await GetIndiceAsync(campagna);
        var meta = indice.Argomenti.FirstOrDefault(a => a.Id == argomentoId);
        if (meta == null || !indice.Categorie.Any(c => c.Id == categoriaId))
            return false;

        meta.Titolo = titolo;
        meta.Categoria = categoriaId;
        meta.Sommario = sommario;
        meta.Immagine = immagine;
        await SalvaIndiceAsync(campagna, indice);

        var argomento = new ComeSiGiocaArgomento
        {
            Id = argomentoId,
            Titolo = titolo,
            Categoria = categoriaId,
            Sommario = sommario,
            Immagine = immagine,
            Blocks = blocks
        };
        await File.WriteAllTextAsync(
            ArgomentoPath(campagna, argomentoId),
            JsonSerializer.Serialize(argomento, JsonOptions));

        return true;
    }

    public async Task<bool> EliminaArgomentoAsync(string campagna, string argomentoId)
    {
        var indice = await GetIndiceAsync(campagna);
        var meta = indice.Argomenti.FirstOrDefault(a => a.Id == argomentoId);
        if (meta == null)
            return false;

        indice.Argomenti.Remove(meta);
        await SalvaIndiceAsync(campagna, indice);

        var path = ArgomentoPath(campagna, argomentoId);
        if (File.Exists(path))
            File.Delete(path);

        return true;
    }
}
