using System.Globalization;
using System.Security.Claims;
using DungeonPortal.Api.Data;
using DungeonPortal.Api.Models;
using DungeonPortal.Api.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// DB
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// JWT
var jwtKey = builder.Configuration["Jwt:Key"]!;
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = false,
        ValidateAudience = false,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(jwtKey)
        ),
        RoleClaimType = ClaimTypes.Role
    };
});

builder.Services.AddAuthorization();
builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendPolicy", policy =>
    {
        policy
            .WithOrigins(
                "http://localhost:4200",
                "http://37.27.213.110:4200",
                "https://dungeon-portal.dungeonmasters.duckdns.org"
            )
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddScoped<JwtService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

var uploadsPath = Path.Combine(Directory.GetCurrentDirectory(), "uploads");

if (!Directory.Exists(uploadsPath))
{
    Directory.CreateDirectory(uploadsPath);
}

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(uploadsPath),
    RequestPath = "/uploads"
});


app.UseSwagger();
app.UseSwaggerUI();

app.UseCors("FrontendPolicy");

app.UseAuthentication();
app.UseAuthorization();

// ==========================
// AUTO DB CREATION
// ==========================

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

    db.Database.EnsureCreated();

    if (!db.Users.Any())
    {
        db.Users.Add(new User
        {
            Email = "master@dungeonportal.com",
            PasswordHash = BCrypt.Net.BCrypt.HashPassword("123456"),
            Role = "MASTER"
        });

        db.SaveChanges();
    }
}

// ==========================
// AUTH ENDPOINTS
// ==========================

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

app.MapGet("/api/me", (HttpContext context) =>
    {
        var userId = context.User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
        var email = context.User.FindFirst(System.Security.Claims.ClaimTypes.Email)?.Value;
        var role = context.User.FindFirst(System.Security.Claims.ClaimTypes.Role)?.Value;

        return Results.Ok(new
        {
            userId,
            email,
            role
        });
    })
    .RequireAuthorization();

app.MapPost("/api/auth/register", async (
    HttpRequest request,
    IWebHostEnvironment env,
    AppDbContext db
) =>
{
    var form = await request.ReadFormAsync();

    var email = form["email"].ToString();
    var nickname = form["nickname"].ToString();
    var password = form["password"].ToString();
    var birthDate = form["birthDate"].ToString();

    var avatar = form.Files.GetFile("avatar");

    if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
        return Results.BadRequest("Dati mancanti");

    // 🔎 Email già esistente?
    if (await db.Users.AnyAsync(u => u.Email == email))
        return Results.BadRequest("Email già registrata");

    string passwordHash =  BCrypt.Net.BCrypt.HashPassword(password);
    
    // 1️⃣ Creiamo l’utente senza avatar
    var user = new User
    {
        Email = email,
        Nickname = nickname,
        PasswordHash = passwordHash,
        Role = "USER",
        CreatedAt = DateTime.UtcNow,
        IsActive = true
    };
    db.Users.Add(user);
    await db.SaveChangesAsync(); // 🔥 QUI ottieni l'Id
    
    // 2️⃣ Ora hai user.Id
    if (avatar != null && avatar.Length > 0)
    {
        var userFolder = Path.Combine(
            Directory.GetCurrentDirectory(),
            "uploads",
            user.Id.ToString(),
            "avatars"
        );

        if (!Directory.Exists(userFolder))
            Directory.CreateDirectory(userFolder);

        var fileName = $"{Guid.NewGuid()}{Path.GetExtension(avatar.FileName)}";
        var filePath = Path.Combine(userFolder, fileName);

        using var stream = new FileStream(filePath, FileMode.Create);
        await avatar.CopyToAsync(stream);

        user.AvatarUrl = $"{user.Id}/avatars/{fileName}";

        await db.SaveChangesAsync(); // aggiorni AvatarPath
    }
    
    return Results.Ok(new
    {
        message = "Registrazione completata",
        userId = user.Id,
        avatar = user.AvatarUrl
    });
});

app.MapGet("/api/admin/test", () =>
    {
        return "Sei admin!";
    })
    .RequireAuthorization(policy => policy.RequireRole("ADMIN"));

app.MapPut("/api/users/profile", async (
        HttpRequest request,
        ClaimsPrincipal claims,
        AppDbContext db
    ) =>
    {
        var userId = claims.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        if (userId == null)
            return Results.Unauthorized();

        var user = await db.Users.FindAsync(int.Parse(userId));

        if (user == null)
            return Results.NotFound();

        var form = await request.ReadFormAsync();

        var nickname = form["nickname"].ToString();
        var avatar = form.Files.GetFile("avatar");

        user.Nickname = nickname;

        var uploadsPath = Path.Combine(
            Directory.GetCurrentDirectory(),
            "uploads"
        );

        if (avatar != null)
        {
            // elimina vecchio avatar
            if (!string.IsNullOrEmpty(user.AvatarUrl))
            {
                var oldPath = Path.Combine(uploadsPath, user.AvatarUrl);
                if (File.Exists(oldPath))
                    File.Delete(oldPath);
            }

            var userFolder = Path.Combine(
                uploadsPath,
                "users",
                user.Id.ToString(),
                "avatars"
            );

            Directory.CreateDirectory(userFolder);

            var fileName = $"{Guid.NewGuid()}{Path.GetExtension(avatar.FileName)}";
            var filePath = Path.Combine(userFolder, fileName);

            using var stream = new FileStream(filePath, FileMode.Create);
            await avatar.CopyToAsync(stream);

            user.AvatarUrl = $"users/{user.Id}/avatars/{fileName}";
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

app.MapGet("/api/admin/users", async (AppDbContext db) =>
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
    })
    .RequireAuthorization(policy => policy.RequireRole("ADMIN"));


app.MapPut("/api/admin/users/{id}/role", async (
        int id,
        string role,
        AppDbContext db) =>
    {
        var user = await db.Users.FindAsync(id);
        if (user == null)
            return Results.NotFound();

        user.Role = role;
        await db.SaveChangesAsync();

        return Results.Ok();
    })
    .RequireAuthorization(policy => policy.RequireRole("ADMIN"));

app.MapPut("/api/admin/users/{id}", async (
        Guid id,
        AdminUpdateUserRequest request,
        AppDbContext db) =>
    {
        var user = await db.Users.FindAsync(id);
        if (user == null)
            return Results.NotFound();

        // 🔴 Controllo email univoca (escludo l'utente stesso)
        var emailExists = await db.Users
            .AnyAsync(u => u.Email == request.Email && u.Id != id);

        if (emailExists)
            return Results.BadRequest(new { message = "Email già utilizzata" });

        user.Email = request.Email;
        user.Nickname = request.Nickname;
        user.Role = request.Role;
        // ✅ Parsing dd/MM/yyyy
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
    })
    .RequireAuthorization(policy => policy.RequireRole("ADMIN"));



app.UseStaticFiles();
app.Run();

record LoginRequest(string Email, string Password);
record AdminUpdateUserRequest(
    string Email,
    string? Nickname,
    string BirthDate,
    string Role,
    string? Password
);