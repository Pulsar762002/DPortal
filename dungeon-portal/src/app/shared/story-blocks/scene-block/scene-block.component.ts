import { Component, Input } from '@angular/core';
import { SceneBlock } from '../../../core/models/story-block.model';

@Component({
  selector: 'app-scene-block',
  standalone: true,
  templateUrl: './scene-block.component.html',
  styleUrls: ['./scene-block.component.css'],
})
export class SceneBlockComponent {

  @Input({ required: true })
  block!: SceneBlock;

}
