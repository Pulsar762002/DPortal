import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Campagna } from '../../../core/models/campagna.model';
import { CampagnaService } from '../../../shared/services/campagna.service';

@Component({
  selector: 'app-campagne',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './campagne.component.html',
  styleUrl: './campagne.component.css',
})
export class CampagneComponent implements OnInit {
  campagne: Campagna[] = [];

  constructor(
    private campagnaService: CampagnaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.campagnaService.getAll().subscribe(campagne => {
      this.campagne = campagne;
      this.cdr.detectChanges();
    });
  }

  /** Divide la descrizione in paragrafi (separati da riga vuota), per lo stile intro/finale. */
  paragrafi(descrizione?: string | null): string[] {
    return (descrizione ?? '')
      .split(/\n\s*\n/)
      .map(p => p.trim())
      .filter(Boolean);
  }
}
