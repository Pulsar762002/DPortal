import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { StoryBlock } from '../../../core/models/story-block.model';

export type TipoBlocco = StoryBlock['type'];

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
 * Form strutturato (no WYSIWYG) per gestire un array di StoryBlock: aggiungi,
 * sposta, elimina, upload immagine. Condiviso tra l'editor Archivi e
 * l'editor Sessioni — chi lo usa fornisce solo l'array di blocchi (mutato in
 * place) e la funzione di upload immagine, che resta specifica per contesto
 * (campagna/endpoint diversi) e già risolta all'URL assoluto finale.
 */
@Component({
  selector: 'app-story-block-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './story-block-form.component.html',
  styleUrl: './story-block-form.component.css'
})
export class StoryBlockFormComponent {
  @Input({ required: true }) blocks!: StoryBlock[];
  @Input({ required: true }) uploadImmagine!: (file: File) => Observable<string>;

  readonly tipiBlocco = TIPI_BLOCCO;
  tipoNuovoBlocco: TipoBlocco = 'paragraph';
  caricandoImmagine = false;

  constructor(private cdr: ChangeDetectorRef) {}

  aggiungiBlocco(): void {
    this.blocks.push(BLOCCO_DEFAULT[this.tipoNuovoBlocco]());
  }

  rimuoviBlocco(index: number): void {
    this.blocks.splice(index, 1);
  }

  spostaBlocco(index: number, direzione: -1 | 1): void {
    const nuovoIndex = index + direzione;
    if (nuovoIndex < 0 || nuovoIndex >= this.blocks.length) return;
    [this.blocks[index], this.blocks[nuovoIndex]] = [this.blocks[nuovoIndex], this.blocks[index]];
  }

  /** L'app è zoneless: senza detectChanges() la view non si aggiorna dopo
   *  una subscribe() che assegna direttamente lo stato. */
  caricaImmagine(event: Event, block: { src: string }): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.caricandoImmagine = true;
    this.uploadImmagine(file).subscribe({
      next: (url) => {
        block.src = url;
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
