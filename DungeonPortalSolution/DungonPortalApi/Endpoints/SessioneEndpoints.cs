using DungeonPortal.Api.Models.Requests;
using DungeonPortal.Api.Services;

namespace DungeonPortal.Api.Endpoints;

public static class SessioneEndpoints
{
    /// <summary>Evita path traversal: il segmento campagna finisce in Path.Combine.</summary>
    private static bool IsValidSegment(string value) =>
        !string.IsNullOrWhiteSpace(value)
        && value.All(c => char.IsLetterOrDigit(c) || c is '-' or '_');

    public static IEndpointRouteBuilder MapSessioneEndpoints(this IEndpointRouteBuilder app)
    {
        var sessioni = app.MapGroup("/api/sessioni");

        sessioni.MapGet("/{campagna}/elenco", async (
            string campagna,
            SessioneStorageService storage) =>
        {
            if (!IsValidSegment(campagna))
                return Results.BadRequest();

            var elenco = await storage.GetElencoAsync(campagna);
            return elenco is null ? Results.NotFound() : Results.Ok(elenco);
        }).RequireAuthorization();

        sessioni.MapGet("/{campagna}/elenco/voci", async (
            string campagna,
            SessioneStorageService storage) =>
        {
            if (!IsValidSegment(campagna))
                return Results.BadRequest();

            return Results.Ok(await storage.GetVociAsync(campagna));
        }).RequireAuthorization();

        sessioni.MapPost("/{campagna}/elenco/voci", async (
            string campagna,
            CreaSessioneRequest request,
            SessioneStorageService storage) =>
        {
            if (!IsValidSegment(campagna))
                return Results.BadRequest();

            return Results.Ok(await storage.CreaSessioneAsync(campagna, request.Label));
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        sessioni.MapPut("/{campagna}/elenco/voci/{sessionNumber:int}", async (
            string campagna,
            int sessionNumber,
            AggiornaVoceElencoRequest request,
            SessioneStorageService storage) =>
        {
            if (!IsValidSegment(campagna))
                return Results.BadRequest();

            var ok = await storage.AggiornaVoceElencoAsync(campagna, sessionNumber, request.Label, request.Visible);
            return ok ? Results.Ok() : Results.NotFound();
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        sessioni.MapDelete("/{campagna}/elenco/voci/{sessionNumber:int}", async (
            string campagna,
            int sessionNumber,
            SessioneStorageService storage) =>
        {
            if (!IsValidSegment(campagna))
                return Results.BadRequest();

            var ok = await storage.EliminaSessioneAsync(campagna, sessionNumber);
            return ok ? Results.Ok() : Results.NotFound();
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        sessioni.MapGet("/{campagna}/{sessionNumber:int}", async (
            string campagna,
            int sessionNumber,
            SessioneStorageService storage) =>
        {
            if (!IsValidSegment(campagna))
                return Results.BadRequest();

            var sessione = await storage.GetSessioneAsync(campagna, sessionNumber);
            return sessione is null ? Results.NotFound() : Results.Ok(sessione);
        }).RequireAuthorization();

        sessioni.MapPut("/{campagna}/{sessionNumber:int}", async (
            string campagna,
            int sessionNumber,
            AggiornaSessioneRequest request,
            SessioneStorageService storage) =>
        {
            if (!IsValidSegment(campagna))
                return Results.BadRequest();

            var ok = await storage.AggiornaSessioneAsync(campagna, sessionNumber, request.Title, request.VideoId, request.Chapters);
            return ok ? Results.Ok() : Results.NotFound();
        }).RequireAuthorization(policy => policy.RequireRole("MASTER", "ADMIN"));

        sessioni.MapPost("/{campagna}/immagini", async (
            string campagna,
            IFormFile? file,
            SessioneStorageService storage) =>
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
