using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace DungeonPortal.Api.Data;

/// <summary>
/// Usata solo a design-time dagli strumenti EF Core (dotnet ef ...).
/// Evita che gli strumenti costruiscano l'intero host web (e quindi eseguano
/// DbInitializer contro un DB non raggiungibile). La connection string qui
/// non viene usata da "migrations add" — serve solo a istanziare il contesto.
/// </summary>
public class AppDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
{
    public AppDbContext CreateDbContext(string[] args)
    {
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseNpgsql("Host=localhost;Port=5432;Database=dungeonportal;Username=postgres;Password=postgres")
            .Options;

        return new AppDbContext(options);
    }
}
