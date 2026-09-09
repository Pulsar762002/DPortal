import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { ComeSiGiocaService } from '../../../../../shared/services/come-si-gioca.service';
import { ComeSiGiocaArgomento } from '../../../../../core/models/come-si-gioca.model';
import { StoryBlocksComponent } from '../../../../../shared/story-blocks/story-blocks/story-blocks.component';

@Component({
  selector: 'app-come-si-gioca-topic',
  standalone: true,
  imports: [CommonModule, RouterModule, StoryBlocksComponent],
  templateUrl: './come-si-gioca-topic.component.html',
  styleUrl: './come-si-gioca-topic.component.css'
})
export class ComeSiGiocaTopicComponent implements OnInit {

  slug!: string;

  argomento$!: Observable<ComeSiGiocaArgomento>;

  constructor(
    private route: ActivatedRoute,
    private comeSiGiocaService: ComeSiGiocaService
  ) {}

  ngOnInit(): void {
    this.slug = this.route.parent!.snapshot.paramMap.get('slug')!;
    const argomentoId = this.route.snapshot.paramMap.get('argomentoId')!;

    this.argomento$ = this.comeSiGiocaService.getArgomento(this.slug, argomentoId);
  }
}
