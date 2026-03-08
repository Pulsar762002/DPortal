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
export class PersonaggiPageComponent { }
