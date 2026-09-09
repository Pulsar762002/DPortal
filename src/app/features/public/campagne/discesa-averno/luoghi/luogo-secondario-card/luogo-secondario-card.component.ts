import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-luogo-secondario-card',
  imports: [],
  standalone: true,
  templateUrl: './luogo-secondario-card.component.html',
  styleUrl: './luogo-secondario-card.component.css',
})
export class LuogoSecondarioCardComponent {
  @Input() nome!: string;
  @Input() descrizione!: string;
}
