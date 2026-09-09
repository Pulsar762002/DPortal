import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ArchivioService } from '../../../../../../shared/services/archivio.service';
import {
  ArchivioIndice,
  ArchivioVoce
} from '../../../../../../shared/models/archivio.model';

import { StoryBlocksComponent }
  from '../../../../../../shared/story-blocks/story-blocks/story-blocks.component';

import { ArchivioCartellaViewNodeComponent }
  from './archivio-cartella-view-node/archivio-cartella-view-node.component';

@Component({
  selector: 'app-archivi-page',
  standalone: true,
  imports: [CommonModule, StoryBlocksComponent, ArchivioCartellaViewNodeComponent],
  templateUrl: './archivi-page.component.html',
  styleUrl: './archivi-page.component.css'
})
export class ArchiviPageComponent implements OnInit {

  campagnaSlug = '';

  indice: ArchivioIndice = { cartelle: [] };

  voceSelezionata?: ArchivioVoce;

  caricamentoVoce = false;

  constructor(
    private route: ActivatedRoute,
    private archivioService: ArchivioService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.campagnaSlug =
        this.route.parent?.snapshot.paramMap.get('slug') ?? '';

    if (!this.campagnaSlug) {
      return;
    }

    // L'app è zoneless: senza detectChanges() la view non si aggiorna dopo
    // una subscribe() che assegna direttamente lo stato.
    this.archivioService.getIndice(this.campagnaSlug).subscribe({
      next: (indice) => {
        this.indice = indice;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Errore caricamento archivi', err)
    });
  }

  apriVoce(voceId: string): void {

    this.caricamentoVoce = true;

    this.archivioService.getVoce(this.campagnaSlug, voceId).subscribe({
      next: (voce) => {
        this.voceSelezionata = voce;
        this.caricamentoVoce = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Errore caricamento voce', err);
        this.caricamentoVoce = false;
        this.cdr.detectChanges();
      }
    });
  }
}
