import { Component, Input } from '@angular/core';
import {ParagraphBlock} from "../../../core/models/story-block.model";
import {TextRenderService} from "../../../core/services/text-render";
import {NgClass} from "@angular/common";


@Component({
  selector: 'app-paragraph-block',
  standalone: true,
  templateUrl: './paragraph-block.component.html',
  imports: [
    NgClass
  ]
})
export class ParagraphBlockComponent {

  @Input({ required: true })
  block!: ParagraphBlock;

  constructor(
      public textRender: TextRenderService
  ) {}

}