import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { SessioneEditorService } from '../../../shared/services/sessione-editor.service';
import { CampaignChapter, CampaignSession, SessioneMeta } from '../../../shared/models/campaign-session.model';
import { ConfirmDialogComponent } from '../../../core/components/confirm-dialog/confirm-dialog.component';
import { StoryBlockFormComponent } from '../../../shared/story-blocks/story-block-form/story-block-form.component';

/** Id breve e univoco a sufficienza per un capitolo dentro una sessione. */
const generaIdCapitolo = (): string => Math.random().toString(36).slice(2, 10);

/**
 * Editor master delle Sessioni: gestisce l'elenco (etichetta/visibilità) e il
 * contenuto (capitoli + blocchi) di ciascuna sessione. I blocchi del
 * capitolo selezionato sono delegati a <app-story-block-form>, condiviso con
 * l'editor Archivi.
 */
@Component({
  selector: 'app-sessione-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, ConfirmDialogComponent, StoryBlockFormComponent],
  templateUrl: './sessione-editor.component.html',
  styleUrl: './sessione-editor.component.css'
})
export class SessioneEditorComponent implements OnInit {

  /** Slug della campagna a cui appartiene questa sessione, letto dalla route
   *  (`dashboard/campagne/:slug/sessioni`). */
  campagnaSlug = '';

  voci: SessioneMeta[] = [];

  sessioneSelezionata?: CampaignSession;
  capitoloSelezionatoId?: string;

  nuovaEtichettaSessione = '';

  salvando = false;
  messaggio = '';

  mostraConfermaEliminaSessione = false;
  private sessioneDaEliminare?: SessioneMeta;

  constructor(
      private sessioneEditorService: SessioneEditorService,
      private route: ActivatedRoute,
      private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.campagnaSlug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.caricaVoci();
  }

  /** L'app è zoneless: senza detectChanges() la view non si aggiorna dopo
   *  una subscribe() che assegna direttamente lo stato (stesso pattern di
   *  ArchivioEditorComponent). */
  private caricaVoci(): void {
    this.sessioneEditorService.getVociElenco(this.campagnaSlug).subscribe({
      next: (voci) => {
        this.voci = voci;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Errore caricamento elenco sessioni', err)
    });
  }

  get capitoloSelezionato(): CampaignChapter | undefined {
    return this.sessioneSelezionata?.chapters.find(c => c.id === this.capitoloSelezionatoId);
  }

  /** Upload immagine per <app-story-block-form>: risolve già l'URL assoluto. */
  uploadImmagine = (file: File) =>
      this.sessioneEditorService.uploadImmagine(this.campagnaSlug, file)
          .pipe(map(({ url }) => `${environment.apiUrl}${url}`));

  // ===== Elenco sessioni =====

  creaSessione(): void {
    const label = this.nuovaEtichettaSessione.trim();
    if (!label) return;

    this.sessioneEditorService.creaSessione(this.campagnaSlug, label).subscribe({
      next: (voce) => {
        this.nuovaEtichettaSessione = '';
        this.caricaVoci();
        this.apriSessione(voce.sessionNumber);
      },
      error: (err) => console.error('Errore creazione sessione', err)
    });
  }

  aggiornaEtichetta(voce: SessioneMeta, label: string): void {
    const nuovaEtichetta = label.trim();
    if (!nuovaEtichetta || nuovaEtichetta === voce.label) return;

    this.sessioneEditorService.aggiornaVoceElenco(this.campagnaSlug, voce.sessionNumber, nuovaEtichetta, voce.visible).subscribe({
      next: () => {
        voce.label = nuovaEtichetta;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Errore rinomina sessione', err)
    });
  }

  aggiornaVisibilita(voce: SessioneMeta, visible: boolean): void {
    this.sessioneEditorService.aggiornaVoceElenco(this.campagnaSlug, voce.sessionNumber, voce.label, visible).subscribe({
      next: () => {
        voce.visible = visible;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Errore aggiornamento visibilità', err)
    });
  }

  apriSessione(sessionNumber: number): void {
    this.sessioneEditorService.getSessione(this.campagnaSlug, sessionNumber).subscribe({
      next: (sessione) => {
        this.sessioneSelezionata = sessione;
        this.capitoloSelezionatoId = sessione.chapters[0]?.id;
        this.messaggio = '';
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Errore caricamento sessione', err)
    });
  }

  chiediEliminaSessione(voce: SessioneMeta): void {
    this.sessioneDaEliminare = voce;
    this.mostraConfermaEliminaSessione = true;
  }

  confermaEliminaSessione(): void {
    if (!this.sessioneDaEliminare) return;
    const voce = this.sessioneDaEliminare;

    this.sessioneEditorService.eliminaSessione(this.campagnaSlug, voce.sessionNumber).subscribe({
      next: () => {
        if (this.sessioneSelezionata?.id === voce.sessionNumber) {
          this.sessioneSelezionata = undefined;
        }
        this.caricaVoci();
      },
      error: (err) => console.error('Errore eliminazione sessione', err)
    });
  }

  salvaSessione(): void {
    if (!this.sessioneSelezionata) return;

    this.salvando = true;
    this.messaggio = '';

    this.sessioneEditorService.aggiornaSessione(
        this.campagnaSlug,
        this.sessioneSelezionata.id,
        this.sessioneSelezionata.title,
        this.sessioneSelezionata.videoId,
        this.sessioneSelezionata.chapters
    ).subscribe({
      next: () => {
        this.salvando = false;
        this.messaggio = 'Salvato.';
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Errore salvataggio sessione', err);
        this.salvando = false;
        this.messaggio = 'Errore nel salvataggio.';
        this.cdr.detectChanges();
      }
    });
  }

  // ===== Capitoli =====

  aggiungiCapitolo(): void {
    if (!this.sessioneSelezionata) return;

    const capitolo: CampaignChapter = { id: generaIdCapitolo(), title: 'Nuovo capitolo', blocks: [] };
    this.sessioneSelezionata.chapters.push(capitolo);
    this.capitoloSelezionatoId = capitolo.id;
  }

  rimuoviCapitolo(id: string): void {
    if (!this.sessioneSelezionata) return;

    const index = this.sessioneSelezionata.chapters.findIndex(c => c.id === id);
    if (index === -1) return;

    this.sessioneSelezionata.chapters.splice(index, 1);
    if (this.capitoloSelezionatoId === id) {
      this.capitoloSelezionatoId = this.sessioneSelezionata.chapters[0]?.id;
    }
  }

  spostaCapitolo(index: number, direzione: -1 | 1): void {
    if (!this.sessioneSelezionata) return;
    const chapters = this.sessioneSelezionata.chapters;
    const nuovoIndex = index + direzione;
    if (nuovoIndex < 0 || nuovoIndex >= chapters.length) return;
    [chapters[index], chapters[nuovoIndex]] = [chapters[nuovoIndex], chapters[index]];
  }
}
