using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Dungeon_Portal_Api.Migrations
{
    /// <inheritdoc />
    public partial class AddLandAndCampagna : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Lands",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Slug = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Nome = table.Column<string>(type: "character varying(150)", maxLength: 150, nullable: false),
                    Lore = table.Column<string>(type: "character varying(4000)", maxLength: 4000, nullable: true),
                    MapImageUrl = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lands", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Campagne",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Slug = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Nome = table.Column<string>(type: "character varying(150)", maxLength: 150, nullable: false),
                    Descrizione = table.Column<string>(type: "character varying(1000)", maxLength: 1000, nullable: true),
                    LandId = table.Column<Guid>(type: "uuid", nullable: false),
                    MasterUserId = table.Column<Guid>(type: "uuid", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Campagne", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Campagne_Lands_LandId",
                        column: x => x.LandId,
                        principalTable: "Lands",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Campagne_Users_MasterUserId",
                        column: x => x.MasterUserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "LandMasters",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    LandId = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    IsPrincipale = table.Column<bool>(type: "boolean", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LandMasters", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LandMasters_Lands_LandId",
                        column: x => x.LandId,
                        principalTable: "Lands",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LandMasters_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Campagne_LandId",
                table: "Campagne",
                column: "LandId");

            migrationBuilder.CreateIndex(
                name: "IX_Campagne_MasterUserId",
                table: "Campagne",
                column: "MasterUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Campagne_Slug",
                table: "Campagne",
                column: "Slug",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LandMasters_LandId",
                table: "LandMasters",
                column: "LandId",
                unique: true,
                filter: "\"IsPrincipale\" = true");

            migrationBuilder.CreateIndex(
                name: "IX_LandMasters_LandId_UserId",
                table: "LandMasters",
                columns: new[] { "LandId", "UserId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_LandMasters_UserId",
                table: "LandMasters",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Lands_Slug",
                table: "Lands",
                column: "Slug",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Campagne");

            migrationBuilder.DropTable(
                name: "LandMasters");

            migrationBuilder.DropTable(
                name: "Lands");
        }
    }
}
