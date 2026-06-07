#!/usr/bin/env python3
"""Rigenera compendio.md a partire da personaggi.json e luoghi.json.

Lo stato di ogni immagine viene verificato sui file reali sotto la cartella `src/`.
Eseguibile da qualsiasi cwd: i percorsi sono risolti rispetto alla posizione dello script.

Uso:
    python3 strumenti/genera-compendio.py
"""
from pathlib import Path
import json

SCRIPT_DIR = Path(__file__).resolve().parent
CAMPAIGN_DIR = SCRIPT_DIR.parent


def trova_src_root(start: Path) -> Path:
    """Risale fino alla cartella 'src' (radice degli asset serviti)."""
    for p in [start, *start.parents]:
        if p.name == "src":
            return p
    raise RuntimeError("Cartella 'src' non trovata risalendo da " + str(start))


SRC_ROOT = trova_src_root(SCRIPT_DIR)


def stato_immagine(img: str | None) -> tuple[str, str]:
    if not img:
        return "❌ assente", ""
    nome = img.split("/")[-1]
    esiste = (SRC_ROOT / img).is_file()
    return ("✅ presente" if esiste else "⚠️ percorso rotto"), nome


def main() -> None:
    pers = json.loads((CAMPAIGN_DIR / "personaggi.json").read_text(encoding="utf-8"))
    luoghi = json.loads((CAMPAIGN_DIR / "luoghi.json").read_text(encoding="utf-8"))

    CAT = {"party": "Party", "alleato": "Alleati", "avversario": "Avversari", "secondario": "Secondari"}
    ordine = ["party", "alleato", "secondario", "avversario"]

    out: list[str] = []
    out.append("# Compendio — Discesa ad Averno (campagna Ikaros)")
    out.append("")
    out.append("> File generato automaticamente da `personaggi.json` e `luoghi.json`")
    out.append("> tramite `strumenti/genera-compendio.py`. Non modificare a mano.")
    out.append("> Lo stato immagine è verificato sui file reali in `src/`.")
    out.append(f"> Ultimo aggiornamento dati: sessione {pers.get('ultimoAggiornamento', '?')}.")
    out.append("")

    tot = len(pers["personaggi"]) + len(luoghi["luoghi"])
    have = sum(1 for p in pers["personaggi"] if stato_immagine(p.get("immagine"))[0].startswith("✅"))
    have += sum(1 for l in luoghi["luoghi"] if stato_immagine(l.get("immagine"))[0].startswith("✅"))
    out.append(f"**Immagini:** {have}/{tot} presenti, {tot - have} mancanti.")
    out.append("")

    out.append("## Personaggi")
    out.append("")
    for cat in ordine:
        grp = [p for p in pers["personaggi"] if p["categoria"] == cat]
        if not grp:
            continue
        out.append(f"### {CAT[cat]}")
        out.append("")
        out.append("| Personaggio | Ruolo | Razza | Stato | Sessioni | Immagine | File |")
        out.append("|---|---|---|---|---|---|---|")
        for p in grp:
            st, nome = stato_immagine(p.get("immagine"))
            app = ", ".join(str(s) for s in p.get("apparizioni", [])) or "—"
            out.append(
                f"| **{p['nome']}** | {p.get('ruolo', '—')} | {p.get('razza', '—')} | "
                f"{p.get('stato', '—')} | {app} | {st} | {nome or '—'} |"
            )
        out.append("")

    out.append("## Luoghi")
    out.append("")
    out.append("| Luogo | Tipo | Contenuto in | Stato | Sessioni | Immagine | File |")
    out.append("|---|---|---|---|---|---|---|")
    nomi = {l["id"]: l["nome"] for l in luoghi["luoghi"]}
    for l in luoghi["luoghi"]:
        st, nome = stato_immagine(l.get("immagine"))
        padre = nomi.get(l.get("luogoPadre"), "—") if l.get("luogoPadre") else "—"
        app = ", ".join(str(s) for s in l.get("apparizioni", [])) or "—"
        out.append(
            f"| **{l['nome']}** | {l['tipo']} | {padre} | {l.get('stato', '—')} | "
            f"{app} | {st} | {nome or '—'} |"
        )
    out.append("")

    out.append("## Immagini mancanti")
    out.append("")
    missp = [p["nome"] for p in pers["personaggi"] if not p.get("immagine")]
    missl = [l["nome"] for l in luoghi["luoghi"] if not l.get("immagine")]
    out.append("**Personaggi senza ritratto:** " + (", ".join(missp) if missp else "nessuno ✅"))
    out.append("")
    out.append("**Luoghi senza immagine:** " + (", ".join(missl) if missl else "nessuno ✅"))
    out.append("")

    (CAMPAIGN_DIR / "compendio.md").write_text("\n".join(out), encoding="utf-8")
    print(f"compendio.md aggiornato — {len(pers['personaggi'])} personaggi, "
          f"{len(luoghi['luoghi'])} luoghi, immagini {have}/{tot}.")


if __name__ == "__main__":
    main()
