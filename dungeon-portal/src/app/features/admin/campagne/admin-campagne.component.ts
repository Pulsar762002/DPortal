import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Campagna } from '../../../core/models/campagna.model';
import { CampagnaPartecipante } from '../../../core/models/campagna-partecipante.model';
import { CampagnaService } from '../../../shared/services/campagna.service';

interface AdminUser {
  id: string;
  email: string;
  nickname: string;
  role: string;
}

@Component({
  selector: 'app-admin-campagne',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-campagne.component.html',
  styleUrl: './admin-campagne.component.css',
})
export class AdminCampagneComponent implements OnInit {
  campagne: Campagna[] = [];
  users: AdminUser[] = [];

  selectedSlug: string | null = null;
  partecipanti: CampagnaPartecipante[] = [];

  nuovoUserId = '';
  nuovoTipo: 'GIOCATORE' | 'INVITATO' | 'MASTER' = 'GIOCATORE';
  aggiungiError: string | null = null;

  private apiUrl = environment.apiUrl;

  constructor(
    private campagnaService: CampagnaService,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.campagnaService.getAll().subscribe(campagne => {
      this.campagne = campagne;
      this.cdr.detectChanges();
    });

    this.http.get<AdminUser[]>(`${this.apiUrl}/api/admin/users`)
      .subscribe(users => {
        this.users = users;
        this.cdr.detectChanges();
      });
  }

  selezionaCampagna(slug: string): void {
    this.selectedSlug = slug;
    this.nuovoUserId = '';
    this.nuovoTipo = 'GIOCATORE';
    this.aggiungiError = null;
    this.caricaPartecipanti();
  }

  caricaPartecipanti(): void {
    if (!this.selectedSlug) return;

    this.campagnaService.getPartecipanti(this.selectedSlug).subscribe(partecipanti => {
      this.partecipanti = partecipanti;
      this.cdr.detectChanges();
    });
  }

  aggiungiPartecipante(): void {
    if (!this.selectedSlug || !this.nuovoUserId) return;

    this.aggiungiError = null;
    this.campagnaService
      .aggiungiPartecipante(this.selectedSlug, this.nuovoUserId, this.nuovoTipo)
      .subscribe({
        next: () => {
          this.nuovoUserId = '';
          this.nuovoTipo = 'GIOCATORE';
          this.caricaPartecipanti();
        },
        error: err => {
          this.aggiungiError = err?.error?.message ?? 'Errore nell\'aggiunta del partecipante';
          this.cdr.detectChanges();
        }
      });
  }

  rimuoviPartecipante(userId: string): void {
    if (!this.selectedSlug) return;

    this.campagnaService.rimuoviPartecipante(this.selectedSlug, userId).subscribe(() => {
      this.partecipanti = this.partecipanti.filter(p => p.userId !== userId);
      this.cdr.detectChanges();
    });
  }
}
