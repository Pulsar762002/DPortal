using System.Text.Json;

namespace DungeonPortal.Api.Models.Requests;

public record CreaCartellaRequest(string Nome, string? CartellaParentId = null);

public record RinominaCartellaRequest(string Nome);

public record CreaVoceRequest(string Titolo, JsonElement? Blocks);

public record AggiornaVoceRequest(string Titolo, JsonElement Blocks);
