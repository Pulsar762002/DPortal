import { Component } from '@angular/core';
import {ElturelComponent} from './elturel/elturel.component';
import {LaChansonRougeComponent} from './la-chanson-rouge/la-chanson-rouge.component';
import {BoschiElturelComponent} from './boschi-elturel/boschi-elturel.component';
import {LaFineDiElturelComponent} from './la-fine-di-elturel/la-fine-di-elturel.component';
import {TempioDivinitaComponent} from './secondari/tempio-divinita/tempio-divinita.component';
import {OrfanotrofioComponent} from './secondari/orfanotrofio/orfanotrofio.component';
import {GildaAvventurieriComponent} from './secondari/gilda-avventurieri/gilda-avventurieri.component';
import {SemeDiPapaveroComponent} from './secondari/seme-di-papavero/seme-di-papavero.component';

@Component({
  selector: 'app-sessione-1',
  imports: [
    ElturelComponent,
    LaChansonRougeComponent,
    BoschiElturelComponent,
    LaFineDiElturelComponent,
    TempioDivinitaComponent,
    OrfanotrofioComponent,
    GildaAvventurieriComponent,
    SemeDiPapaveroComponent
  ],
  templateUrl: './sessione-1.component.html',
  styleUrl: './sessione-1.component.css',
})
export class Sessione1Component {

}
