#!/usr/bin/env python3
"""Valida i dati della campagna contro i loro schema e verifica i riferimenti incrociati.

Controlla:
  - personaggi.json / eventi.json / luoghi.json contro i rispettivi *.schema.json
  - ogni session-N.json contro session.schema.json
  - correlazioni dei personaggi -> id esistenti
  - partecipanti degli eventi -> id personaggi; capitolo -> id capitolo della sessione
  - luogoPadre -> id luoghi; abitantiNotabili -> id personaggi
  - esistenza dei file immagine referenziati da personaggi e luoghi

Esce con codice 1 se trova errori. Eseguibile da qualsiasi cwd.

Uso:
    python3 strumenti/valida.py
"""
from pathlib import Path
import json
import sys

try:
    import jsonschema
except ImportError:
    print("⚠️  Modulo 'jsonschema' non installato: pip install jsonschema")
    sys.exit(2)

SCRIPT_DIR = Path(__file__).resolve().parent
CAMPAIGN_DIR = SCRIPT_DIR.parent
SESS_DIR = CAMPAIGN_DIR / "sessioni"


def trova_src_root(start: Path) -> Path:
    for p in [start, *start.parents]:
        if p.name == "src":
            return p
    raise RuntimeError("Cartella 'src' non trovata")


SRC_ROOT = trova_src_root(SCRIPT_DIR)

errori: list[str] = []


def carica(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def valida_schema(dati, schema_path: Path, etichetta: str):
    try:
        jsonschema.validate(dati, carica(schema_path))
        print(f"  ✔ schema OK: {etichetta}")
    except jsonschema.ValidationError as e:
        errori.append(f"{etichetta}: {e.message} (in {'/'.join(map(str, e.path))})")
        print(f"  ✗ schema ERRORE: {etichetta} -> {e.message}")


def main() -> None:
    pers = carica(CAMPAIGN_DIR / "personaggi.json")
    eventi = carica(CAMPAIGN_DIR / "eventi.json")
    luoghi = carica(CAMPAIGN_DIR / "luoghi.json")

    print("== Validazione schema ==")
    valida_schema(pers, CAMPAIGN_DIR / "personaggi.schema.json", "personaggi.json")
    valida_schema(eventi, CAMPAIGN_DIR / "eventi.schema.json", "eventi.json")
    valida_schema(luoghi, CAMPAIGN_DIR / "luoghi.schema.json", "luoghi.json")

    sess_schema = SESS_DIR / "session.schema.json"
    sessioni = {}
    for f in sorted(SESS_DIR.glob("session-*.json")):
        dati = carica(f)
        valida_schema(dati, sess_schema, f.name)
        sessioni[dati["id"]] = dati

    pid = {p["id"] for p in pers["personaggi"]}
    lid = {l["id"] for l in luoghi["luoghi"]}

    print("\n== Riferimenti incrociati ==")

    for p in pers["personaggi"]:
        for c in p.get("correlazioni", []):
            if c["personaggio"] not in pid:
                errori.append(f"personaggi: {p['id']} -> correlazione '{c['personaggio']}' inesistente")

    for e in eventi["eventi"]:
        for pp in e["partecipanti"]:
            if pp not in pid:
                errori.append(f"eventi: {e['id']} -> partecipante '{pp}' inesistente")
        cap = e.get("capitolo")
        sess = sessioni.get(e["sessione"])
        if cap and sess and cap not in {ch["id"] for ch in sess["chapters"]}:
            errori.append(f"eventi: {e['id']} -> capitolo '{cap}' assente nella sessione {e['sessione']}")

    for l in luoghi["luoghi"]:
        if l.get("luogoPadre") and l["luogoPadre"] not in lid:
            errori.append(f"luoghi: {l['id']} -> luogoPadre '{l['luogoPadre']}' inesistente")
        for a in l.get("abitantiNotabili", []):
            if a not in pid:
                errori.append(f"luoghi: {l['id']} -> abitante '{a}' inesistente")

    print("  riferimenti verificati")

    print("\n== Immagini ==")
    mancanti = 0
    for coll, label in ((pers["personaggi"], "personaggio"), (luoghi["luoghi"], "luogo")):
        for item in coll:
            img = item.get("immagine")
            if img and not (SRC_ROOT / img).is_file():
                errori.append(f"immagine rotta ({label} {item['id']}): {img}")
            elif not img:
                mancanti += 1
    print(f"  immagini referenziate verificate; {mancanti} voci senza immagine (non bloccante)")

    print("\n== Esito ==")
    if errori:
        print(f"❌ {len(errori)} problemi:")
        for x in errori:
            print("   -", x)
        sys.exit(1)
    print("✅ Tutto valido: schema e riferimenti coerenti.")


if __name__ == "__main__":
    main()
