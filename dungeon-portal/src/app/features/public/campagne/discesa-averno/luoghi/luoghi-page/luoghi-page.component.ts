import { Component } from '@angular/core';
import {Sessione1Component} from '../../luoghi/sessione-1/sessione-1.component';
import {Sessione2Component} from '../../luoghi/sessione-2/sessione-2.component';
import {Sessione3Component} from '../../luoghi/sessione-3/sessione-3.component';



@Component({
  selector: 'app-luoghi-page',
  standalone: true,
  imports: [Sessione1Component,Sessione2Component,Sessione3Component],
  templateUrl: './luoghi-page.component.html',
  styleUrl: './luoghi-page.component.css',
})
export class LuoghiPageComponent {

}
