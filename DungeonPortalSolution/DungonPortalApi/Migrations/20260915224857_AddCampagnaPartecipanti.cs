using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Dungeon_Portal_Api.Migrations
{
    /// <inheritdoc />
    public partial class AddCampagnaPartecipanti : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CampagnePartecipanti",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CampagnaId = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    Tipo = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CampagnePartecipanti", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CampagnePartecipanti_Campagne_CampagnaId",
                        column: x => x.CampagnaId,
                        principalTable: "Campagne",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CampagnePartecipanti_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CampagnePartecipanti_CampagnaId_UserId",
                table: "CampagnePartecipanti",
                columns: new[] { "CampagnaId", "UserId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CampagnePartecipanti_UserId",
                table: "CampagnePartecipanti",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CampagnePartecipanti");
        }
    }
}
