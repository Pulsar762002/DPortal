import { Component, Input } from '@angular/core';
import {QuoteBlock} from "../../../core/models/story-block.model";
import {NgClass} from "@angular/common";


@Component({
  selector: 'app-quote-block',
  standalone: true,
  templateUrl: './quote-block.component.html',
  imports: [
    NgClass
  ]
})
export class QuoteBlockComponent {

  @Input({ required: true })
  block!: QuoteBlock;

}