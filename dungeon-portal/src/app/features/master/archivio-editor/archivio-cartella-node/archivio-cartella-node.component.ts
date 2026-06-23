import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArchivioCartella, ArchivioVoceMeta } from '../../../../shared/models/archivio.model';

/**
 * Un nodo dell'albero cartelle dell'editor: si referenzia da solo nel
 * template per renderizzare le sottocartelle a profondità arbitraria.
 * Non chiama direttamente il backend: emette eventi e lascia che
 * ArchivioEditorComponent (l'unico che conosce ArchivioService e ricarica
 * l'indice) li gestisca.
 */
@Component({
  selector: 'app-archivio-cartella-node',
  standalone: true,
  imports: [CommonModule, FormsModule, ArchivioCartellaNodeComponent],
  templateUrl: './archivio-cartella-node.component.html',
  styleUrl: './archivio-cartella-node.component.css'
})
export class ArchivioCartellaNodeComponent {

  @Input({ required: true })
  cartella!: ArchivioCartella;

  @Input()
  voceSelezionataId?: string;

  @Output() apriVoce =
      new EventEmitter<{ cartellaId: string; voceId: string }>();

  @Output() rinominaCartella =
      new EventEmitter<{ cartella: ArchivioCartella; nome: string }>();

  @Output() eliminaCartella =
      new EventEmitter<ArchivioCartella>();

  @Output() creaSottocartella =
      new EventEmitter<{ cartellaParentId: string; nome: string }>();

  @Output() creaVoce =
      new EventEmitter<{ cartellaId: string; titolo: string }>();

  @Output() eliminaVoce =
      new EventEmitter<{ cartellaId: string; voce: ArchivioVoceMeta }>();

  aperta = false;

  nuovoNomeSottocartella = '';
  nuovoTitoloVoce = '';

  toggle(): void {
    this.aperta = !this.aperta;
  }

  onCreaSottocartella(): void {
    const nome = this.nuovoNomeSottocartella.trim();
    if (!nome) return;

    this.creaSottocartella.emit({ cartellaParentId: this.cartella.id, nome });
    this.nuovoNomeSottocartella = '';
  }

  onCreaVoce(): void {
    const titolo = this.nuovoTitoloVoce.trim();
    if (!titolo) return;

    this.creaVoce.emit({ cartellaId: this.cartella.id, titolo });
    this.nuovoTitoloVoce = '';
  }
}
