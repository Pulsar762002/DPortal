using System.Text.Json;

namespace DungeonPortal.Api.Models;

public class SessioneMeta
{
    public int SessionNumber { get; set; }
    public string Label { get; set; } = "";
    public bool Visible { get; set; }
}

/// <summary>
/// Contenuto di una sessione (capitoli + blocchi). I capitoli sono trattati
/// come JSON opaco: il backend li persiste senza conoscerne la struttura
/// (StoryBlock), definita solo lato Angular — stesso pattern di ArchivioVoce.
/// </summary>
public class SessioneContenuto
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public string? VideoId { get; set; }
    public JsonElement Chapters { get; set; }
}
