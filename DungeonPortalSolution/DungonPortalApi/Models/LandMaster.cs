namespace DungeonPortal.Api.Models;

/// <summary>
/// Associa un utente MASTER a una Land. Più righe per la stessa LandId
/// rappresentano co-master; al più una può avere IsPrincipale = true
/// (vincolo applicato con un indice unique filtrato in AppDbContext).
/// </summary>
public class LandMaster
{
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid LandId { get; set; }
    public Land? Land { get; set; }

    public Guid UserId { get; set; }
    public User? User { get; set; }

    public bool IsPrincipale { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
