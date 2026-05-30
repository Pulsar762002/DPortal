using System.Security.Claims;
using System.Text;
using DungeonPortal.Api.Data;
using DungeonPortal.Api.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace DungeonPortal.Api.Extensions;

public static class ServiceCollectionExtensions
{
    public const string FrontendCorsPolicy = "FrontendPolicy";

    public static IServiceCollection AddAppServices(
        this IServiceCollection services,
        IConfiguration config)
    {
        // DB
        services.AddDbContext<AppDbContext>(options =>
            options.UseNpgsql(config.GetConnectionString("DefaultConnection")));

        // JWT
        var jwtKey = config["Jwt:Key"]!;
        services
            .AddAuthentication(options =>
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

        services.AddAuthorization();

        services.AddCors(options =>
        {
            options.AddPolicy(FrontendCorsPolicy, policy =>
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

        services.AddScoped<JwtService>();
        services.AddScoped<AvatarService>();

        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();

        return services;
    }
}
