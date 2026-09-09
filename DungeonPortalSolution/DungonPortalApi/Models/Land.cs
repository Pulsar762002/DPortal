using System.ComponentModel.DataAnnotations;

namespace DungeonPortal.Api.Models;

public class Land
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
    public string? Lore { get; set; }

    [MaxLength(255)]
    public string? MapImageUrl { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public ICollection<LandMaster> Masters { get; set; } = new List<LandMaster>();

    public ICollection<Campagna> Campagne { get; set; } = new List<Campagna>();
}
