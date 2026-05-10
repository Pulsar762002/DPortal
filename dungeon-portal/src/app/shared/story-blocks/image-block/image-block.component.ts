import { Component, Input } from '@angular/core';
import {NgClass} from "@angular/common";
import {ImageBlock} from "../../../core/models/story-block.model";

@Component({
  selector: 'app-image-block',
  standalone: true,
  templateUrl: './image-block.component.html',
  imports: [
    NgClass
  ]
})
export class ImageBlockComponent {

  @Input({ required: true })
  block!: ImageBlock;

}