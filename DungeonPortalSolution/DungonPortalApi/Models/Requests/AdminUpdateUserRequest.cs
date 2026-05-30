namespace DungeonPortal.Api.Models.Requests;

public record AdminUpdateUserRequest(
    string Email,
    string? Nickname,
    string BirthDate,
    string Role,
    string? Password
);
