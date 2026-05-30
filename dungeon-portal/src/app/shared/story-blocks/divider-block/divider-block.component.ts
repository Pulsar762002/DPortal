import { Component, Input } from '@angular/core';
import { DividerBlock } from '../../../core/models/story-block.model';

@Component({
  selector: 'app-divider-block',
  standalone: true,
  templateUrl: './divider-block.component.html',
  styleUrls: ['./divider-block.component.css'],
})
export class DividerBlockComponent {

  @Input({ required: true })
  block!: DividerBlock;

  /** Glifo centrale in base alla variante. */
  get mark(): string {
    switch (this.block.variant) {
      case 'rune':
        return 'ᛟ';
      case 'plain':
        return '';
      default:
        return '◈';
    }
  }

}
