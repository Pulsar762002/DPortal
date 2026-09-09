import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { LandDetail } from '../../../../core/models/land.model';
import { LandService } from '../../../../shared/services/land.service';

@Component({
  selector: 'app-land-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './land-detail.component.html',
  styleUrl: './land-detail.component.css',
})
export class LandDetailComponent implements OnInit {
  land?: LandDetail;

  constructor(
    private route: ActivatedRoute,
    private landService: LandService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.landService.getBySlug(slug).subscribe(land => {
      this.land = land;
    });
  }
}
