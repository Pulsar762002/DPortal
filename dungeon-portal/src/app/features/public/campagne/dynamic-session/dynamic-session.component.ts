import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

import {
  ChangeDetectorRef
} from '@angular/core';

import { DynamicSessionService }
  from '../../../../shared/services/dynamic-session.service';

import {
  CampaignSession
} from '../../../../shared/models/campaign-session.model';

import { StoryBlocksComponent }
  from '../../../../shared/story-blocks/story-blocks/story-blocks.component';

@Component({
  selector: 'app-dynamic-session',
  standalone: true,

  imports: [
    CommonModule,
    StoryBlocksComponent
  ],

  templateUrl: './dynamic-session.component.html',
  styleUrl: './dynamic-session.component.css'
})
export class DynamicSessionComponent implements OnInit {

  campaignSlug = '';
  sessionId = '';

  session: CampaignSession = {
    id: 0,
    title: '',
    chapters: []
  };

  // =========================
  // VIDEO MODAL
  // =========================

  isVideoOpen = false;

  activeVideoUrl?: SafeResourceUrl;

  activeVideoTitle = '';

  constructor(
      private route: ActivatedRoute,
      private dynamicSessionService: DynamicSessionService,
      private sanitizer: DomSanitizer,
      private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      this.sessionId =
          params.get('sessionId') ?? '';

      this.campaignSlug =
          this.route.parent?.snapshot.paramMap.get('slug') ?? '';

      console.log('Campaign:', this.campaignSlug);
      console.log('Session:', this.sessionId);

      if (!this.campaignSlug || !this.sessionId) {

        console.warn('Missing params');

        return;
      }

      this.dynamicSessionService
          .getSession(
              this.campaignSlug,
              this.sessionId
          )
          .subscribe({

            next: (data: CampaignSession) => {

              console.log('SESSION LOADED', data);

              this.session = data;

              this.cdr.detectChanges();
            },

            error: (err: any) => {

              console.error('LOAD ERROR', err);
            }
          });

    });

  }

  // =========================
  // VIDEO METHODS
  // =========================

  openVideo(
      videoId: string,
      startSeconds: number = 0,
      title: string = ''
  ): void {

    this.activeVideoTitle = title;

    const url =
        `https://www.youtube.com/embed/${videoId}?autoplay=1&start=${startSeconds}`;

    this.activeVideoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(url);

    this.isVideoOpen = true;
  }

  closeVideo(): void {

    this.isVideoOpen = false;

    this.activeVideoUrl = undefined;

    this.activeVideoTitle = '';
  }

  scrollToChapter(event: Event, chapterId: string): void {

    event.preventDefault();

    const element = document.getElementById(chapterId);

    if (!element) return;

    const offset = 140;

    const y =
        element.getBoundingClientRect().top
        + window.scrollY
        - offset;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
}