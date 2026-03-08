import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-luogo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './luogo-card.component.html',
  styleUrl: './luogo-card.component.css',
})
export class LuogoCardComponent {
  @Input() nome!: string;
  @Input() descrizione!: string;
  @Input() immagine!: string;
}
