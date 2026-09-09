namespace DungeonPortal.Api.Models.Requests;

public record CreaLandRequest(string Slug, string Nome, string? Lore = null, string? MapImageUrl = null);

public record AggiungiMasterRequest(Guid UserId, bool IsPrincipale = false);
