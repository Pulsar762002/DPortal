import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipaliComponent } from '../principali/principali.component';
import {AlleatiComponent} from '../alleati/alleati.component';
import {MinoriComponent} from '../minori/minori.component';
import {SecondariComponent} from '../secondari/secondari.component';


@Component({
  selector: 'app-personaggi-page',
  standalone: true,
  imports: [CommonModule, PrincipaliComponent, AlleatiComponent, MinoriComponent, SecondariComponent],
  templateUrl: './personaggi-page.component.html',
  styleUrl: './personaggi-page.component.css'
})
export class PersonaggiPageComponent {
  readonly sezioni = [
    { label: 'Personaggi Principali', anchor: 'principali' },
    { label: 'Alleati e PNG',         anchor: 'alleati' },
    { label: 'Secondari',             anchor: 'secondari' },
    { label: 'NPG Minori',            anchor: 'minori' },
  ];

  scrollTo(event: Event, anchor: string): void {
    event.preventDefault();
    if (typeof window === 'undefined') return;
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
