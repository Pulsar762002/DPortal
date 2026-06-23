using System.Text.Json;

namespace DungeonPortal.Api.Models;

public class ArchivioIndice
{
    public List<ArchivioCartella> Cartelle { get; set; } = new();
}

public class ArchivioCartella
{
    public string Id { get; set; } = "";
    public string Nome { get; set; } = "";
    public List<ArchivioCartella> Sottocartelle { get; set; } = new();
    public List<ArchivioVoceMeta> Voci { get; set; } = new();
}

public class ArchivioVoceMeta
{
    public string Id { get; set; } = "";
    public string Titolo { get; set; } = "";
}

/// <summary>
/// I blocchi (story-block) sono trattati come JSON opaco: il backend li
/// persiste senza conoscerne la struttura, che è definita solo lato Angular.
/// </summary>
public class ArchivioVoce
{
    public string Id { get; set; } = "";
    public string Titolo { get; set; } = "";
    public JsonElement Blocks { get; set; }
}
