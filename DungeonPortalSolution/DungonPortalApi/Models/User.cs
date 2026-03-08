using System.ComponentModel.DataAnnotations;

namespace DungeonPortal.Api.Models;

public class User
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    [EmailAddress]
    [MaxLength(150)]
    public string Email { get; set; } = string.Empty;

    [Required]
    [MaxLength(200)]
    public string PasswordHash { get; set; } = string.Empty;

    [Required]
    [MaxLength(50)]
    public string Nickname { get; set; } = string.Empty;

    [MaxLength(255)]
    public string? AvatarUrl { get; set; }

    [Required]
    public DateTime BirthDate { get; set; }

    [Required]
    [MaxLength(20)]
    public string Role { get; set; } = "USER";

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public bool IsActive { get; set; } = true;
}