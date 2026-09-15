using System.ComponentModel.DataAnnotations;

namespace DungeonPortal.Api.Models;

/// <summary>
/// Associa un utente a una Campagna come Giocatore, Invitato o Master
/// (etichetta organizzativa, non concede permessi di scrittura: per quelli
/// serve essere Campagna.MasterUserId oppure ADMIN). Solo gli utenti
/// presenti qui, oltre al master proprietario e agli ADMIN, possono
/// accedere ai contenuti video delle sessioni della campagna.
/// </summary>
public class CampagnaPartecipante
{
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid CampagnaId { get; set; }
    public Campagna? Campagna { get; set; }

    public Guid UserId { get; set; }
    public User? User { get; set; }

    [Required]
    [MaxLength(20)]
    public string Tipo { get; set; } = "GIOCATORE";

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
