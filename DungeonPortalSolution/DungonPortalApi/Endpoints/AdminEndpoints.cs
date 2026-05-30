using DungeonPortal.Api.Data;
using DungeonPortal.Api.Models.Requests;
using Microsoft.EntityFrameworkCore;

namespace DungeonPortal.Api.Endpoints;

public static class AdminEndpoints
{
    public static IEndpointRouteBuilder MapAdminEndpoints(this IEndpointRouteBuilder app)
    {
        var admin = app.MapGroup("/api/admin")
            .RequireAuthorization(policy => policy.RequireRole("ADMIN"));

        admin.MapGet("/test", () => "Sei admin!");

        admin.MapGet("/users", async (AppDbContext db) =>
        {
            var users = await db.Users
                .Select(u => new
                {
                    u.Id,
                    u.Email,
                    u.Nickname,
                    u.Role
                })
                .ToListAsync();

            return Results.Ok(users);
        });

        admin.MapPut("/users/{id:guid}/role", async (
            Guid id,
            string role,
            AppDbContext db) =>
        {
            var user = await db.Users.FindAsync(id);
            if (user == null)
                return Results.NotFound();

            user.Role = role;
            await db.SaveChangesAsync();

            return Results.Ok();
        });

        admin.MapPut("/users/{id:guid}", async (
            Guid id,
            AdminUpdateUserRequest request,
            AppDbContext db) =>
        {
            var user = await db.Users.FindAsync(id);
            if (user == null)
                return Results.NotFound();

            // Controllo email univoca (escludo l'utente stesso)
            var emailExists = await db.Users
                .AnyAsync(u => u.Email == request.Email && u.Id != id);

            if (emailExists)
                return Results.BadRequest(new { message = "Email già utilizzata" });

            user.Email = request.Email;
            user.Nickname = request.Nickname;
            user.Role = request.Role;

            if (!string.IsNullOrEmpty(request.BirthDate))
            {
                if (DateTime.TryParse(request.BirthDate, out var parsedDate))
                {
                    user.BirthDate = parsedDate.ToUniversalTime();
                }
                else
                {
                    return Results.BadRequest(new { message = "Formato data non valido" });
                }
            }

            if (!string.IsNullOrEmpty(request.Password))
            {
                user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.Password);
            }

            await db.SaveChangesAsync();

            return Results.Ok();
        });

        return app;
    }
}
