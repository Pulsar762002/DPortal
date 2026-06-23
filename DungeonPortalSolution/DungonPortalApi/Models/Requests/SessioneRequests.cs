using System.Text.Json;

namespace DungeonPortal.Api.Models.Requests;

public record CreaSessioneRequest(string Label);

public record AggiornaVoceElencoRequest(string Label, bool Visible);

public record AggiornaSessioneRequest(string Title, string? VideoId, JsonElement Chapters);
