import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-campagne-detail',
  imports: [CommonModule, TitleCasePipe, RouterLink],
  templateUrl: './campagne-detail.component.html',
  styleUrl: './campagne-detail.component.css',
})
export class CampagneDetailComponent implements OnInit {
  slug!: string;
  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug')!;
    console.log('Campagna:', this.slug);
  }
}
