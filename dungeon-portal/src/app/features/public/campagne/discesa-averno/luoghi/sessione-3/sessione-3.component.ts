import { Component } from '@angular/core';
import {BaldursGateComponent} from './baldurs-gate/baldurs-gate.component';
import {TraEltureleEbaldursGateComponent} from './tra-elturele-ebaldurs-gate/tra-elturele-ebaldurs-gate.component';
import {LaPortaDelBasiliscoComponent} from './la-porta-del-basilisco/la-porta-del-basilisco.component';
import {
  TavernaCantoElficoPianoTerraComponent
} from './taverna-canto-elfico-piano-terra/taverna-canto-elfico-piano-terra.component';
import {
  TavernaCantoElficoPianoPrimoComponent
} from './taverna-canto-elfico-piano-primo/taverna-canto-elfico-piano-primo.component';

@Component({
  selector: 'app-sessione-3',
  imports: [
    BaldursGateComponent,
    TraEltureleEbaldursGateComponent,
    LaPortaDelBasiliscoComponent,
    TavernaCantoElficoPianoTerraComponent,
    TavernaCantoElficoPianoPrimoComponent
  ],
  templateUrl: './sessione-3.component.html',
  styleUrl: './sessione-3.component.css',
})
export class Sessione3Component {

}
