import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { Master } from '../../../core/models/master.model';
import { MasterService } from '../../../shared/services/master.service';

@Component({
  selector: 'app-masters',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './masters.component.html',
  styleUrl: './masters.component.css',
})
export class MastersComponent implements OnInit {
  masters: Master[] = [];

  private apiUrl = environment.apiUrl;

  constructor(
    private masterService: MasterService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.masterService.getAll().subscribe(masters => {
      this.masters = masters;
      this.cdr.detectChanges();
    });
  }

  getAvatarUrl(m: Master): string {
    if (!m.avatarUrl) {
      return 'assets/data/ikaros/campagne/discesa-averno/default-avatar.png';
    }
    return `${this.apiUrl}/uploads/${m.avatarUrl}`;
  }
}
