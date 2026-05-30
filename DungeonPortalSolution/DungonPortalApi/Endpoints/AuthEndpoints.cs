using System.Security.Claims;
using DungeonPortal.Api.Data;
using DungeonPortal.Api.Models;
using DungeonPortal.Api.Models.Requests;
using DungeonPortal.Api.Services;
using Microsoft.EntityFrameworkCore;

namespace DungeonPortal.Api.Endpoints;

public static class AuthEndpoints
{
    public static IEndpointRouteBuilder MapAuthEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapPost("/api/auth/login", async (
            AppDbContext db,
            JwtService jwtService,
            LoginRequest request) =>
        {
            var user = await db.Users
                .FirstOrDefaultAsync(u => u.Email == request.Email);

            if (user == null ||
                !BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash))
                return Results.Unauthorized();

            var token = jwtService.GenerateToken(user);

            return Results.Ok(new
            {
                token,
                user = new
                {
                    user.Id,
                    user.Email,
                    user.Nickname,
                    user.AvatarUrl,
                    user.Role
                }
            });
        });

        app.MapGet("/api/me", (ClaimsPrincipal claims) =>
            {
                var userId = claims.FindFirst(ClaimTypes.NameIdentifier)?.Value;
                var email = claims.FindFirst(ClaimTypes.Email)?.Value;
                var role = claims.FindFirst(ClaimTypes.Role)?.Value;

                return Results.Ok(new { userId, email, role });
            })
            .RequireAuthorization();

        app.MapPost("/api/auth/register", async (
            HttpRequest request,
            AppDbContext db,
            AvatarService avatars) =>
        {
            var form = await request.ReadFormAsync();

            var email = form["email"].ToString();
            var nickname = form["nickname"].ToString();
            var password = form["password"].ToString();
            var birthDate = form["birthDate"].ToString();

            var avatar = form.Files.GetFile("avatar");

            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
                return Results.BadRequest("Dati mancanti");

            // Email già esistente?
            if (await db.Users.AnyAsync(u => u.Email == email))
                return Results.BadRequest("Email già registrata");

            var user = new User
            {
                Email = email,
                Nickname = nickname,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(password),
                Role = "USER",
                CreatedAt = DateTime.UtcNow,
                IsActive = true
            };

            db.Users.Add(user);
            await db.SaveChangesAsync(); // genera user.Id

            if (avatar != null && avatar.Length > 0)
            {
                user.AvatarUrl = await avatars.SaveAsync(avatar, $"{user.Id}/avatars");
                await db.SaveChangesAsync();
            }

            return Results.Ok(new
            {
                message = "Registrazione completata",
                userId = user.Id,
                avatar = user.AvatarUrl
            });
        });

        return app;
    }
}
