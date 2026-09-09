using System.Security.Claims;
using DungeonPortal.Api.Models.Requests;
using DungeonPortal.Api.Services;

namespace DungeonPortal.Api.Endpoints;

public static class ComeSiGiocaEndpoints
{
    /// <summary>Evita path traversal: campagna/categoriaId/argomentoId finiscono in Path.Combine.</summary>
    private static bool IsValidSegment(string value) =>
        !string.IsNullOrWhiteSpace(value)
        && value.All(c => char.IsLetterOrDigit(c) || c is '-' or '_');

    public static IEndpointRouteBuilder MapComeSiGiocaEndpoints(this IEndpointRouteBuilder app)
    {
        var comeSiGioca = app.MapGroup("/api/come-si-gioca");

        comeSiGioca.MapGet("/{campagna}", async (
            string campagna,
            ComeSiGiocaStorageService storage) =>
        {
            if (!IsValidSegment(campagna))
                return Results.BadRequest();

            return Results.Ok(await storage.GetIndiceAsync(campagna));
        }).RequireAuthorization();

        comeSiGioca.MapGet("/{campagna}/argomenti/{argomentoId}", async (
            string campagna,
            string argomentoId,
            ComeSiGiocaStorageService storage) =>
        {
            if (!IsValidSegment(campagna) || !IsValidSegment(argomentoId))
                return Results.BadRequest();

            var argomento = await storage.GetArgomentoAsync(campagna, argomentoId);
            return argomento is null ? Results.NotFound() : Results.Ok(argomento);
        }).RequireAuthorization();

        comeSiGioca.MapPost("/{campagna}/categorie", async (
            string campagna,
            CreaCategoriaRequest request,
            ClaimsPrincipal claims,
            CampagnaOwnershipService ownership,
            ComeSiGiocaStorageService storage) =>
        {
            if (!IsValidSegment(campagna))
                return Results.BadRequest();

            if (!await ownership.CanWriteAsync(claims, campagna))
                return Results.Forbid();

            return Results.Ok(await storage.CreaCategoriaAsync(campagna, request.Titolo));
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        comeSiGioca.MapPut("/{campagna}/categorie/{categoriaId}", async (
            string campagna,
            string categoriaId,
            RinominaCategoriaRequest request,
            ClaimsPrincipal claims,
            CampagnaOwnershipService ownership,
            ComeSiGiocaStorageService storage) =>
        {
            if (!IsValidSegment(campagna) || !IsValidSegment(categoriaId))
                return Results.BadRequest();

            if (!await ownership.CanWriteAsync(claims, campagna))
                return Results.Forbid();

            var ok = await storage.RinominaCategoriaAsync(campagna, categoriaId, request.Titolo);
            return ok ? Results.Ok() : Results.NotFound();
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        comeSiGioca.MapDelete("/{campagna}/categorie/{categoriaId}", async (
            string campagna,
            string categoriaId,
            ClaimsPrincipal claims,
            CampagnaOwnershipService ownership,
            ComeSiGiocaStorageService storage) =>
        {
            if (!IsValidSegment(campagna) || !IsValidSegment(categoriaId))
                return Results.BadRequest();

            if (!await ownership.CanWriteAsync(claims, campagna))
                return Results.Forbid();

            var ok = await storage.EliminaCategoriaAsync(campagna, categoriaId);
            return ok ? Results.Ok() : Results.NotFound();
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        comeSiGioca.MapPost("/{campagna}/argomenti", async (
            string campagna,
            CreaArgomentoRequest request,
            ClaimsPrincipal claims,
            CampagnaOwnershipService ownership,
            ComeSiGiocaStorageService storage) =>
        {
            if (!IsValidSegment(campagna))
                return Results.BadRequest();

            if (!await ownership.CanWriteAsync(claims, campagna))
                return Results.Forbid();

            var argomento = await storage.CreaArgomentoAsync(campagna, request.Titolo, request.Categoria);
            return argomento is null ? Results.NotFound() : Results.Ok(argomento);
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        comeSiGioca.MapPut("/{campagna}/argomenti/{argomentoId}", async (
            string campagna,
            string argomentoId,
            AggiornaArgomentoRequest request,
            ClaimsPrincipal claims,
            CampagnaOwnershipService ownership,
            ComeSiGiocaStorageService storage) =>
        {
            if (!IsValidSegment(campagna) || !IsValidSegment(argomentoId))
                return Results.BadRequest();

            if (!await ownership.CanWriteAsync(claims, campagna))
                return Results.Forbid();

            var ok = await storage.AggiornaArgomentoAsync(
                campagna, argomentoId, request.Titolo, request.Categoria, request.Sommario, request.Immagine, request.Blocks);
            return ok ? Results.Ok() : Results.NotFound();
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        comeSiGioca.MapDelete("/{campagna}/argomenti/{argomentoId}", async (
            string campagna,
            string argomentoId,
            ClaimsPrincipal claims,
            CampagnaOwnershipService ownership,
            ComeSiGiocaStorageService storage) =>
        {
            if (!IsValidSegment(campagna) || !IsValidSegment(argomentoId))
                return Results.BadRequest();

            if (!await ownership.CanWriteAsync(claims, campagna))
                return Results.Forbid();

            var ok = await storage.EliminaArgomentoAsync(campagna, argomentoId);
            return ok ? Results.Ok() : Results.NotFound();
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        comeSiGioca.MapPost("/{campagna}/immagini", async (
            string campagna,
            IFormFile? file,
            ClaimsPrincipal claims,
            CampagnaOwnershipService ownership,
            ComeSiGiocaStorageService storage) =>
        {
            if (!IsValidSegment(campagna))
                return Results.BadRequest();

            if (!await ownership.CanWriteAsync(claims, campagna))
                return Results.Forbid();

            if (file is null || file.Length == 0)
                return Results.BadRequest("Nessun file ricevuto.");

            try
            {
                var url = await storage.SalvaImmagineAsync(campagna, file);
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

        return app;
    }
}
