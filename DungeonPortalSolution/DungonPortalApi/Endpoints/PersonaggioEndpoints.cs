using System.Security.Claims;
using DungeonPortal.Api.Data;
using DungeonPortal.Api.Models;
using DungeonPortal.Api.Services;
using Microsoft.EntityFrameworkCore;

namespace DungeonPortal.Api.Endpoints;

/// <summary>
/// Personaggi giocanti. Permessi:
/// - il proprietario gestisce i propri PG e può assegnarli solo a campagne
///   di cui è partecipante (o master);
/// - il master di una campagna gestisce i PG assegnati alla sua campagna e
///   può crearne per qualunque utente (che viene aggiunto come GIOCATORE);
/// - ADMIN gestisce tutto.
/// Create/update usano multipart/form-data (come /api/users/profile) per
/// caricare l'immagine insieme ai dati.
/// </summary>
public static class PersonaggioEndpoints
{
    private const int MaxNome = 100;
    private const int MaxBreve = 50;
    private const int MaxDescrizione = 4000;

    public static IEndpointRouteBuilder MapPersonaggioEndpoints(this IEndpointRouteBuilder app)
    {
        var personaggi = app.MapGroup("/api/personaggi").RequireAuthorization();

        personaggi.MapGet("/miei", async (ClaimsPrincipal claims, AppDbContext db) =>
        {
            var callerId = CallerId(claims);

            var elenco = await Proietta(db.Personaggi.Where(p => p.UserId == callerId))
                .ToListAsync();

            return Results.Ok(elenco);
        });

        // Campagne a cui il chiamante può assegnare i propri PG.
        personaggi.MapGet("/miei/campagne", async (ClaimsPrincipal claims, AppDbContext db) =>
        {
            var callerId = CallerId(claims);
            var isAdmin = claims.IsInRole("ADMIN");

            var elenco = await db.Campagne
                .Where(c => isAdmin
                    || c.MasterUserId == callerId
                    || db.CampagnePartecipanti.Any(p => p.CampagnaId == c.Id && p.UserId == callerId))
                .OrderBy(c => c.Nome)
                .Select(c => new { c.Slug, c.Nome })
                .ToListAsync();

            return Results.Ok(elenco);
        });

        personaggi.MapPost("/", async (
            HttpRequest request,
            ClaimsPrincipal claims,
            AppDbContext db,
            AvatarService avatars) =>
        {
            var callerId = CallerId(claims);
            var isAdmin = claims.IsInRole("ADMIN");
            var form = await request.ReadFormAsync();

            var dati = LeggiDati(form, out var errore);
            if (dati is null)
                return Results.BadRequest(new { message = errore });

            var ownerId = callerId;
            if (Guid.TryParse(form["userId"].ToString(), out var richiesto) && richiesto != callerId)
            {
                if (!await db.Users.AnyAsync(u => u.Id == richiesto))
                    return Results.BadRequest(new { message = "Utente non trovato" });
                ownerId = richiesto;
            }

            var (campagna, erroreCampagna) = await RisolviCampagna(db, form, callerId, ownerId, isAdmin);
            if (erroreCampagna is not null)
                return erroreCampagna;

            // Creare un PG per un altro utente: solo ADMIN o il master della campagna indicata.
            if (ownerId != callerId && !isAdmin && campagna?.MasterUserId != callerId)
                return Results.Forbid();

            var personaggio = new Personaggio { UserId = ownerId };
            dati.ApplicaA(personaggio);
            personaggio.CampagnaId = campagna?.Id;

            var avatar = form.Files.GetFile("avatar");
            if (avatar is not null)
            {
                if (!IsImmagine(avatar))
                    return Results.BadRequest(new { message = "Il file deve essere un'immagine" });
                personaggio.AvatarUrl = await avatars.SaveAsync(avatar, $"users/{ownerId}/personaggi");
            }

            db.Personaggi.Add(personaggio);
            await AggiungiComeGiocatoreSeServe(db, campagna, ownerId);
            await db.SaveChangesAsync();

            return Results.Ok(await Proietta(db.Personaggi.Where(p => p.Id == personaggio.Id)).FirstAsync());
        }).DisableAntiforgery();

        personaggi.MapPut("/{id:guid}", async (
            Guid id,
            HttpRequest request,
            ClaimsPrincipal claims,
            AppDbContext db,
            AvatarService avatars) =>
        {
            var callerId = CallerId(claims);
            var isAdmin = claims.IsInRole("ADMIN");

            var personaggio = await db.Personaggi
                .Include(p => p.Campagna)
                .FirstOrDefaultAsync(p => p.Id == id);
            if (personaggio is null)
                return Results.NotFound();

            if (!PuoGestire(personaggio, callerId, isAdmin))
                return Results.Forbid();

            var form = await request.ReadFormAsync();

            var dati = LeggiDati(form, out var errore);
            if (dati is null)
                return Results.BadRequest(new { message = errore });

            var (campagna, erroreCampagna) = await RisolviCampagna(db, form, callerId, personaggio.UserId, isAdmin);
            if (erroreCampagna is not null)
                return erroreCampagna;

            dati.ApplicaA(personaggio);
            personaggio.CampagnaId = campagna?.Id;

            var avatar = form.Files.GetFile("avatar");
            if (avatar is not null)
            {
                if (!IsImmagine(avatar))
                    return Results.BadRequest(new { message = "Il file deve essere un'immagine" });
                avatars.DeleteIfExists(personaggio.AvatarUrl);
                personaggio.AvatarUrl = await avatars.SaveAsync(avatar, $"users/{personaggio.UserId}/personaggi");
            }

            await AggiungiComeGiocatoreSeServe(db, campagna, personaggio.UserId);
            await db.SaveChangesAsync();

            return Results.Ok(await Proietta(db.Personaggi.Where(p => p.Id == personaggio.Id)).FirstAsync());
        }).DisableAntiforgery();

        personaggi.MapDelete("/{id:guid}", async (
            Guid id,
            ClaimsPrincipal claims,
            AppDbContext db,
            AvatarService avatars) =>
        {
            var personaggio = await db.Personaggi
                .Include(p => p.Campagna)
                .FirstOrDefaultAsync(p => p.Id == id);
            if (personaggio is null)
                return Results.NotFound();

            if (!PuoGestire(personaggio, CallerId(claims), claims.IsInRole("ADMIN")))
                return Results.Forbid();

            avatars.DeleteIfExists(personaggio.AvatarUrl);
            db.Personaggi.Remove(personaggio);
            await db.SaveChangesAsync();

            return Results.NoContent();
        });

        app.MapGet("/api/campagne/{slug}/personaggi", async (
            string slug,
            ClaimsPrincipal claims,
            AppDbContext db,
            CampagnaOwnershipService ownership) =>
        {
            var campagna = await db.Campagne.FirstOrDefaultAsync(c => c.Slug == slug);
            if (campagna is null)
                return Results.NotFound();

            if (!await ownership.CanWriteAsync(claims, slug))
                return Results.Forbid();

            var elenco = await Proietta(db.Personaggi.Where(p => p.CampagnaId == campagna.Id))
                .ToListAsync();

            return Results.Ok(elenco);
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        return app;
    }

    private static Guid CallerId(ClaimsPrincipal claims) =>
        Guid.Parse(claims.FindFirstValue(ClaimTypes.NameIdentifier)!);

    private static bool PuoGestire(Personaggio p, Guid callerId, bool isAdmin) =>
        isAdmin
        || p.UserId == callerId
        || (p.Campagna is not null && p.Campagna.MasterUserId == callerId);

    private static bool IsImmagine(IFormFile file) =>
        file.ContentType.StartsWith("image/", StringComparison.OrdinalIgnoreCase);

    private static IQueryable<object> Proietta(IQueryable<Personaggio> query) =>
        query
            .OrderBy(p => p.User!.Nickname)
            .ThenBy(p => p.Nome)
            .Select(p => new
            {
                p.Id,
                p.UserId,
                Nickname = p.User!.Nickname,
                p.Nome,
                p.Classe,
                p.Razza,
                p.Livello,
                p.Descrizione,
                p.AvatarUrl,
                CampagnaSlug = p.Campagna != null ? p.Campagna.Slug : null,
                CampagnaNome = p.Campagna != null ? p.Campagna.Nome : null
            });

    /// <summary>
    /// Campo "campagnaSlug" del form: vuoto = PG non assegnato. Il proprietario
    /// può scegliere solo campagne a cui partecipa; master/ADMIN le proprie/tutte.
    /// </summary>
    private static async Task<(Campagna? Campagna, IResult? Errore)> RisolviCampagna(
        AppDbContext db, IFormCollection form, Guid callerId, Guid ownerId, bool isAdmin)
    {
        var slug = form["campagnaSlug"].ToString().Trim();
        if (slug.Length == 0)
            return (null, null);

        var campagna = await db.Campagne.FirstOrDefaultAsync(c => c.Slug == slug);
        if (campagna is null)
            return (null, Results.BadRequest(new { message = "Campagna non trovata" }));

        if (isAdmin || campagna.MasterUserId == callerId)
            return (campagna, null);

        var partecipa = callerId == ownerId && await db.CampagnePartecipanti
            .AnyAsync(p => p.CampagnaId == campagna.Id && p.UserId == callerId);

        return partecipa
            ? (campagna, null)
            : (null, Results.BadRequest(new { message = "Non partecipi a questa campagna" }));
    }

    private static async Task AggiungiComeGiocatoreSeServe(AppDbContext db, Campagna? campagna, Guid userId)
    {
        if (campagna is null || campagna.MasterUserId == userId)
            return;

        var giaPresente = await db.CampagnePartecipanti
            .AnyAsync(p => p.CampagnaId == campagna.Id && p.UserId == userId);
        if (!giaPresente)
        {
            db.CampagnePartecipanti.Add(new CampagnaPartecipante
            {
                CampagnaId = campagna.Id,
                UserId = userId,
                Tipo = "GIOCATORE"
            });
        }
    }

    private sealed record DatiPersonaggio(
        string Nome, string? Classe, string? Razza, int? Livello, string? Descrizione)
    {
        public void ApplicaA(Personaggio p)
        {
            p.Nome = Nome;
            p.Classe = Classe;
            p.Razza = Razza;
            p.Livello = Livello;
            p.Descrizione = Descrizione;
        }
    }

    private static DatiPersonaggio? LeggiDati(IFormCollection form, out string? errore)
    {
        errore = null;

        static string? Opzionale(IFormCollection f, string key)
        {
            var v = f[key].ToString().Trim();
            return v.Length == 0 ? null : v;
        }

        var nome = form["nome"].ToString().Trim();
        var classe = Opzionale(form, "classe");
        var razza = Opzionale(form, "razza");
        var descrizione = Opzionale(form, "descrizione");

        if (nome.Length == 0) { errore = "Il nome è obbligatorio"; return null; }
        if (nome.Length > MaxNome) { errore = $"Nome troppo lungo (max {MaxNome})"; return null; }
        if (classe?.Length > MaxBreve || razza?.Length > MaxBreve)
        {
            errore = $"Classe/razza troppo lunghe (max {MaxBreve})";
            return null;
        }
        if (descrizione?.Length > MaxDescrizione)
        {
            errore = $"Descrizione troppo lunga (max {MaxDescrizione})";
            return null;
        }

        int? livello = null;
        var livelloRaw = Opzionale(form, "livello");
        if (livelloRaw is not null)
        {
            if (!int.TryParse(livelloRaw, out var l) || l < 0 || l > 100)
            {
                errore = "Livello non valido";
                return null;
            }
            livello = l;
        }

        return new DatiPersonaggio(nome, classe, razza, livello, descrizione);
    }
}
