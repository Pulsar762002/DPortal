using System.Security.Claims;
using DungeonPortal.Api.Data;
using DungeonPortal.Api.Models;
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
                    u.Role,
                    u.IsActive
                })
                .ToListAsync();

            return Results.Ok(users);
        });

        admin.MapPost("/users", async (
            AdminCreateUserRequest request,
            AppDbContext db) =>
        {
            if (string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Password))
                return Results.BadRequest(new { message = "Email e password sono obbligatorie" });

            var emailExists = await db.Users.AnyAsync(u => u.Email == request.Email);
            if (emailExists)
                return Results.BadRequest(new { message = "Email già utilizzata" });

            if (!DateTime.TryParse(request.BirthDate, out var birthDate))
                return Results.BadRequest(new { message = "Formato data non valido" });

            var user = new User
            {
                Email = request.Email,
                Nickname = request.Nickname ?? string.Empty,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.Password),
                BirthDate = birthDate.ToUniversalTime(),
                Role = request.Role,
                CreatedAt = DateTime.UtcNow,
                IsActive = true
            };

            db.Users.Add(user);
            await db.SaveChangesAsync();

            return Results.Ok(new
            {
                user.Id,
                user.Email,
                user.Nickname,
                user.Role,
                user.IsActive
            });
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

        admin.MapPut("/users/{id:guid}/status", async (
            Guid id,
            UpdateUserStatusRequest request,
            ClaimsPrincipal claims,
            AppDbContext db) =>
        {
            var callerId = claims.FindFirstValue(ClaimTypes.NameIdentifier);
            if (callerId is not null && Guid.Parse(callerId) == id)
                return Results.BadRequest(new { message = "Non puoi abilitare/disabilitare te stesso" });

            var user = await db.Users.FindAsync(id);
            if (user == null)
                return Results.NotFound();

            user.IsActive = request.IsActive;
            await db.SaveChangesAsync();

            return Results.Ok();
        });

        admin.MapDelete("/users/{id:guid}", async (
            Guid id,
            ClaimsPrincipal claims,
            AppDbContext db) =>
        {
            var callerId = claims.FindFirstValue(ClaimTypes.NameIdentifier);
            if (callerId is not null && Guid.Parse(callerId) == id)
                return Results.BadRequest(new { message = "Non puoi eliminare te stesso" });

            var user = await db.Users.FindAsync(id);
            if (user == null)
                return Results.NotFound();

            var isMasterDiCampagna = await db.Campagne.AnyAsync(c => c.MasterUserId == id);
            var isMasterDiLand = await db.LandMasters.AnyAsync(m => m.UserId == id);
            if (isMasterDiCampagna || isMasterDiLand)
                return Results.BadRequest(new
                {
                    message = "Questo utente è master di una o più campagne/Land: rimuovilo da lì prima di eliminarlo"
                });

            db.Users.Remove(user);
            await db.SaveChangesAsync();

            return Results.Ok();
        });

        return app;
    }
}
