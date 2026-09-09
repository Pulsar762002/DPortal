import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { ComeSiGiocaService } from '../../../shared/services/come-si-gioca.service';
import {
  ComeSiGiocaArgomento,
  ComeSiGiocaArgomentoMeta,
  ComeSiGiocaCategoria,
  ComeSiGiocaIndice
} from '../../../core/models/come-si-gioca.model';
import { ConfirmDialogComponent } from '../../../core/components/confirm-dialog/confirm-dialog.component';
import { StoryBlockFormComponent } from '../../../shared/story-blocks/story-block-form/story-block-form.component';

/**
 * Editor master della pagina "Come si gioca": gestisce categorie (piatte,
 * senza nidificazione) e argomenti. I blocchi (story-block) dell'argomento
 * selezionato sono delegati a <app-story-block-form>, condiviso con gli
 * editor Archivi e Sessioni.
 */
@Component({
  selector: 'app-come-si-gioca-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, ConfirmDialogComponent, StoryBlockFormComponent],
  templateUrl: './come-si-gioca-editor.component.html',
  styleUrl: './come-si-gioca-editor.component.css'
})
export class ComeSiGiocaEditorComponent implements OnInit {

  /** Slug della campagna a cui appartiene questa pagina, letto dalla route
   *  (`dashboard/campagne/:slug/come-si-gioca`). */
  campagnaSlug = '';

  indice: ComeSiGiocaIndice = { categorie: [], argomenti: [] };

  categoriaSelezionataId?: string;
  argomentoSelezionato?: ComeSiGiocaArgomento;

  nuovoNomeCategoria = '';
  nuovoTitoloArgomento = '';

  salvando = false;
  messaggio = '';
  caricandoImmagine = false;

  mostraConfermaEliminaCategoria = false;
  mostraConfermaEliminaArgomento = false;
  private categoriaDaEliminare?: ComeSiGiocaCategoria;
  private argomentoDaEliminare?: ComeSiGiocaArgomentoMeta;

  constructor(
      private comeSiGiocaService: ComeSiGiocaService,
      private route: ActivatedRoute,
      private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.campagnaSlug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.caricaIndice();
  }

  /** L'app è zoneless: senza detectChanges() la view non si aggiorna dopo
   *  una subscribe() che assegna direttamente lo stato (stesso pattern già
   *  usato in ArchivioEditorComponent/SessioneEditorComponent). */
  private caricaIndice(): void {
    this.comeSiGiocaService.getIndice(this.campagnaSlug).subscribe({
      next: (indice) => {
        this.indice = indice;
        if (!this.categoriaSelezionataId && indice.categorie.length) {
          this.categoriaSelezionataId = indice.categorie[0].id;
        }
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Errore caricamento "Come si gioca"', err)
    });
  }

  argomentiDiCategoria(categoriaId: string): ComeSiGiocaArgomentoMeta[] {
    return this.indice.argomenti.filter(a => a.categoria === categoriaId);
  }

  // ===== Categorie =====

  creaCategoria(): void {
    const titolo = this.nuovoNomeCategoria.trim();
    if (!titolo) return;

    this.comeSiGiocaService.creaCategoria(this.campagnaSlug, titolo).subscribe({
      next: (categoria) => {
        this.nuovoNomeCategoria = '';
        this.categoriaSelezionataId = categoria.id;
        this.caricaIndice();
      },
      error: (err) => console.error('Errore creazione categoria', err)
    });
  }

  rinominaCategoria(categoria: ComeSiGiocaCategoria, titolo: string): void {
    const nuovoTitolo = titolo.trim();
    if (!nuovoTitolo || nuovoTitolo === categoria.titolo) return;

    this.comeSiGiocaService.rinominaCategoria(this.campagnaSlug, categoria.id, nuovoTitolo).subscribe({
      next: () => {
        categoria.titolo = nuovoTitolo;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Errore rinomina categoria', err)
    });
  }

  chiediEliminaCategoria(categoria: ComeSiGiocaCategoria): void {
    this.categoriaDaEliminare = categoria;
    this.mostraConfermaEliminaCategoria = true;
  }

  confermaEliminaCategoria(): void {
    if (!this.categoriaDaEliminare) return;
    const categoria = this.categoriaDaEliminare;

    this.comeSiGiocaService.eliminaCategoria(this.campagnaSlug, categoria.id).subscribe({
      next: () => {
        if (this.argomentoSelezionato?.categoria === categoria.id) {
          this.argomentoSelezionato = undefined;
        }
        if (this.categoriaSelezionataId === categoria.id) {
          this.categoriaSelezionataId = undefined;
        }
        this.caricaIndice();
      },
      error: (err) => console.error('Errore eliminazione categoria', err)
    });
  }

  // ===== Argomenti =====

  creaArgomento(categoriaId: string): void {
    const titolo = this.nuovoTitoloArgomento.trim();
    if (!titolo) return;

    this.comeSiGiocaService.creaArgomento(this.campagnaSlug, titolo, categoriaId).subscribe({
      next: (argomento) => {
        this.nuovoTitoloArgomento = '';
        this.caricaIndice();
        this.apriArgomento(argomento.id);
      },
      error: (err) => console.error('Errore creazione argomento', err)
    });
  }

  apriArgomento(argomentoId: string): void {
    this.comeSiGiocaService.getArgomento(this.campagnaSlug, argomentoId).subscribe({
      next: (argomento) => {
        this.argomentoSelezionato = argomento;
        this.messaggio = '';
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Errore caricamento argomento', err)
    });
  }

  chiediEliminaArgomento(argomento: ComeSiGiocaArgomentoMeta): void {
    this.argomentoDaEliminare = argomento;
    this.mostraConfermaEliminaArgomento = true;
  }

  confermaEliminaArgomento(): void {
    if (!this.argomentoDaEliminare) return;
    const argomento = this.argomentoDaEliminare;

    this.comeSiGiocaService.eliminaArgomento(this.campagnaSlug, argomento.id).subscribe({
      next: () => {
        if (this.argomentoSelezionato?.id === argomento.id) {
          this.argomentoSelezionato = undefined;
        }
        this.caricaIndice();
      },
      error: (err) => console.error('Errore eliminazione argomento', err)
    });
  }

  salvaArgomento(): void {
    if (!this.argomentoSelezionato) return;

    this.salvando = true;
    this.messaggio = '';

    this.comeSiGiocaService.aggiornaArgomento(
        this.campagnaSlug,
        this.argomentoSelezionato.id,
        this.argomentoSelezionato.titolo,
        this.argomentoSelezionato.categoria,
        this.argomentoSelezionato.sommario,
        this.argomentoSelezionato.immagine,
        this.argomentoSelezionato.blocks
    ).subscribe({
      next: () => {
        this.salvando = false;
        this.messaggio = 'Salvato.';
        this.caricaIndice();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Errore salvataggio argomento', err);
        this.salvando = false;
        this.messaggio = 'Errore nel salvataggio.';
        this.cdr.detectChanges();
      }
    });
  }

  /** Upload della copertina quadrata dell'argomento: risolve subito l'URL assoluto e lo assegna. */
  caricaImmagineCopertina(event: Event): void {
    if (!this.argomentoSelezionato) return;

    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.caricandoImmagine = true;

    this.comeSiGiocaService.uploadImmagine(this.campagnaSlug, file).subscribe({
      next: ({ url }) => {
        if (this.argomentoSelezionato) {
          this.argomentoSelezionato.immagine = `${environment.apiUrl}${url}`;
        }
        this.caricandoImmagine = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Errore caricamento immagine', err);
        this.caricandoImmagine = false;
        this.cdr.detectChanges();
      }
    });
  }

  /** Upload immagine per <app-story-block-form>: risolve già l'URL assoluto
   *  (il componente condiviso non conosce campagna/environment). */
  uploadImmagine = (file: File) =>
      this.comeSiGiocaService.uploadImmagine(this.campagnaSlug, file)
          .pipe(map(({ url }) => `${environment.apiUrl}${url}`));
}
