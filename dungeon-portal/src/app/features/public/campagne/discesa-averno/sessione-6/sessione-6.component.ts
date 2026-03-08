import {Component, HostListener} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-sessione-6',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './sessione-6.component.html',
  styleUrl: './sessione-6.component.css',
})
export class Sessione6Component {
  isVideoOpen = false;
  activeVideoUrl?: SafeResourceUrl;
  activeVideoTitle?: string;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToFragment(fragment);
      }
    });
  }

  private scrollToFragment(fragment: string) {
    setTimeout(() => {
      const element = document.getElementById(fragment);
      if (!element) return;

      const navbarOffset = 110; // altezza reale navbar
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  }
  openVideo(videoId: string, startSeconds: number = 0, title?: string) {
    const startParam = startSeconds > 0 ? `&start=${startSeconds}` : '';
    const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0${startParam}`;

    this.activeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.activeVideoTitle = title || '';
    this.isVideoOpen = true;

    // blocca lo scroll sotto la modal
    document.body.style.overflow = 'hidden';
  }

  closeVideo() {
    this.isVideoOpen = false;
    this.activeVideoUrl = undefined;
    this.activeVideoTitle = undefined;

    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.isVideoOpen) this.closeVideo();
  }
}
