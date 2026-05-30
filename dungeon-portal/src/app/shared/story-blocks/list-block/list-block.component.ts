import { Component, Input } from '@angular/core';
import { ListBlock } from '../../../core/models/story-block.model';
import { TextRenderService } from '../../../core/services/text-render';

@Component({
  selector: 'app-list-block',
  standalone: true,
  templateUrl: './list-block.component.html',
  styleUrls: ['./list-block.component.css'],
})
export class ListBlockComponent {

  @Input({ required: true })
  block!: ListBlock;

  constructor(
      public textRender: TextRenderService
  ) {}

}
