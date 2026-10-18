import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Personaggio, PersonaggioInput } from '../../../core/models/personaggio.model';
import { PersonaggioService } from '../../services/personaggio.service';

interface UtenteOpzione {
  id: string;
  nickname: string;
  email: string;
}

/**
 * Elenco + form di creazione/modifica dei personaggi giocanti.
 * - senza campagnaSlug: "I miei personaggi" dell'utente corrente (profilo);
 * - con campagnaSlug: i PG di quella campagna (gestione master/admin), con
 *   scelta del giocatore proprietario in creazione.
 */
@Component({
  selector: 'app-personaggi-gestione',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personaggi-gestione.component.html',
  styleUrl: './personaggi-gestione.component.css',
})
export class PersonaggiGestioneComponent implements OnInit, OnChanges {
  @Input() campagnaSlug: string | null = null;
  @Input() utenti: UtenteOpzione[] = [];
  /** Emesso dopo create/update: il backend può aver aggiunto il giocatore ai partecipanti. */
  @Output() modificato = new EventEmitter<void>();

  personaggi: Personaggio[] = [];
  campagneDisponibili: { slug: string; nome: string }[] = [];

  formAperto = false;
  inModifica: Personaggio | null = null;
  form: PersonaggioInput = this.formVuoto();
  avatarFile: File | null = null;
  avatarPreview: string | null = null;

  isSaving = false;
  errore: string | null = null;

  constructor(
    public personaggioService: PersonaggioService,
    private cdr: ChangeDetectorRef
  ) {}

  get modalitaCampagna(): boolean {
    return !!this.campagnaSlug;
  }

  ngOnInit(): void {
    this.inizializza();
  }

  /** Cambio campagna selezionata (pagina admin): ricarica. */
  ngOnChanges(changes: SimpleChanges): void {
    const slug = changes['campagnaSlug'];
    if (slug && !slug.firstChange) {
      this.inizializza();
    }
  }

  private inizializza(): void {
    this.chiudiForm();
    this.carica();

    if (!this.modalitaCampagna) {
      this.personaggioService.getCampagneDisponibili().subscribe(campagne => {
        this.campagneDisponibili = campagne;
        this.cdr.detectChanges();
      });
    }
  }

  carica(): void {
    const richiesta = this.campagnaSlug
      ? this.personaggioService.getByCampagna(this.campagnaSlug)
      : this.personaggioService.getMiei();

    richiesta.subscribe(personaggi => {
      this.personaggi = personaggi;
      this.cdr.detectChanges();
    });
  }

  nuovo(): void {
    this.inModifica = null;
    this.form = this.formVuoto();
    this.resetAvatar();
    this.errore = null;
    this.formAperto = true;
  }

  modifica(p: Personaggio): void {
    this.inModifica = p;
    this.form = {
      nome: p.nome,
      classe: p.classe,
      razza: p.razza,
      livello: p.livello,
      descrizione: p.descrizione,
      campagnaSlug: p.campagnaSlug ?? '',
    };
    this.resetAvatar();
    this.errore = null;
    this.formAperto = true;
  }

  chiudiForm(): void {
    this.formAperto = false;
    this.inModifica = null;
    this.resetAvatar();
    this.errore = null;
  }

  onAvatarSelezionato(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    this.avatarFile = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.avatarPreview = reader.result as string;
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  salva(): void {
    if (!this.form.nome?.trim()) {
      this.errore = 'Il nome è obbligatorio';
      return;
    }
    if (this.modalitaCampagna && !this.inModifica && !this.form.userId) {
      this.errore = 'Seleziona il giocatore';
      return;
    }

    this.isSaving = true;
    this.errore = null;

    const richiesta = this.inModifica
      ? this.personaggioService.aggiorna(this.inModifica.id, this.form, this.avatarFile)
      : this.personaggioService.crea(this.form, this.avatarFile);

    richiesta.subscribe({
      next: () => {
        this.isSaving = false;
        this.chiudiForm();
        this.carica();
        this.modificato.emit();
      },
      error: err => {
        this.isSaving = false;
        this.errore = err?.error?.message ?? 'Errore durante il salvataggio';
        this.cdr.detectChanges();
      }
    });
  }

  elimina(p: Personaggio): void {
    if (!confirm(`Eliminare il personaggio "${p.nome}"?`)) return;

    this.personaggioService.elimina(p.id).subscribe({
      next: () => {
        this.personaggi = this.personaggi.filter(x => x.id !== p.id);
        this.cdr.detectChanges();
      },
      error: () => {
        this.errore = 'Errore durante l\'eliminazione';
        this.cdr.detectChanges();
      }
    });
  }

  /** In modifica dal profilo, la campagna attuale resta selezionabile anche se non più "disponibile". */
  get opzioniCampagna(): { slug: string; nome: string }[] {
    const p = this.inModifica;
    if (p?.campagnaSlug && !this.campagneDisponibili.some(c => c.slug === p.campagnaSlug)) {
      return [{ slug: p.campagnaSlug, nome: p.campagnaNome ?? p.campagnaSlug }, ...this.campagneDisponibili];
    }
    return this.campagneDisponibili;
  }

  private formVuoto(): PersonaggioInput {
    return {
      nome: '',
      classe: '',
      razza: '',
      livello: null,
      descrizione: '',
      campagnaSlug: this.campagnaSlug ?? '',
      userId: '',
    };
  }

  private resetAvatar(): void {
    this.avatarFile = null;
    this.avatarPreview = null;
  }
}
