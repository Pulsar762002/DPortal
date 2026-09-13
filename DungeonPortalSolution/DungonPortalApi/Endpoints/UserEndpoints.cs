using System.Security.Claims;
using DungeonPortal.Api.Data;
using DungeonPortal.Api.Services;
using Microsoft.EntityFrameworkCore;

namespace DungeonPortal.Api.Endpoints;

public static class UserEndpoints
{
    public static IEndpointRouteBuilder MapUserEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGet("/api/users/masters", async (AppDbContext db) =>
        {
            var masters = await db.Users
                .Where(u => u.Role == "MASTER" && u.IsActive)
                .OrderBy(u => u.Nickname)
                .Select(u => new
                {
                    u.Id,
                    u.Nickname,
                    u.AvatarUrl,
                    Campagne = db.Campagne
                        .Where(c => c.MasterUserId == u.Id)
                        .OrderBy(c => c.Nome)
                        .Select(c => new { c.Slug, c.Nome })
                        .ToList()
                })
                .ToListAsync();

            return Results.Ok(masters);
        });

        app.MapPut("/api/users/profile", async (
                HttpRequest request,
                ClaimsPrincipal claims,
                AppDbContext db,
                AvatarService avatars) =>
            {
                var userId = claims.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                if (userId == null || !Guid.TryParse(userId, out var id))
                    return Results.Unauthorized();

                var user = await db.Users.FindAsync(id);

                if (user == null)
                    return Results.NotFound();

                var form = await request.ReadFormAsync();

                user.Nickname = form["nickname"].ToString();

                var avatar = form.Files.GetFile("avatar");
                if (avatar != null)
                {
                    avatars.DeleteIfExists(user.AvatarUrl);
                    user.AvatarUrl = await avatars.SaveAsync(avatar, $"users/{user.Id}/avatars");
                }

                await db.SaveChangesAsync();

                return Results.Ok(new
                {
                    user = new
                    {
                        user.Id,
                        user.Email,
                        user.Nickname,
                        user.AvatarUrl,
                        user.Role
                    }
                });
            })
            .RequireAuthorization();

        return app;
    }
}
