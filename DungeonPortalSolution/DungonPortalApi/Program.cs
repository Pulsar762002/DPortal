using DungeonPortal.Api.Data;
using DungeonPortal.Api.Endpoints;
using DungeonPortal.Api.Extensions;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAppServices(builder.Configuration);

var app = builder.Build();

// Cartella "uploads" servita sotto /uploads
var uploadsPath = Path.Combine(Directory.GetCurrentDirectory(), "uploads");
Directory.CreateDirectory(uploadsPath);

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(uploadsPath),
    RequestPath = "/uploads"
});

// Cartella "content" (materiale di campagna versionato, es. immagini Archivi) servita sotto /content
var contentPath = Path.Combine(Directory.GetCurrentDirectory(), "content");
Directory.CreateDirectory(contentPath);

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(contentPath),
    RequestPath = "/content"
});

app.UseStaticFiles(); // wwwroot

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors(ServiceCollectionExtensions.FrontendCorsPolicy);

app.UseAuthentication();
app.UseAuthorization();

// Applica le migrazioni (con baseline per DB legacy) e crea l'utente seed
DbInitializer.Initialize(app.Services);

app.MapAuthEndpoints();
app.MapUserEndpoints();
app.MapAdminEndpoints();
app.MapArchivioEndpoints();
app.MapSessioneEndpoints();

app.Run();
