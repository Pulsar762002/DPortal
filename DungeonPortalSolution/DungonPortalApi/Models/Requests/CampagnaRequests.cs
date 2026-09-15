namespace DungeonPortal.Api.Models.Requests;

public record CreaCampagnaRequest(string Slug, string Nome, Guid? LandId = null, string? Descrizione = null, string? ImmagineUrl = null, Guid? MasterUserId = null);

public record AggiornaCampagnaRequest(string? Nome = null, string? Descrizione = null, string? ImmagineUrl = null, Guid? LandId = null);

public record AggiungiPartecipanteRequest(Guid UserId, string Tipo);
