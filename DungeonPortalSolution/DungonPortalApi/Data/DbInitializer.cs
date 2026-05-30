using System.Data;
using DungeonPortal.Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace DungeonPortal.Api.Data;

public static class DbInitializer
{
    public static void Initialize(IServiceProvider services)
    {
        using var scope = services.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        BaselineLegacyDatabase(db);
        db.Database.Migrate();
        Seed(db);
    }

    /// <summary>
    /// Un DB creato con il vecchio EnsureCreated() ha le tabelle ma non la
    /// tabella __EFMigrationsHistory. In quel caso marchiamo la migrazione
    /// iniziale come già applicata, così Migrate() non prova a ricreare tabelle
    /// esistenti. È idempotente: no-op su DB nuovi (vuoti) o già su migrazioni.
    /// </summary>
    private static void BaselineLegacyDatabase(AppDbContext db)
    {
        // Già su migrazioni: niente da fare.
        if (TableExists(db, "__EFMigrationsHistory"))
            return;

        // DB vuoto: lascia che Migrate() crei tutto da zero.
        if (!TableExists(db, "Users"))
            return;

        var initialMigration = db.Database.GetMigrations().First();
        var productVersion = ProductInfo.GetVersion();

        db.Database.ExecuteSqlRaw(
            """
            CREATE TABLE IF NOT EXISTS "__EFMigrationsHistory" (
                "MigrationId" character varying(150) NOT NULL,
                "ProductVersion" character varying(32) NOT NULL,
                CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY ("MigrationId")
            );
            """);

        db.Database.ExecuteSqlRaw(
            """INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion") VALUES ({0}, {1});""",
            initialMigration, productVersion);
    }

    private static bool TableExists(AppDbContext db, string tableName)
    {
        var connection = db.Database.GetDbConnection();
        var mustClose = connection.State != ConnectionState.Open;
        if (mustClose) connection.Open();

        try
        {
            using var command = connection.CreateCommand();
            command.CommandText =
                "SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = @name)";

            var p = command.CreateParameter();
            p.ParameterName = "@name";
            p.Value = tableName;
            command.Parameters.Add(p);

            return Convert.ToBoolean(command.ExecuteScalar());
        }
        finally
        {
            if (mustClose) connection.Close();
        }
    }

    private static void Seed(AppDbContext db)
    {
        if (db.Users.Any())
            return;

        db.Users.Add(new User
        {
            Email = "master@dungeonportal.com",
            PasswordHash = BCrypt.Net.BCrypt.HashPassword("123456"),
            Role = "MASTER"
        });

        db.SaveChanges();
    }
}
