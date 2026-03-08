import {
  Component, Input, Type, ViewChild, ElementRef, OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';


@Component({
  selector: 'app-hover-wrapper',
  standalone: true,
  imports: [CommonModule, OverlayModule, PortalModule],
  templateUrl: './hover-wrapper.component.html',
  styleUrls: ['./hover-wrapper.component.css']
})
export class HoverWrapperComponent implements OnDestroy {
  @Input() label!: string;
  @Input() component!: Type<any>;

  @ViewChild('origin', { static: true }) origin!: ElementRef<HTMLElement>;

  private overlayRef: OverlayRef | null = null;
  private closeTimer: any;

  constructor(private overlay: Overlay) {}

  open() {
    clearTimeout(this.closeTimer);

    if (!this.overlayRef) {
      const positionStrategy = this.overlay.position()
        .flexibleConnectedTo(this.origin)
        .withFlexibleDimensions(false)
        .withPush(true)
        .withPositions([
          // sotto, allineato a sinistra
          { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 10 },
          // sotto, allineato a destra
          { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetY: 10 },
          // sopra, allineato a sinistra
          { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetY: -10 },
          // sopra, allineato a destra
          { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom', offsetY: -10 },
        ]);

      this.overlayRef = this.overlay.create({
        positionStrategy,
        scrollStrategy: this.overlay.scrollStrategies.reposition(),
        hasBackdrop: false,              // hover style
        panelClass: 'dp-hover-panel'     // css globale sotto
      });

      // chiudi se clicchi fuori
      this.overlayRef.outsidePointerEvents().subscribe(() => this.close());

      // mantiene aperto se passi sulla card
      this.overlayRef.overlayElement.addEventListener('mouseenter', this.cancelClose);
      this.overlayRef.overlayElement.addEventListener('mouseleave', this.scheduleCloseBound);
    }

    if (!this.overlayRef.hasAttached()) {
      const portal = new ComponentPortal(this.component);
      this.overlayRef.attach(portal);
    }
  }

  scheduleClose() {
    clearTimeout(this.closeTimer);
    this.closeTimer = setTimeout(() => this.close(), 180);
  }

  private cancelClose = () => {
    clearTimeout(this.closeTimer);
  };

  private scheduleCloseBound = () => {
    this.scheduleClose();
  };

  close() {
    clearTimeout(this.closeTimer);
    if (this.overlayRef?.hasAttached()) {
      this.overlayRef.detach();
    }
  }

  ngOnDestroy() {
    clearTimeout(this.closeTimer);
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
}
