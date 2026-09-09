import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchivioCartella } from '../../../../../../../shared/models/archivio.model';

/**
 * Nodo (read-only) dell'albero cartelle della pagina pubblica Archivi: si
 * referenzia da solo per renderizzare le sottocartelle a profondità
 * arbitraria. Speculare a ArchivioCartellaNodeComponent (editor master) ma
 * senza azioni di scrittura.
 */
@Component({
  selector: 'app-archivio-cartella-view-node',
  standalone: true,
  imports: [CommonModule, ArchivioCartellaViewNodeComponent],
  templateUrl: './archivio-cartella-view-node.component.html',
  styleUrl: './archivio-cartella-view-node.component.css'
})
export class ArchivioCartellaViewNodeComponent implements OnInit {

  @Input({ required: true })
  cartella!: ArchivioCartella;

  @Input()
  voceSelezionataId?: string;

  @Input()
  apertaPredefinita = false;

  @Output() apriVoce = new EventEmitter<string>();

  aperta = false;

  ngOnInit(): void {
    this.aperta = this.apertaPredefinita;
  }

  toggle(): void {
    this.aperta = !this.aperta;
  }
}
