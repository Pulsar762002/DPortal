import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { NathanComponent } from  '../personaggi/principali/nathan/nathan.component';
import { AelarComponent } from  '../personaggi/principali/aelar/aelar.component';
import { AlasterComponent } from  '../personaggi/principali/alaster/alaster.component';
import { KyranComponent } from  '../personaggi/principali/kyran/kyran.component';
import { ElisComponent } from  '../personaggi/principali/elis/elis.component';
import { HoverWrapperComponent } from '../../../../../shared/hover-wrapper/hover-wrapper.component';
import {CommonModule} from '@angular/common';
import { HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-sessione-1',
  templateUrl: './sessione-1.component.html',
  imports: [
    RouterLink, CommonModule
  ],
  styleUrls: ['./sessione-1.component.css']
})
export class Sessione1Component implements OnInit {

  isVideoOpen = false;
  activeVideoUrl?: SafeResourceUrl;
  activeVideoTitle?: string;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {

  }


  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToFragment(fragment);
      }
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

  private scrollToFragment(fragment: string) {
    setTimeout(() => {
      const element = document.getElementById(fragment);
      if (!element) return;

      const navbarOffset = 110;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  }
}
