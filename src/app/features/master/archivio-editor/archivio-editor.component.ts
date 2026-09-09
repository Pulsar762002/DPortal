import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { ArchivioService } from '../../../shared/services/archivio.service';
import {
  ArchivioCartella,
  ArchivioIndice,
  ArchivioVoce,
  ArchivioVoceMeta
} from '../../../shared/models/archivio.model';
import { ConfirmDialogComponent } from '../../../core/components/confirm-dialog/confirm-dialog.component';
import { ArchivioCartellaNodeComponent } from './archivio-cartella-node/archivio-cartella-node.component';
import { StoryBlockFormComponent } from '../../../shared/story-blocks/story-block-form/story-block-form.component';

/**
 * Editor master degli Archivi: gestisce cartelle/voci; i blocchi (story-block)
 * di ciascuna voce sono delegati a <app-story-block-form>, condiviso con
 * l'editor Sessioni.
 */
@Component({
  selector: 'app-archivio-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, ConfirmDialogComponent, ArchivioCartellaNodeComponent, StoryBlockFormComponent],
  templateUrl: './archivio-editor.component.html',
  styleUrl: './archivio-editor.component.css'
})
export class ArchivioEditorComponent implements OnInit {

  /** Slug della campagna a cui appartiene questo Archivio, letto dalla route
   *  (`dashboard/campagne/:slug/archivi`). */
  campagnaSlug = '';

  indice: ArchivioIndice = { cartelle: [] };

  voceSelezionata?: ArchivioVoce;

  nuovoNomeCartellaRadice = '';

  salvando = false;
  messaggio = '';

  mostraConfermaEliminaCartella = false;
  mostraConfermaEliminaVoce = false;
  private cartellaDaEliminare?: ArchivioCartella;
  private voceDaEliminare?: { cartellaId: string; voce: ArchivioVoceMeta };

  constructor(
      private archivioService: ArchivioService,
      private route: ActivatedRoute,
      private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.campagnaSlug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.caricaIndice();
  }

  /** L'app è zoneless: senza detectChanges() la view non si aggiorna dopo
   *  una subscribe() che assegna direttamente lo stato (stesso pattern già
   *  usato in dynamic-session/campagne-detail). */
  private caricaIndice(): void {
    this.archivioService.getIndice(this.campagnaSlug).subscribe({
      next: (indice) => {
        this.indice = indice;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Errore caricamento archivi', err)
    });
  }

  // ===== Cartelle =====

  creaCartellaRadice(): void {
    const nome = this.nuovoNomeCartellaRadice.trim();
    if (!nome) return;

    this.archivioService.creaCartella(this.campagnaSlug, nome).subscribe({
      next: () => {
        this.nuovoNomeCartellaRadice = '';
        this.caricaIndice();
      },
      error: (err) => console.error('Errore creazione cartella', err)
    });
  }

  creaSottocartella(cartellaParentId: string, nome: string): void {
    if (!nome.trim()) return;

    this.archivioService.creaCartella(this.campagnaSlug, nome, cartellaParentId).subscribe({
      next: () => this.caricaIndice(),
      error: (err) => console.error('Errore creazione sottocartella', err)
    });
  }

  rinominaCartella(cartella: ArchivioCartella, nome: string): void {
    const nuovoNome = nome.trim();
    if (!nuovoNome || nuovoNome === cartella.nome) return;

    this.archivioService.rinominaCartella(this.campagnaSlug, cartella.id, nuovoNome).subscribe({
      next: () => {
        cartella.nome = nuovoNome;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Errore rinomina cartella', err)
    });
  }

  chiediEliminaCartella(cartella: ArchivioCartella): void {
    this.cartellaDaEliminare = cartella;
    this.mostraConfermaEliminaCartella = true;
  }

  confermaEliminaCartella(): void {
    if (!this.cartellaDaEliminare) return;

    this.archivioService.eliminaCartella(this.campagnaSlug, this.cartellaDaEliminare.id).subscribe({
      next: () => {
        this.voceSelezionata = undefined;
        this.caricaIndice();
      },
      error: (err) => console.error('Errore eliminazione cartella', err)
    });
  }

  // ===== Voci =====

  creaVoce(cartellaId: string, titolo: string): void {
    if (!titolo.trim()) return;

    this.archivioService.creaVoce(this.campagnaSlug, cartellaId, titolo).subscribe({
      next: (voce) => {
        this.caricaIndice();
        this.apriVoce(cartellaId, voce.id);
      },
      error: (err) => console.error('Errore creazione voce', err)
    });
  }

  apriVoce(cartellaId: string, voceId: string): void {
    this.archivioService.getVoce(this.campagnaSlug, voceId).subscribe({
      next: (voce) => {
        this.voceSelezionata = voce;
        this.messaggio = '';
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Errore caricamento voce', err)
    });
  }

  chiediEliminaVoce(cartellaId: string, voce: ArchivioVoceMeta): void {
    this.voceDaEliminare = { cartellaId, voce };
    this.mostraConfermaEliminaVoce = true;
  }

  confermaEliminaVoce(): void {
    if (!this.voceDaEliminare) return;
    const { voce } = this.voceDaEliminare;

    this.archivioService.eliminaVoce(this.campagnaSlug, voce.id).subscribe({
      next: () => {
        if (this.voceSelezionata?.id === voce.id) {
          this.voceSelezionata = undefined;
        }
        this.caricaIndice();
      },
      error: (err) => console.error('Errore eliminazione voce', err)
    });
  }

  salvaVoce(): void {
    if (!this.voceSelezionata) return;

    this.salvando = true;
    this.messaggio = '';

    this.archivioService.aggiornaVoce(
        this.campagnaSlug,
        this.voceSelezionata.id,
        this.voceSelezionata.titolo,
        this.voceSelezionata.blocks
    ).subscribe({
      next: () => {
        this.salvando = false;
        this.messaggio = 'Salvato.';
        this.caricaIndice();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Errore salvataggio voce', err);
        this.salvando = false;
        this.messaggio = 'Errore nel salvataggio.';
        this.cdr.detectChanges();
      }
    });
  }

  /** Upload immagine per <app-story-block-form>: risolve già l'URL assoluto
   *  (il componente condiviso non conosce campagna/environment). */
  uploadImmagine = (file: File) =>
      this.archivioService.uploadImmagine(this.campagnaSlug, file)
          .pipe(map(({ url }) => `${environment.apiUrl}${url}`));
}
