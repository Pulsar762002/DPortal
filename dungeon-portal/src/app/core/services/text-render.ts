import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TextRenderService {

  constructor(
      private sanitizer: DomSanitizer
  ) {}

  render(text: string): SafeHtml {

    return this.sanitizer.bypassSecurityTrustHtml(text);

  }

}