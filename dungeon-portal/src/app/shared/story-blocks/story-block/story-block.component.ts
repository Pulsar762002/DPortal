import { Component, Input } from '@angular/core';
import {QuoteBlockComponent} from "../quote-block/quote-block.component";
import {ImageBlockComponent} from "../image-block/image-block.component";
import {ParagraphBlockComponent} from "../paragraph-block/paragraph-block.component";
import {SceneBlockComponent} from "../scene-block/scene-block.component";
import {DividerBlockComponent} from "../divider-block/divider-block.component";
import {NoteBlockComponent} from "../note-block/note-block.component";
import {StoryBlock} from "../../../core/models/story-block.model";

@Component({
  selector: 'app-story-block',
  standalone: true,
  templateUrl: './story-block.component.html',
  imports: [
    QuoteBlockComponent,
    ImageBlockComponent,
    ParagraphBlockComponent,
    SceneBlockComponent,
    DividerBlockComponent,
    NoteBlockComponent
  ]
})
export class StoryBlockComponent {

  @Input({ required: true })
  block!: StoryBlock;

}