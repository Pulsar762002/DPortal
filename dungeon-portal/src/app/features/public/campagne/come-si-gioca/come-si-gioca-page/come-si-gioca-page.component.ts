import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';

import { ComeSiGiocaService } from '../../../../../shared/services/come-si-gioca.service';
import {
  ComeSiGiocaArgomento,
  ComeSiGiocaCategoria,
  ComeSiGiocaFile
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

  contenuto$!: Observable<ComeSiGiocaFile>;

  categoriaAttiva: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private comeSiGiocaService: ComeSiGiocaService
  ) {}

  ngOnInit(): void {
    this.slug = this.route.parent!.snapshot.paramMap.get('slug')!;

    this.contenuto$ = this.comeSiGiocaService.getContenuto(this.slug).pipe(
      map(file => {
        if (!this.categoriaAttiva && file.categorie.length) {
          this.categoriaAttiva = file.categorie[0].slug;
        }
        return file;
      })
    );
  }

  selezionaCategoria(categoria: ComeSiGiocaCategoria): void {
    this.categoriaAttiva = categoria.slug;
  }

  argomentiVisibili(file: ComeSiGiocaFile): ComeSiGiocaArgomento[] {
    return file.argomenti.filter(a => a.categoria === this.categoriaAttiva);
  }
}
