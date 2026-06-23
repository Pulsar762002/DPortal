#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

UP=false
NO_CACHE=false

PORTAL_SERVICES=(postgres dungeon-portal-api dungeonportal-frontend)

usage() {
  echo "Uso: $0 [--up] [--no-cache]"
  echo "  --up        dopo la build, avvia solo i servizi del portale (${PORTAL_SERVICES[*]})"
  echo "  --no-cache  forza una build da zero, senza cache Docker"
  echo
  echo "Non tocca altri servizi eventualmente definiti nello stesso docker-compose.yml"
  echo "(es. istanze FoundryVTT) - costruisce e avvia solo il portale."
}

for arg in "$@"; do
  case "$arg" in
    --up) UP=true ;;
    --no-cache) NO_CACHE=true ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Argomento non riconosciuto: $arg" >&2; usage; exit 1 ;;
  esac
done

BUILD_ARGS=()
if [ "$NO_CACHE" = true ]; then
  BUILD_ARGS+=(--no-cache)
fi

echo "==> Build immagini Docker (api + frontend)"
docker compose build "${BUILD_ARGS[@]}" dungeon-portal-api dungeonportal-frontend

if [ "$UP" = true ]; then
  echo "==> Avvio servizi del portale: ${PORTAL_SERVICES[*]}"
  docker compose up -d "${PORTAL_SERVICES[@]}"
fi

echo "==> Fatto."
