using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Dungeon_Portal_Api.Migrations
{
    /// <inheritdoc />
    public partial class AddPersonaggi : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Personaggi",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    CampagnaId = table.Column<Guid>(type: "uuid", nullable: true),
                    Nome = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Classe = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: true),
                    Razza = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: true),
                    Livello = table.Column<int>(type: "integer", nullable: true),
                    Descrizione = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: true),
                    AvatarUrl = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Personaggi", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Personaggi_Campagne_CampagnaId",
                        column: x => x.CampagnaId,
                        principalTable: "Campagne",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.SetNull);
                    table.ForeignKey(
                        name: "FK_Personaggi_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Personaggi_CampagnaId",
                table: "Personaggi",
                column: "CampagnaId");

            migrationBuilder.CreateIndex(
                name: "IX_Personaggi_UserId",
                table: "Personaggi",
                column: "UserId");

            // Migrazione dati: finora il nickname era di fatto il personaggio.
            // Per ogni utente GIOCATORE di una campagna crea un PG con quel nome.
            migrationBuilder.Sql(
                """
                INSERT INTO "Personaggi" ("Id", "UserId", "CampagnaId", "Nome", "CreatedAt")
                SELECT gen_random_uuid(), p."UserId", p."CampagnaId", u."Nickname", now()
                FROM "CampagnePartecipanti" p
                JOIN "Users" u ON u."Id" = p."UserId"
                WHERE p."Tipo" = 'GIOCATORE' AND btrim(u."Nickname") <> '';
                """);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Personaggi");
        }
    }
}
