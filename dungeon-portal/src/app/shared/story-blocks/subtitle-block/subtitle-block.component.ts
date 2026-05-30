import { Component, Input } from '@angular/core';
import { SubtitleBlock } from '../../../core/models/story-block.model';

@Component({
  selector: 'app-subtitle-block',
  standalone: true,
  template: `<h3 class="subtitle">{{ block.text }}</h3>`,
  styles: [`
    .subtitle {
      margin: 30px 0 14px;
      color: #e6c36f;
      font-size: 1.25rem;
      letter-spacing: 0.04em;
    }
  `],
})
export class SubtitleBlockComponent {

  @Input({ required: true })
  block!: SubtitleBlock;

}
