import { Component, Input } from '@angular/core';
import { NoteBlock } from '../../../core/models/story-block.model';
import { TextRenderService } from '../../../core/services/text-render';

@Component({
  selector: 'app-note-block',
  standalone: true,
  templateUrl: './note-block.component.html',
  styleUrls: ['./note-block.component.css'],
})
export class NoteBlockComponent {

  @Input({ required: true })
  block!: NoteBlock;

  constructor(
      public textRender: TextRenderService
  ) {}

}
