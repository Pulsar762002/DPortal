import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Campagna } from '../../../core/models/campagna.model';
import { Land } from '../../../core/models/land.model';
import { ROLES } from '../../../core/models/role.model';
import { AuthService } from '../../../core/services/auth.service';
import { CampagnaService } from '../../../shared/services/campagna.service';
import { LandService } from '../../../shared/services/land.service';
import { ConfirmDialogComponent } from '../../../core/components/confirm-dialog/confirm-dialog.component';

interface AdminUser {
  id: string;
  email: string;
  nickname: string;
  role: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ConfirmDialogComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  campagne: Campagna[] = [];
  lands: Land[] = [];
  adminUsers: AdminUser[] = [];
  isAdmin = false;

  newSlug = '';
  newNome = '';
  newDescrizione = '';
  newImmagineUrl = '';
  newLandId = '';
  newMasterUserId = '';
  creaError: string | null = null;

  pendingDelete: Campagna | null = null;
  showDeleteConfirm = false;
  eliminaError: string | null = null;

  editingSlug: string | null = null;
  editNome = '';
  editDescrizione = '';
  editImmagineUrl = '';
  modificaError: string | null = null;
  modificaSalvataggio = false;
  caricandoImmagine = false;

  private apiUrl = environment.apiUrl;

  constructor(
    private campagnaService: CampagnaService,
    private landService: LandService,
    private authService: AuthService,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.hasRole(ROLES.Admin);

    this.loadCampagne();
    this.landService.getAll().subscribe(lands => {
      this.lands = lands;
      this.cdr.detectChanges();
    });

    if (this.isAdmin) {
      this.http.get<AdminUser[]>(`${this.apiUrl}/api/admin/users`)
        .subscribe(users => {
          this.adminUsers = users;
          this.cdr.detectChanges();
        });
    }
  }

  loadCampagne(): void {
    const userId = this.authService.getUser()?.id;

    this.campagnaService.getAll().subscribe(campagne => {
      this.campagne = this.isAdmin
        ? campagne
        : campagne.filter(c => c.masterUserId === userId);
      this.cdr.detectChanges();
    });
  }

  creaCampagna(): void {
    this.creaError = null;

    this.campagnaService.crea({
      slug: this.newSlug,
      nome: this.newNome,
      descrizione: this.newDescrizione || undefined,
      immagineUrl: this.newImmagineUrl || undefined,
      landId: this.newLandId || undefined,
      masterUserId: this.isAdmin ? (this.newMasterUserId || undefined) : undefined,
    }).subscribe({
      next: () => {
        this.newSlug = '';
        this.newNome = '';
        this.newDescrizione = '';
        this.newImmagineUrl = '';
        this.newLandId = '';
        this.newMasterUserId = '';
        this.loadCampagne();
      },
      error: err => {
        this.creaError = err?.error?.message ?? 'Errore nella creazione della campagna';
        this.cdr.detectChanges();
      }
    });
  }

  apriModifica(campagna: Campagna): void {
    this.modificaError = null;
    this.editingSlug = campagna.slug;
    this.editNome = campagna.nome;
    this.editDescrizione = campagna.descrizione ?? '';
    this.editImmagineUrl = campagna.immagineUrl ?? '';
  }

  annullaModifica(): void {
    this.editingSlug = null;
    this.modificaError = null;
  }

  /** Anteprima paragrafi: stessa logica di CampagneComponent.paragrafi(), righe vuote = a capo. */
  paragrafiAnteprima(descrizione: string): string[] {
    return descrizione
      .split(/\n\s*\n/)
      .map(p => p.trim())
      .filter(Boolean);
  }

  /** Carica un file come immagine di copertina: l'endpoint la salva e la persiste subito
   *  (indipendentemente dal pulsante "Salva", che riguarda solo nome/descrizione). */
  caricaImmagine(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file || !this.editingSlug) return;

    const slug = this.editingSlug;
    this.caricandoImmagine = true;
    this.modificaError = null;

    this.campagnaService.uploadImmagine(slug, file).subscribe({
      next: ({ url }) => {
        this.editImmagineUrl = `${this.apiUrl}${url}`;
        const aggiornata = this.campagne.find(c => c.slug === slug);
        if (aggiornata) {
          aggiornata.immagineUrl = this.editImmagineUrl;
        }
        this.caricandoImmagine = false;
        this.cdr.detectChanges();
      },
      error: err => {
        this.modificaError = err?.error ?? 'Errore nel caricamento dell\'immagine';
        this.caricandoImmagine = false;
        this.cdr.detectChanges();
      }
    });

    input.value = '';
  }

  salvaModifica(): void {
    if (!this.editingSlug) return;
    this.modificaError = null;
    const slug = this.editingSlug;

    this.campagnaService.aggiorna(slug, {
      nome: this.editNome,
      descrizione: this.editDescrizione,
      immagineUrl: this.editImmagineUrl,
    }).subscribe({
      next: () => {
        const aggiornata = this.campagne.find(c => c.slug === slug);
        if (aggiornata) {
          aggiornata.nome = this.editNome;
          aggiornata.descrizione = this.editDescrizione;
          aggiornata.immagineUrl = this.editImmagineUrl;
        }
        this.editingSlug = null;
        this.modificaSalvataggio = true;
        this.cdr.detectChanges();
        setTimeout(() => { this.modificaSalvataggio = false; this.cdr.detectChanges(); }, 2500);
      },
      error: err => {
        this.modificaError = err?.error?.message ?? 'Errore nel salvataggio della campagna';
        this.cdr.detectChanges();
      }
    });
  }

  richiediEliminazione(campagna: Campagna): void {
    this.eliminaError = null;
    this.pendingDelete = campagna;
    this.showDeleteConfirm = true;
  }

  confermaEliminazione(): void {
    if (!this.pendingDelete) return;

    const slug = this.pendingDelete.slug;
    this.campagnaService.elimina(slug).subscribe({
      next: () => {
        this.campagne = this.campagne.filter(c => c.slug !== slug);
        this.showDeleteConfirm = false;
        this.pendingDelete = null;
        this.cdr.detectChanges();
      },
      error: err => {
        this.eliminaError = err?.error?.message ?? 'Errore nell\'eliminazione della campagna';
        this.showDeleteConfirm = false;
        this.cdr.detectChanges();
      }
    });
  }
}
