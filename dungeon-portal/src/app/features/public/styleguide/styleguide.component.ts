import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignSession } from '../../../shared/models/campaign-session.model';

import { SceneBlockComponent } from '../../../shared/story-blocks/scene-block/scene-block.component';
import { DividerBlockComponent } from '../../../shared/story-blocks/divider-block/divider-block.component';
import { NoteBlockComponent } from '../../../shared/story-blocks/note-block/note-block.component';
import { SubtitleBlockComponent } from '../../../shared/story-blocks/subtitle-block/subtitle-block.component';
import { ListBlockComponent } from '../../../shared/story-blocks/list-block/list-block.component';
import { SpacerBlockComponent } from '../../../shared/story-blocks/spacer-block/spacer-block.component';

/**
 * Galleria degli stili: mostra un esempio di ogni tipo di story-block
 * (e di ogni variante) usando lo stesso layout e gli stessi componenti
 * delle sessioni reali, così la pagina resta sempre fedele agli stili.
 */
@Component({
  selector: 'app-styleguide',
  standalone: true,
  imports: [
    CommonModule,
    SceneBlockComponent,
    DividerBlockComponent,
    NoteBlockComponent,
    SubtitleBlockComponent,
    ListBlockComponent,
    SpacerBlockComponent,
  ],
  templateUrl: './styleguide.component.html',
  styleUrl: './styleguide.component.css',
})
export class StyleguideComponent {
  // Immagini di esempio già presenti negli asset della campagna
  private readonly imgWide =
    'assets/data/ikaros/campagne/discesa-averno/avernus-hero.jpg';
  private readonly imgParty =
    'assets/data/ikaros/campagne/discesa-averno/avernus-party.jpg';

  /**
   * Una "sessione" fittizia che funge da catalogo: ogni capitolo raccoglie
   * un tipo di blocco con tutte le sue varianti. Viene renderizzata con lo
   * stesso markup di dynamic-session.
   */
  readonly session: CampaignSession = {
    id: 0,
    title: 'Galleria degli stili',
    chapters: [
      {
        id: 'paragrafo',
        title: 'Paragrafo',
        blocks: [
          {
            type: 'paragraph',
            text:
              'Paragrafo normale. Il testo può contenere HTML inline, come ' +
              '<strong>grassetto</strong>, <em>corsivo</em> o un ' +
              '<a href="#">collegamento</a>. È il blocco di base della narrazione.',
          },
          {
            type: 'paragraph',
            style: 'italic',
            text:
              'Paragrafo con <code>style: "italic"</code>: tutto il testo è reso in corsivo.',
          },
          {
            type: 'paragraph',
            variant: 'emphasis',
            text:
              'Paragrafo con <code>variant: "emphasis"</code>: centrato, dorato e spaziato, ' +
              'per dare risalto a un momento.',
          },
        ],
      },
      {
        id: 'sottotitolo',
        title: 'Sottotitolo',
        blocks: [
          {
            type: 'paragraph',
            text: 'Il blocco <code>subtitle</code> introduce una sezione dentro un capitolo.',
          },
          { type: 'subtitle', text: 'Un sottotitolo di esempio' },
          {
            type: 'paragraph',
            text: 'Il testo che segue il sottotitolo prosegue normalmente.',
          },
        ],
      },
      {
        id: 'citazione',
        title: 'Citazione',
        blocks: [
          {
            type: 'quote',
            text: 'Chi guarda nell’abisso scopre presto che anche l’abisso lo osserva.',
          },
          {
            type: 'quote',
            text: 'Là dove la luce si arrende, comincia il vero viaggio.',
            author: 'Iscrizione sulle Porte di Averno',
          },
        ],
      },
      {
        id: 'elenco',
        title: 'Elenco',
        blocks: [
          {
            type: 'paragraph',
            text: 'Elenco puntato (default), con pallini dorati:',
          },
          {
            type: 'list',
            items: [
              'Prima voce dell’elenco',
              'Seconda voce, con <strong>testo in evidenza</strong>',
              'Terza voce',
            ],
          },
          {
            type: 'paragraph',
            text: 'Elenco numerato (<code>variant: "number"</code>):',
          },
          {
            type: 'list',
            variant: 'number',
            items: ['Primo passo', 'Secondo passo', 'Terzo passo'],
          },
        ],
      },
      {
        id: 'immagine',
        title: 'Immagine',
        blocks: [
          {
            type: 'paragraph',
            text: 'Variante <code>center</code>: immagine centrata a tutta colonna.',
          },
          { type: 'image', variant: 'center', src: this.imgWide, alt: 'Veduta dell’Averno' },
          {
            type: 'paragraph',
            text:
              'Variante <code>left</code>: l’immagine fluttua a sinistra e il testo le scorre ' +
              'accanto, avvolgendola. Ideale per accompagnare la descrizione di un luogo o di ' +
              'un personaggio senza spezzare il ritmo della lettura. Continua a leggere e vedrai ' +
              'il paragrafo adattarsi attorno alla figura, riempiendo lo spazio rimanente sulla destra.',
          },
          { type: 'image', variant: 'left', src: this.imgParty, alt: 'Il gruppo' },
          {
            type: 'paragraph',
            text:
              'Esistono inoltre le varianti <code>left-small</code> e <code>left-big</code>, ' +
              'identiche ma con larghezze diverse della miniatura a sinistra.',
          },
          { type: 'spacer', variant: 'large' },
        ],
      },
      {
        id: 'scena',
        title: 'Scena',
        blocks: [
          {
            type: 'paragraph',
            text:
              'Il blocco <code>scene</code> è un’immagine full-width con titolo e sottotitolo ' +
              'sovrimpressi, pensata per aprire una scena in modo cinematografico.',
          },
          {
            type: 'scene',
            src: this.imgWide,
            title: 'La discesa nell’Averno',
            subtitle: 'Le porte si aprono',
            alt: 'Le porte di Averno',
          },
        ],
      },
      {
        id: 'divider',
        title: 'Divider',
        blocks: [
          { type: 'paragraph', text: 'Variante <code>flourish</code> (default):' },
          { type: 'divider', variant: 'flourish' },
          { type: 'paragraph', text: 'Variante <code>rune</code>:' },
          { type: 'divider', variant: 'rune' },
          { type: 'paragraph', text: 'Variante <code>plain</code> (solo linea):' },
          { type: 'divider', variant: 'plain' },
        ],
      },
      {
        id: 'nota',
        title: 'Nota del Master',
        blocks: [
          {
            type: 'note',
            text:
              'Riquadro «aside» per lore o voce fuori campo del narratore. ' +
              'Senza titolo mostra l’etichetta di default «Nota del Master».',
          },
          {
            type: 'note',
            title: 'Dietro le quinte',
            text:
              'Con un <strong>titolo</strong> personalizzato la nota può evidenziare segreti, ' +
              'ganci di trama o appunti di preparazione.',
          },
        ],
      },
      {
        id: 'spacer',
        title: 'Spacer',
        blocks: [
          {
            type: 'paragraph',
            text:
              'Il blocco <code>spacer</code> inserisce spazio verticale tra i blocchi ' +
              '(<code>small</code> 16px, <code>medium</code> 36px, <code>large</code> 64px). ' +
              'Qui sotto un <code>spacer</code> large prima del prossimo paragrafo.',
          },
          { type: 'spacer', variant: 'large' },
          { type: 'paragraph', text: 'Paragrafo dopo lo spazio.' },
        ],
      },
    ],
  };
}
