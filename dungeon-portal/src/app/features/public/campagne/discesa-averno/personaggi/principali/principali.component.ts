import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AelarComponent } from './aelar/aelar.component';
import {KyranComponent} from './kyran/kyran.component';
import {NathanComponent} from './nathan/nathan.component';
import {ElisComponent} from './elis/elis.component';
import {AlasterComponent} from './alaster/alaster.component';

@Component({
  selector: 'app-principali',
  standalone: true,
  imports: [CommonModule, AelarComponent, KyranComponent, NathanComponent, ElisComponent, AlasterComponent],
  templateUrl: './principali.component.html',
  styleUrl: './principali.component.css'
})
export class PrincipaliComponent { }
