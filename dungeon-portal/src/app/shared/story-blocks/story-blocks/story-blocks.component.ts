import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryBlock } from '../../../core/models/story-block.model';

import { SceneBlockComponent } from '../scene-block/scene-block.component';
import { DividerBlockComponent } from '../divider-block/divider-block.component';
import { NoteBlockComponent } from '../note-block/note-block.component';
import { SubtitleBlockComponent } from '../subtitle-block/subtitle-block.component';
import { ListBlockComponent } from '../list-block/list-block.component';
import { SpacerBlockComponent } from '../spacer-block/spacer-block.component';

/**
 * Dispatcher unico per il rendering di un array di StoryBlock. Estratto da
 * dynamic-session per essere riusato anche dagli Archivi: questa resta
 * l'unica implementazione della catena di rendering (non una seconda).
 */
@Component({
  selector: 'app-story-blocks',
  standalone: true,

  imports: [
    CommonModule,
    SceneBlockComponent,
    DividerBlockComponent,
    NoteBlockComponent,
    SubtitleBlockComponent,
    ListBlockComponent,
    SpacerBlockComponent
  ],

  templateUrl: './story-blocks.component.html',
  styleUrl: './story-blocks.component.css'
})
export class StoryBlocksComponent {

  @Input()
  blocks: StoryBlock[] = [];

  /** Usato come alt di fallback per le immagini quando block.alt è assente. */
  @Input()
  fallbackImageAlt = '';
}
