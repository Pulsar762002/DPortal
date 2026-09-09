using System.ComponentModel.DataAnnotations;

namespace DungeonPortal.Api.Models;

/// <summary>
/// Riga di metadati/ownership per una campagna. Lo Slug è lo stesso
/// segmento usato dai path su disco in content/sessioni/{slug} e
/// content/archivi/{slug} (SessioneStorageService/ArchivioStorageService) —
/// il contenuto delle sessioni/archivi resta file-based, non entra nel DB.
/// </summary>
public class Campagna
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    [MaxLength(100)]
    public string Slug { get; set; } = string.Empty;

    [Required]
    [MaxLength(150)]
    public string Nome { get; set; } = string.Empty;

    [MaxLength(4000)]
    public string? Descrizione { get; set; }

    [MaxLength(500)]
    public string? ImmagineUrl { get; set; }

    public Guid? LandId { get; set; }
    public Land? Land { get; set; }

    public Guid MasterUserId { get; set; }
    public User? MasterUser { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
