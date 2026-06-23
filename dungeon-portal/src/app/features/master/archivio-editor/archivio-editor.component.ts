import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { environment } from '../../../../environments/environment';
import { ArchivioService } from '../../../shared/services/archivio.service';
import {
  ArchivioCartella,
  ArchivioIndice,
  ArchivioVoce,
  ArchivioVoceMeta
} from '../../../shared/models/archivio.model';
import { StoryBlock } from '../../../core/models/story-block.model';
import { ConfirmDialogComponent } from '../../../core/components/confirm-dialog/confirm-dialog.component';
import { ArchivioCartellaNodeComponent } from './archivio-cartella-node/archivio-cartella-node.component';

type TipoBlocco = StoryBlock['type'];

const TIPI_BLOCCO: TipoBlocco[] =
    ['paragraph', 'subtitle', 'quote', 'image', 'scene', 'divider', 'note', 'list', 'spacer'];

const BLOCCO_DEFAULT: Record<TipoBlocco, () => StoryBlock> = {
  paragraph: () => ({ type: 'paragraph', text: '' }),
  subtitle: () => ({ type: 'subtitle', text: '' }),
  quote: () => ({ type: 'quote', text: '' }),
  image: () => ({ type: 'image', variant: 'center', src: '', alt: '' }),
  scene: () => ({ type: 'scene', src: '', title: '', subtitle: '' }),
  divider: () => ({ type: 'divider', variant: 'flourish' }),
  note: () => ({ type: 'note', text: '', title: '' }),
  list: () => ({ type: 'list', items: [''], variant: 'bullet' }),
  spacer: () => ({ type: 'spacer', variant: 'medium' }),
};

/**
 * Editor master degli Archivi: gestisce cartelle/voci e i blocchi (story-block)
 * di ciascuna voce tramite un form strutturato (no WYSIWYG), coerente con
 * come oggi si scrivono a mano i JSON delle sessioni.
 */
@Component({
  selector: 'app-archivio-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, ConfirmDialogComponent, ArchivioCartellaNodeComponent],
  templateUrl: './archivio-editor.component.html',
  styleUrl: './archivio-editor.component.css'
})
export class ArchivioEditorComponent implements OnInit {

  /** Unica campagna esistente oggi: niente selettore, evita di costruire
   *  una UI multi-campagna che non serve ancora a nessuno. */
  readonly campagnaSlug = 'discesa-averno';

  readonly tipiBlocco = TIPI_BLOCCO;

  indice: ArchivioIndice = { cartelle: [] };

  voceSelezionata?: ArchivioVoce;

  nuovoNomeCartellaRadice = '';
  tipoNuovoBlocco: TipoBlocco = 'paragraph';

  salvando = false;
  messaggio = '';
  caricandoImmagine = false;

  mostraConfermaEliminaCartella = false;
  mostraConfermaEliminaVoce = false;
  private cartellaDaEliminare?: ArchivioCartella;
  private voceDaEliminare?: { cartellaId: string; voce: ArchivioVoceMeta };

  constructor(
      private archivioService: ArchivioService,
      private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
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

  // ===== Blocchi =====

  aggiungiBlocco(): void {
    if (!this.voceSelezionata) return;
    this.voceSelezionata.blocks.push(BLOCCO_DEFAULT[this.tipoNuovoBlocco]());
  }

  rimuoviBlocco(index: number): void {
    if (!this.voceSelezionata) return;
    this.voceSelezionata.blocks.splice(index, 1);
  }

  spostaBlocco(index: number, direzione: -1 | 1): void {
    if (!this.voceSelezionata) return;
    const blocks = this.voceSelezionata.blocks;
    const nuovoIndex = index + direzione;
    if (nuovoIndex < 0 || nuovoIndex >= blocks.length) return;
    [blocks[index], blocks[nuovoIndex]] = [blocks[nuovoIndex], blocks[index]];
  }

  /** Carica il file scelto e assegna l'URL risultante a `block.src`, evitando
   *  di dover incollare a mano un percorso e ricordarsi di rifare il build
   *  del frontend per ogni nuova immagine (content/ è un volume Docker). */
  caricaImmagine(event: Event, block: { src: string }): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.caricandoImmagine = true;
    this.archivioService.uploadImmagine(this.campagnaSlug, file).subscribe({
      next: ({ url }) => {
        block.src = `${environment.apiUrl}${url}`;
        this.caricandoImmagine = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Errore upload immagine', err);
        this.caricandoImmagine = false;
        this.cdr.detectChanges();
      }
    });

    input.value = '';
  }

  getListText(block: { items: string[] }): string {
    return (block.items || []).join('\n');
  }

  setListText(block: { items: string[] }, value: string): void {
    block.items = value.split('\n');
  }
}
