using System.Security.Claims;
using DungeonPortal.Api.Data;
using DungeonPortal.Api.Models;
using DungeonPortal.Api.Models.Requests;
using DungeonPortal.Api.Services;
using Microsoft.EntityFrameworkCore;

namespace DungeonPortal.Api.Endpoints;

public static class CampagnaEndpoints
{
    /// <summary>Evita path traversal: lo slug è lo stesso segmento usato in content/sessioni/{slug}.</summary>
    private static bool IsValidSegment(string value) =>
        !string.IsNullOrWhiteSpace(value)
        && value.All(c => char.IsLetterOrDigit(c) || c is '-' or '_');

    public static IEndpointRouteBuilder MapCampagnaEndpoints(this IEndpointRouteBuilder app)
    {
        var campagne = app.MapGroup("/api/campagne");

        campagne.MapGet("/", async (AppDbContext db) =>
        {
            var elenco = await db.Campagne
                .OrderBy(c => c.Nome)
                .Select(c => new
                {
                    c.Slug,
                    c.Nome,
                    c.Descrizione,
                    c.ImmagineUrl,
                    c.LandId,
                    LandSlug = c.Land != null ? c.Land.Slug : null,
                    c.MasterUserId,
                    MasterNickname = c.MasterUser!.Nickname
                })
                .ToListAsync();

            return Results.Ok(elenco);
        }).RequireAuthorization();

        campagne.MapPost("/", async (
            CreaCampagnaRequest request,
            ClaimsPrincipal claims,
            AppDbContext db) =>
        {
            if (!IsValidSegment(request.Slug) || string.IsNullOrWhiteSpace(request.Nome))
                return Results.BadRequest();

            var callerId = Guid.Parse(claims.FindFirstValue(ClaimTypes.NameIdentifier)!);
            var isAdmin = claims.IsInRole("ADMIN");

            Guid masterUserId;
            if (isAdmin)
            {
                if (request.MasterUserId is null)
                    return Results.BadRequest(new { message = "MasterUserId obbligatorio per ADMIN" });
                masterUserId = request.MasterUserId.Value;
            }
            else
            {
                if (request.MasterUserId is not null && request.MasterUserId.Value != callerId)
                    return Results.Forbid();
                masterUserId = callerId;
            }

            if (request.LandId is { } landId)
            {
                var landExists = await db.Lands.AnyAsync(l => l.Id == landId);
                if (!landExists)
                    return Results.BadRequest(new { message = "Land non trovata" });

                var isMasterOfLand = await db.LandMasters
                    .AnyAsync(m => m.LandId == landId && m.UserId == masterUserId);
                if (!isMasterOfLand)
                    return Results.BadRequest(new { message = "L'utente indicato non è master di questa Land" });
            }
            else if (isAdmin && !await db.Users.AnyAsync(u => u.Id == masterUserId))
            {
                return Results.BadRequest(new { message = "Utente non trovato" });
            }

            if (await db.Campagne.AnyAsync(c => c.Slug == request.Slug))
                return Results.BadRequest(new { message = "Slug già utilizzato" });

            var nuovaCampagna = new Campagna
            {
                Slug = request.Slug,
                Nome = request.Nome,
                Descrizione = request.Descrizione,
                ImmagineUrl = request.ImmagineUrl,
                LandId = request.LandId,
                MasterUserId = masterUserId
            };

            db.Campagne.Add(nuovaCampagna);
            await db.SaveChangesAsync();

            return Results.Ok(new { nuovaCampagna.Slug, nuovaCampagna.Nome });
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        campagne.MapPut("/{slug}", async (
            string slug,
            AggiornaCampagnaRequest request,
            ClaimsPrincipal claims,
            AppDbContext db) =>
        {
            var campagna = await db.Campagne.FirstOrDefaultAsync(c => c.Slug == slug);
            if (campagna is null)
                return Results.NotFound();

            if (!claims.IsInRole("ADMIN"))
            {
                var callerId = Guid.Parse(claims.FindFirstValue(ClaimTypes.NameIdentifier)!);
                if (campagna.MasterUserId != callerId)
                    return Results.Forbid();
            }

            if (request.LandId is { } landId)
            {
                var landExists = await db.Lands.AnyAsync(l => l.Id == landId);
                if (!landExists)
                    return Results.BadRequest(new { message = "Land non trovata" });

                var isMasterOfLand = await db.LandMasters
                    .AnyAsync(m => m.LandId == landId && m.UserId == campagna.MasterUserId);
                if (!isMasterOfLand)
                    return Results.BadRequest(new { message = "L'utente indicato non è master di questa Land" });
            }

            if (!string.IsNullOrWhiteSpace(request.Nome))
                campagna.Nome = request.Nome;
            if (request.Descrizione is not null)
                campagna.Descrizione = request.Descrizione;
            if (request.ImmagineUrl is not null)
                campagna.ImmagineUrl = request.ImmagineUrl;
            if (request.LandId is not null)
                campagna.LandId = request.LandId;

            await db.SaveChangesAsync();

            return Results.Ok(new { campagna.Slug, campagna.Nome, campagna.Descrizione, campagna.ImmagineUrl });
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        campagne.MapPost("/{slug}/immagine", async (
            string slug,
            IFormFile? file,
            ClaimsPrincipal claims,
            AppDbContext db,
            CampagnaOwnershipService ownership,
            CampagnaImmagineStorageService storage) =>
        {
            if (!IsValidSegment(slug))
                return Results.BadRequest();

            var campagna = await db.Campagne.FirstOrDefaultAsync(c => c.Slug == slug);
            if (campagna is null)
                return Results.NotFound();

            if (!await ownership.CanWriteAsync(claims, slug))
                return Results.Forbid();

            if (file is null || file.Length == 0)
                return Results.BadRequest("Nessun file ricevuto.");

            try
            {
                var url = await storage.SalvaImmagineAsync(slug, file);
                campagna.ImmagineUrl = url;
                await db.SaveChangesAsync();

                return Results.Ok(new { url });
            }
            catch (TipoImmagineNonSupportatoException ex)
            {
                return Results.BadRequest(ex.Message);
            }
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"))
          // Nessuna sessione cookie: l'auth è JWT Bearer, quindi il CSRF
          // protetto dall'anti-forgery di default per gli upload non si applica.
          .DisableAntiforgery();

        campagne.MapDelete("/{slug}", async (
            string slug,
            ClaimsPrincipal claims,
            AppDbContext db) =>
        {
            var campagna = await db.Campagne.FirstOrDefaultAsync(c => c.Slug == slug);
            if (campagna is null)
                return Results.NotFound();

            if (!claims.IsInRole("ADMIN"))
            {
                var callerId = Guid.Parse(claims.FindFirstValue(ClaimTypes.NameIdentifier)!);
                if (campagna.MasterUserId != callerId)
                    return Results.Forbid();
            }

            db.Campagne.Remove(campagna);
            await db.SaveChangesAsync();

            return Results.NoContent();
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        return app;
    }
}
