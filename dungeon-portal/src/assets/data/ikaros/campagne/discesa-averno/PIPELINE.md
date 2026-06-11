# Pipeline di lavorazione di una sessione

Procedura ripetibile da eseguire **allo stesso modo per ogni nuova sessione** della
campagna *Discesa ad Averno*. Si compone di 3 passi, sempre nello stesso ordine.

## File coinvolti

| File | Ruolo |
|---|---|
| `sessioni/session-<N>.json` | La cronaca narrativa (story-block). |
| `personaggi.json` (+ schema) | Chi: catalogo personaggi, con correlazioni. |
| `eventi.json` (+ schema) | Cosa succede e chi partecipa, in ordine narrativo. |
| `luoghi.json` (+ schema) | Dove: atlante dei luoghi, annidabili. |
| `compendio.md` | Riepilogo leggibile generato dai JSON (stato immagini). |
| `strumenti/genera-compendio.py` | Rigenera `compendio.md`. |
| `strumenti/valida.py` | Valida schema + riferimenti incrociati. |

## Convenzioni vincolanti (tutte le sessioni)

- Testi in italiano.
- Dialoghi (`quote`) sempre tra virgolette caporali `«…»`.
- Niente sistema metrico: distanze brevi in **passi**, lunghe in **miglia**.
- Story-block ammessi: `paragraph`, `quote`, `image`, `scene`, `divider`, `note`,
  `list`, `spacer`, `subtitle`. Le vedute d'ambiente che aprono un capitolo vanno
  rese come `scene` (titolo + sottotitolo in Title Case).
- Gli `id` sono in kebab-case e stabili nel tempo (non rinominarli senza aggiornare
  i riferimenti).

## I 3 passi

### 1) Prosa — agente `averno-session-stylist`

Affidare `session-<N>.json` all'agente con le convenzioni qui sopra. L'agente:
migliora la resa (sensoriale, sobria, tono Avernus), uniforma i caporali e le unità,
corregge refusi oggettivi, aggiunge `divider`/`note`/`scene` dove serve.
Non cambia eventi, nomi o struttura dei capitoli.

### 2) Popolamento JSON (personaggi, eventi, luoghi)

Indipendente dalla rifinitura della prosa (si basa sui contenuti, non sullo stile).

- **personaggi.json**: aggiungere i nuovi personaggi; per quelli già esistenti
  aggiornare `apparizioni`, `note`, `stato`, eventuali nuove `correlazioni` e
  rivelazioni (nomi completi, classi, ecc.).
- **eventi.json**: aggiungere gli eventi della sessione in coda, con `ordine`
  crescente; `partecipanti` = id da `personaggi.json`; `capitolo` = id capitolo.
- **luoghi.json**: aggiungere i nuovi luoghi (con `luogoPadre` se annidati) e
  aggiornare `apparizioni`/`note`/`stato` di quelli ricorrenti.
- Alzare `ultimoAggiornamento` a `<N>` nei tre file.

### 3) Compendio + validazione

```bash
python3 strumenti/valida.py          # schema + riferimenti incrociati
python3 strumenti/genera-compendio.py  # rigenera compendio.md
```

`valida.py` esce con codice ≠ 0 se ci sono riferimenti rotti: risolverli prima di
considerare chiusa la sessione. `genera-compendio.py` riscrive `compendio.md` con lo
stato reale delle immagini.

## Checklist rapida

- [ ] Prosa rifinita dall'agente, JSON della sessione valido.
- [ ] Nuovi personaggi/eventi/luoghi inseriti; ricorrenti aggiornati.
- [ ] `ultimoAggiornamento` = numero sessione nei tre JSON.
- [ ] `valida.py` → ✅.
- [ ] `compendio.md` rigenerato.
