using System.Security.Claims;
using DungeonPortal.Api.Data;
using Microsoft.EntityFrameworkCore;

namespace DungeonPortal.Api.Services;

/// <summary>
/// Controllo di scrittura per sessioni/archivi di una campagna. Se lo slug
/// non è (ancora) registrato come Campagna nel DB, si mantiene il
/// comportamento legacy (qualunque MASTER può scrivere) — questo evita di
/// rompere le campagne esistenti create prima dell'introduzione di
/// Land/Campagna. Solo le campagne effettivamente registrate, con un
/// MasterUserId, ottengono l'isolamento per master.
/// </summary>
public class CampagnaOwnershipService
{
    private readonly AppDbContext _db;

    public CampagnaOwnershipService(AppDbContext db)
    {
        _db = db;
    }

    public async Task<bool> CanWriteAsync(ClaimsPrincipal user, string campagnaSlug)
    {
        if (user.IsInRole("ADMIN"))
            return true;

        var masterUserId = await _db.Campagne
            .Where(c => c.Slug == campagnaSlug)
            .Select(c => (Guid?)c.MasterUserId)
            .FirstOrDefaultAsync();

        if (masterUserId is null)
            return true; // campagna non registrata: comportamento legacy

        var callerId = user.FindFirstValue(ClaimTypes.NameIdentifier);
        return callerId is not null && Guid.Parse(callerId) == masterUserId.Value;
    }
}
