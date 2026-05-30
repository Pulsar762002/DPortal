namespace DungeonPortal.Api.Services;

/// <summary>
/// Gestisce il salvataggio/eliminazione dei file avatar sotto la cartella "uploads".
/// Il layout della sotto-cartella (relativeDir) è deciso dal chiamante per
/// preservare gli schemi già presenti negli AvatarUrl salvati a DB.
/// </summary>
public class AvatarService
{
    private readonly string _uploadsPath =
        Path.Combine(Directory.GetCurrentDirectory(), "uploads");

    /// <summary>
    /// Salva il file sotto uploads/{relativeDir}/ e ritorna l'AvatarUrl relativo
    /// (relativeDir/fileName) da memorizzare a DB e servire sotto /uploads.
    /// </summary>
    public async Task<string> SaveAsync(IFormFile file, string relativeDir)
    {
        var folder = Path.Combine(_uploadsPath, relativeDir);
        Directory.CreateDirectory(folder);

        var fileName = $"{Guid.NewGuid()}{Path.GetExtension(file.FileName)}";
        var filePath = Path.Combine(folder, fileName);

        await using var stream = new FileStream(filePath, FileMode.Create);
        await file.CopyToAsync(stream);

        return $"{relativeDir}/{fileName}".Replace('\\', '/');
    }

    /// <summary>Elimina il file avatar indicato dall'AvatarUrl, se esiste.</summary>
    public void DeleteIfExists(string? avatarUrl)
    {
        if (string.IsNullOrEmpty(avatarUrl))
            return;

        var path = Path.Combine(_uploadsPath, avatarUrl);
        if (File.Exists(path))
            File.Delete(path);
    }
}
