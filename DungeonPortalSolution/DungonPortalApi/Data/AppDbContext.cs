using DungeonPortal.Api.Models;
using Microsoft.EntityFrameworkCore;


namespace DungeonPortal.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<User> Users => Set<User>();
    public DbSet<Land> Lands => Set<Land>();
    public DbSet<LandMaster> LandMasters => Set<LandMaster>();
    public DbSet<Campagna> Campagne => Set<Campagna>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>()
            .HasIndex(u => u.Email)
            .IsUnique();

        modelBuilder.Entity<Land>()
            .HasIndex(l => l.Slug)
            .IsUnique();

        modelBuilder.Entity<Campagna>()
            .HasIndex(c => c.Slug)
            .IsUnique();

        modelBuilder.Entity<Campagna>()
            .HasOne(c => c.Land)
            .WithMany(l => l.Campagne)
            .HasForeignKey(c => c.LandId)
            .IsRequired(false)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Campagna>()
            .HasOne(c => c.MasterUser)
            .WithMany()
            .HasForeignKey(c => c.MasterUserId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<LandMaster>()
            .HasIndex(lm => new { lm.LandId, lm.UserId })
            .IsUnique();

        modelBuilder.Entity<LandMaster>()
            .HasIndex(lm => lm.LandId)
            .IsUnique()
            .HasFilter("\"IsPrincipale\" = true");

        modelBuilder.Entity<LandMaster>()
            .HasOne(lm => lm.Land)
            .WithMany(l => l.Masters)
            .HasForeignKey(lm => lm.LandId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<LandMaster>()
            .HasOne(lm => lm.User)
            .WithMany()
            .HasForeignKey(lm => lm.UserId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}