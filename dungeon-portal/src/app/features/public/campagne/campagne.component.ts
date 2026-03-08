import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-campagne',
  standalone: true,
  imports: [RouterModule],   // 👈 QUESTO È OBBLIGATORIO
  templateUrl: './campagne.component.html',
  styleUrl: './campagne.component.css',
})
export class CampagneComponent {
  test(){
    console.log('Campagne Component Test');
  }
}
