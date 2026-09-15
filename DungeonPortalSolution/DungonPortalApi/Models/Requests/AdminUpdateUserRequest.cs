namespace DungeonPortal.Api.Models.Requests;

public record AdminUpdateUserRequest(
    string Email,
    string? Nickname,
    string BirthDate,
    string Role,
    string? Password
);

public record UpdateUserStatusRequest(bool IsActive);

public record AdminCreateUserRequest(
    string Email,
    string? Nickname,
    string BirthDate,
    string Role,
    string Password
);
