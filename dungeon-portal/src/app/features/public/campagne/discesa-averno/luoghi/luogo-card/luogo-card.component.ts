import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Luogo } from '../../campagna-data.service';

@Component({
  selector: 'app-luogo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './luogo-card.component.html',
  styleUrl: './luogo-card.component.css',
})
export class LuogoCardComponent {
  @Input() l!: Luogo;
  /** Mappa id→nome dei personaggi, per risolvere abitantiNotabili. */
  @Input() nomiPersonaggi: Map<string, string> = new Map();

  notesExpanded = false;

  nomeDa(id: string): string {
    return this.nomiPersonaggi.get(id) ?? id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }

  formatId(id: string): string {
    return id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }

  nomiAbitanti(): string {
    return (this.l.abitantiNotabili ?? []).map(id => this.nomeDa(id)).join(' · ');
  }
}
