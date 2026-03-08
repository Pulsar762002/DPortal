FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY ["DungonPortalApi/DungonPortalApi.csproj", "DungonPortalApi/"]
RUN dotnet restore "DungonPortalApi/DungonPortalApi.csproj"

COPY . .
WORKDIR "/src/DungonPortalApi"
RUN dotnet publish "DungonPortalApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "DungonPortalApi.dll"]
