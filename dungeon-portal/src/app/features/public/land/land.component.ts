import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Land } from '../../../core/models/land.model';
import { LandService } from '../../../shared/services/land.service';

@Component({
  selector: 'app-land',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './land.component.html',
  styleUrl: './land.component.css',
})
export class LandComponent implements OnInit {
  lands: Land[] = [];

  constructor(private landService: LandService) {}

  ngOnInit(): void {
    this.landService.getAll().subscribe(lands => {
      this.lands = lands;
    });
  }
}
