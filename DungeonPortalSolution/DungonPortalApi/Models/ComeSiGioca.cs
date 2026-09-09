using System.Text.Json;

namespace DungeonPortal.Api.Models;

public class ComeSiGiocaIndice
{
    public List<ComeSiGiocaCategoria> Categorie { get; set; } = new();
    public List<ComeSiGiocaArgomentoMeta> Argomenti { get; set; } = new();
}

public class ComeSiGiocaCategoria
{
    public string Id { get; set; } = "";
    public string Titolo { get; set; } = "";
}

/// <summary>Metadati di un argomento (per la card nella pagina lista): niente blocks.</summary>
public class ComeSiGiocaArgomentoMeta
{
    public string Id { get; set; } = "";
    public string Titolo { get; set; } = "";
    public string Immagine { get; set; } = "";
    public string Categoria { get; set; } = "";
    public string? Sommario { get; set; }
}

/// <summary>
/// I blocchi (story-block) sono trattati come JSON opaco: il backend li
/// persiste senza conoscerne la struttura, che è definita solo lato Angular.
/// </summary>
public class ComeSiGiocaArgomento
{
    public string Id { get; set; } = "";
    public string Titolo { get; set; } = "";
    public string Immagine { get; set; } = "";
    public string Categoria { get; set; } = "";
    public string? Sommario { get; set; }
    public JsonElement Blocks { get; set; }
}
