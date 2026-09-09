using System.Text.Json;

namespace DungeonPortal.Api.Models.Requests;

public record CreaCategoriaRequest(string Titolo);

public record RinominaCategoriaRequest(string Titolo);

public record CreaArgomentoRequest(string Titolo, string Categoria);

public record AggiornaArgomentoRequest(
    string Titolo,
    string Categoria,
    string? Sommario,
    string Immagine,
    JsonElement Blocks);
