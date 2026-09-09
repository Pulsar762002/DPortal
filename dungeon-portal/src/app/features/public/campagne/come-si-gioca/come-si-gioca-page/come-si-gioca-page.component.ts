import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';

import { ComeSiGiocaService } from '../../../../../shared/services/come-si-gioca.service';
import {
  ComeSiGiocaArgomentoMeta,
  ComeSiGiocaCategoria,
  ComeSiGiocaIndice
} from '../../../../../core/models/come-si-gioca.model';

@Component({
  selector: 'app-come-si-gioca-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './come-si-gioca-page.component.html',
  styleUrl: './come-si-gioca-page.component.css'
})
export class ComeSiGiocaPageComponent implements OnInit {

  slug!: string;

  indice$!: Observable<ComeSiGiocaIndice>;

  categoriaAttiva: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private comeSiGiocaService: ComeSiGiocaService
  ) {}

  ngOnInit(): void {
    this.slug = this.route.parent!.snapshot.paramMap.get('slug')!;

    this.indice$ = this.comeSiGiocaService.getIndice(this.slug).pipe(
      map(indice => {
        if (!this.categoriaAttiva && indice.categorie.length) {
          this.categoriaAttiva = indice.categorie[0].id;
        }
        return indice;
      })
    );
  }

  selezionaCategoria(categoria: ComeSiGiocaCategoria): void {
    this.categoriaAttiva = categoria.id;
  }

  argomentiVisibili(indice: ComeSiGiocaIndice): ComeSiGiocaArgomentoMeta[] {
    return indice.argomenti.filter(a => a.categoria === this.categoriaAttiva);
  }
}
