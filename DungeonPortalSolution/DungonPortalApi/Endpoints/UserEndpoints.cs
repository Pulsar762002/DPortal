using System.Security.Claims;
using DungeonPortal.Api.Data;
using DungeonPortal.Api.Services;

namespace DungeonPortal.Api.Endpoints;

public static class UserEndpoints
{
    public static IEndpointRouteBuilder MapUserEndpoints(this IEndpointRouteBuilder app)
    {
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
