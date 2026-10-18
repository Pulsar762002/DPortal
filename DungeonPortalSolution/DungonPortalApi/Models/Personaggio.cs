using System.ComponentModel.DataAnnotations;

namespace DungeonPortal.Api.Models;

/// <summary>
/// Personaggio giocante di un utente. Un utente può averne N, nella stessa
/// campagna o in campagne diverse; la campagna è facoltativa (PG non ancora
/// assegnato). Il Nickname dell'utente resta l'alias del giocatore.
/// </summary>
public class Personaggio
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid UserId { get; set; }
    public User? User { get; set; }

    public Guid? CampagnaId { get; set; }
    public Campagna? Campagna { get; set; }

    [Required]
    [MaxLength(100)]
    public string Nome { get; set; } = string.Empty;

    [MaxLength(50)]
    public string? Classe { get; set; }

    [MaxLength(50)]
    public string? Razza { get; set; }

    public int? Livello { get; set; }

    [MaxLength(4000)]
    public string? Descrizione { get; set; }

    [MaxLength(255)]
    public string? AvatarUrl { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
