import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Land, LandDetail } from '../../../core/models/land.model';
import { LandService } from '../../../shared/services/land.service';

interface AdminUser {
  id: string;
  email: string;
  nickname: string;
  role: string;
}

@Component({
  selector: 'app-admin-land',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-land.component.html',
  styleUrl: './admin-land.component.css',
})
export class AdminLandComponent implements OnInit {
  lands: Land[] = [];
  users: AdminUser[] = [];

  selectedSlug: string | null = null;
  selectedDetail: LandDetail | null = null;

  newSlug = '';
  newNome = '';
  newLore = '';
  creaError: string | null = null;

  masterUserId = '';
  masterIsPrincipale = false;
  masterError: string | null = null;

  private apiUrl = environment.apiUrl;

  constructor(
    private landService: LandService,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadLands();
    this.http.get<AdminUser[]>(`${this.apiUrl}/api/admin/users`)
      .subscribe(users => {
        this.users = users;
        this.cdr.detectChanges();
      });
  }

  loadLands(): void {
    this.landService.getAll().subscribe(lands => {
      this.lands = lands;
      this.cdr.detectChanges();
    });
  }

  creaLand(): void {
    this.creaError = null;
    this.landService.crea({ slug: this.newSlug, nome: this.newNome, lore: this.newLore || undefined })
      .subscribe({
        next: () => {
          this.newSlug = '';
          this.newNome = '';
          this.newLore = '';
          this.loadLands();
        },
        error: err => {
          this.creaError = err?.error?.message ?? 'Errore nella creazione della Land';
          this.cdr.detectChanges();
        }
      });
  }

  selezionaLand(slug: string): void {
    this.selectedSlug = slug;
    this.masterUserId = '';
    this.masterIsPrincipale = false;
    this.masterError = null;
    this.landService.getBySlug(slug).subscribe(detail => {
      this.selectedDetail = detail;
      this.cdr.detectChanges();
    });
  }

  aggiungiMaster(): void {
    if (!this.selectedDetail || !this.masterUserId) return;

    this.masterError = null;
    this.landService
      .aggiungiMaster(this.selectedDetail.id, this.masterUserId, this.masterIsPrincipale)
      .subscribe({
        next: () => {
          this.masterUserId = '';
          this.masterIsPrincipale = false;
          this.selezionaLand(this.selectedSlug!);
        },
        error: err => {
          this.masterError = err?.error?.message ?? 'Errore nell\'aggiunta del master';
          this.cdr.detectChanges();
        }
      });
  }
}
