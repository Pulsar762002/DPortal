import { Component } from '@angular/core';
import {AerenComponent} from './aeren/aeren.component';
import {FernandReglisseComponent} from './fernand-reglisse/fernand-reglisse.component';
import {BromasRultildComponent} from './bromas-rultild/bromas-rultild.component';
import {GullivanArdicComponent} from './gullivan-ardic/gullivan-ardic.component';
import {LianPeiComponent} from './lian-pei/lian-pei.coponent';
import {AlyssaTokkerComponent} from './alyssa-tokker/alyssa-tokker.component';
import {DarsusBellComponent} from './darsus-bell/darsus-bell.component';
import {NueHillstar} from './nue-hillstar/nue-hillstar.component';
import {MevilDhirderComponent} from './mevil-dhirder/mevil-dhirder.component';
import {AlanAlythComponent} from './alan-alyth/alan-alyth.component';
import {KleytonComponent} from './kleyton/kleyton.component';

@Component({
  selector: 'app-alleati',
  standalone: true,
  imports: [
    AerenComponent,
    FernandReglisseComponent,
    BromasRultildComponent,
    GullivanArdicComponent,
    LianPeiComponent,
    AlyssaTokkerComponent,
    DarsusBellComponent,
    NueHillstar,
    MevilDhirderComponent,
    AlanAlythComponent,
    KleytonComponent
  ],
  templateUrl: './alleati.component.html',
  styleUrl: './alleati.component.css',
})
export class AlleatiComponent {

}
