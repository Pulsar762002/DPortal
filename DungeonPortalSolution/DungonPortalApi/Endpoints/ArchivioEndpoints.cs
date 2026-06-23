using DungeonPortal.Api.Models.Requests;
using DungeonPortal.Api.Services;

namespace DungeonPortal.Api.Endpoints;

public static class ArchivioEndpoints
{
    /// <summary>Evita path traversal: campagna/cartellaId/voceId finiscono in Path.Combine.</summary>
    private static bool IsValidSegment(string value) =>
        !string.IsNullOrWhiteSpace(value)
        && value.All(c => char.IsLetterOrDigit(c) || c is '-' or '_');

    public static IEndpointRouteBuilder MapArchivioEndpoints(this IEndpointRouteBuilder app)
    {
        var archivi = app.MapGroup("/api/archivi");

        archivi.MapGet("/{campagna}", async (
            string campagna,
            ArchivioStorageService storage) =>
        {
            if (!IsValidSegment(campagna))
                return Results.BadRequest();

            return Results.Ok(await storage.GetIndiceAsync(campagna));
        }).RequireAuthorization();

        archivi.MapGet("/{campagna}/voci/{voceId}", async (
            string campagna,
            string voceId,
            ArchivioStorageService storage) =>
        {
            if (!IsValidSegment(campagna) || !IsValidSegment(voceId))
                return Results.BadRequest();

            var voce = await storage.GetVoceAsync(campagna, voceId);
            return voce is null ? Results.NotFound() : Results.Ok(voce);
        }).RequireAuthorization();

        archivi.MapPost("/{campagna}/cartelle", async (
            string campagna,
            CreaCartellaRequest request,
            ArchivioStorageService storage) =>
        {
            if (!IsValidSegment(campagna))
                return Results.BadRequest();

            if (request.CartellaParentId != null && !IsValidSegment(request.CartellaParentId))
                return Results.BadRequest();

            var cartella = await storage.CreaCartellaAsync(campagna, request.Nome, request.CartellaParentId);
            return cartella is null ? Results.NotFound() : Results.Ok(cartella);
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        archivi.MapPut("/{campagna}/cartelle/{cartellaId}", async (
            string campagna,
            string cartellaId,
            RinominaCartellaRequest request,
            ArchivioStorageService storage) =>
        {
            if (!IsValidSegment(campagna) || !IsValidSegment(cartellaId))
                return Results.BadRequest();

            var ok = await storage.RinominaCartellaAsync(campagna, cartellaId, request.Nome);
            return ok ? Results.Ok() : Results.NotFound();
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        archivi.MapDelete("/{campagna}/cartelle/{cartellaId}", async (
            string campagna,
            string cartellaId,
            ArchivioStorageService storage) =>
        {
            if (!IsValidSegment(campagna) || !IsValidSegment(cartellaId))
                return Results.BadRequest();

            var ok = await storage.EliminaCartellaAsync(campagna, cartellaId);
            return ok ? Results.Ok() : Results.NotFound();
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        archivi.MapPost("/{campagna}/cartelle/{cartellaId}/voci", async (
            string campagna,
            string cartellaId,
            CreaVoceRequest request,
            ArchivioStorageService storage) =>
        {
            if (!IsValidSegment(campagna) || !IsValidSegment(cartellaId))
                return Results.BadRequest();

            var voce = await storage.CreaVoceAsync(campagna, cartellaId, request.Titolo, request.Blocks);
            return voce is null ? Results.NotFound() : Results.Ok(voce);
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        archivi.MapPut("/{campagna}/voci/{voceId}", async (
            string campagna,
            string voceId,
            AggiornaVoceRequest request,
            ArchivioStorageService storage) =>
        {
            if (!IsValidSegment(campagna) || !IsValidSegment(voceId))
                return Results.BadRequest();

            var ok = await storage.AggiornaVoceAsync(campagna, voceId, request.Titolo, request.Blocks);
            return ok ? Results.Ok() : Results.NotFound();
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        archivi.MapDelete("/{campagna}/voci/{voceId}", async (
            string campagna,
            string voceId,
            ArchivioStorageService storage) =>
        {
            if (!IsValidSegment(campagna) || !IsValidSegment(voceId))
                return Results.BadRequest();

            var ok = await storage.EliminaVoceAsync(campagna, voceId);
            return ok ? Results.Ok() : Results.NotFound();
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        archivi.MapPost("/{campagna}/immagini", async (
            string campagna,
            IFormFile? file,
            ArchivioStorageService storage) =>
        {
            if (!IsValidSegment(campagna))
                return Results.BadRequest();

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
