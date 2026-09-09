import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {
  ActivatedRoute,
  RouterModule
} from '@angular/router';

import { CommonModule } from '@angular/common';

import {
  CampaignDetail
} from '../../../../core/models/campaign/CampaignDetail';

import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-campaign-detail',

  standalone: true,

  templateUrl: './campagne-detail.component.html',

  styleUrls: ['./campagne-detail.component.css'],

  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CampaignDetailComponent implements OnInit {

  slug!: string;

  campaign?: CampaignDetail;

  constructor(
      private route: ActivatedRoute,
      private http: HttpClient,
      private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {

    console.log('Campaign Component Test');

    this.slug =
        this.route.snapshot.paramMap.get('slug')!;

    console.log('Slug:', this.slug);

    this.loadCampaign();
  }

  private loadCampaign(): void {

    this.http
        .get<CampaignDetail>(
            `${environment.apiUrl}/api/sessioni/${this.slug}/elenco`
        )
        .subscribe({

          next: (data) => {

            console.log('CAMPAIGN', data);

            // Force new reference
            this.campaign = {
              ...data
            };

            console.log(
                'Title:',
                this.campaign.title
            );

            // Force UI refresh
            this.cdr.detectChanges();
          },

          error: (err) => {

            console.error(
                'Error loading campaign detail',
                err
            );
          }
        });

  }

  isVisible(item: any): boolean {

    return item.visible !== false;
  }

  getRoute(item: any): any[] {

    return [
      '/campagne',
      this.slug,
      ...(item.route || [])
    ];
  }

}