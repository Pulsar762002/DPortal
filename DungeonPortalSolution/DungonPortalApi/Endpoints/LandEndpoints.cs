using DungeonPortal.Api.Data;
using DungeonPortal.Api.Models;
using DungeonPortal.Api.Models.Requests;
using Microsoft.EntityFrameworkCore;

namespace DungeonPortal.Api.Endpoints;

public static class LandEndpoints
{
    /// <summary>Evita path traversal: lo slug finisce nelle rotte pubbliche /land/{slug}.</summary>
    private static bool IsValidSegment(string value) =>
        !string.IsNullOrWhiteSpace(value)
        && value.All(c => char.IsLetterOrDigit(c) || c is '-' or '_');

    public static IEndpointRouteBuilder MapLandEndpoints(this IEndpointRouteBuilder app)
    {
        var land = app.MapGroup("/api/land");

        land.MapGet("/", async (AppDbContext db) =>
        {
            var lands = await db.Lands
                .OrderBy(l => l.Nome)
                .Select(l => new { l.Id, l.Slug, l.Nome })
                .ToListAsync();

            return Results.Ok(lands);
        }).RequireAuthorization();

        land.MapGet("/{slug}", async (string slug, AppDbContext db) =>
        {
            if (!IsValidSegment(slug))
                return Results.BadRequest();

            var entity = await db.Lands
                .Where(l => l.Slug == slug)
                .Select(l => new
                {
                    l.Id,
                    l.Slug,
                    l.Nome,
                    l.Lore,
                    l.MapImageUrl,
                    Masters = l.Masters
                        .OrderByDescending(m => m.IsPrincipale)
                        .Select(m => new { m.UserId, Nickname = m.User!.Nickname, m.IsPrincipale }),
                    Campagne = l.Campagne
                        .Select(c => new { c.Slug, c.Nome, c.Descrizione })
                })
                .FirstOrDefaultAsync();

            return entity is null ? Results.NotFound() : Results.Ok(entity);
        }).RequireAuthorization();

        land.MapPost("/", async (CreaLandRequest request, AppDbContext db) =>
        {
            if (!IsValidSegment(request.Slug) || string.IsNullOrWhiteSpace(request.Nome))
                return Results.BadRequest();

            if (await db.Lands.AnyAsync(l => l.Slug == request.Slug))
                return Results.BadRequest(new { message = "Slug già utilizzato" });

            var newLand = new Land
            {
                Slug = request.Slug,
                Nome = request.Nome,
                Lore = request.Lore,
                MapImageUrl = request.MapImageUrl
            };

            db.Lands.Add(newLand);
            await db.SaveChangesAsync();

            return Results.Ok(new { newLand.Id, newLand.Slug, newLand.Nome });
        }).RequireAuthorization(policy => policy.RequireRole("ADMIN"));

        land.MapPost("/{id:guid}/masters", async (Guid id, AggiungiMasterRequest request, AppDbContext db) =>
        {
            var landExists = await db.Lands.AnyAsync(l => l.Id == id);
            if (!landExists)
                return Results.NotFound();

            var userExists = await db.Users.AnyAsync(u => u.Id == request.UserId);
            if (!userExists)
                return Results.BadRequest(new { message = "Utente non trovato" });

            if (await db.LandMasters.AnyAsync(m => m.LandId == id && m.UserId == request.UserId))
                return Results.BadRequest(new { message = "Utente già master di questa Land" });

            if (request.IsPrincipale && await db.LandMasters.AnyAsync(m => m.LandId == id && m.IsPrincipale))
                return Results.BadRequest(new { message = "Questa Land ha già un master principale" });

            db.LandMasters.Add(new LandMaster
            {
                LandId = id,
                UserId = request.UserId,
                IsPrincipale = request.IsPrincipale
            });

            await db.SaveChangesAsync();

            return Results.Ok();
        }).RequireAuthorization(policy => policy.RequireRole("ADMIN"));

        return app;
    }
}
