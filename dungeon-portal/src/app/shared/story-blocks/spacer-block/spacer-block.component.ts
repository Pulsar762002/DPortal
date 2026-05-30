import { Component, Input } from '@angular/core';
import { SpacerBlock } from '../../../core/models/story-block.model';

@Component({
  selector: 'app-spacer-block',
  standalone: true,
  template: `<div class="spacer" [class]="'spacer--' + (block.variant || 'medium')"></div>`,
  styles: [`
    .spacer--small  { height: 16px; }
    .spacer--medium { height: 36px; }
    .spacer--large  { height: 64px; }
  `],
})
export class SpacerBlockComponent {

  @Input({ required: true })
  block!: SpacerBlock;

}
