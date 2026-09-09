namespace DungeonPortal.Api.Services;

/// <summary>
/// Salva l'immagine di copertina di una Campagna sotto "content/campagne/{slug}/immagini/",
/// stesso schema di ArchivioStorageService/SessioneStorageService (cartella "content" è un
/// volume Docker, servita staticamente sotto /content dall'API).
/// </summary>
public class CampagnaImmagineStorageService
{
    private readonly string _basePath =
        Path.Combine(Directory.GetCurrentDirectory(), "content", "campagne");

    private static readonly HashSet<string> EstensioniImmagineConsentite =
        new(StringComparer.OrdinalIgnoreCase) { ".png", ".jpg", ".jpeg", ".gif", ".webp" };

    public async Task<string> SalvaImmagineAsync(string campagna, IFormFile file)
    {
        var estensione = Path.GetExtension(file.FileName);
        if (!EstensioniImmagineConsentite.Contains(estensione))
            throw new TipoImmagineNonSupportatoException(estensione);

        var cartella = Path.Combine(_basePath, campagna, "immagini");
        Directory.CreateDirectory(cartella);

        var fileName = $"{Guid.NewGuid()}{estensione.ToLowerInvariant()}";
        var filePath = Path.Combine(cartella, fileName);

        await using var stream = new FileStream(filePath, FileMode.Create);
        await file.CopyToAsync(stream);

        return $"/content/campagne/{campagna}/immagini/{fileName}";
    }
}
