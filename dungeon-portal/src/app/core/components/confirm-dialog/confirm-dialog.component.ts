import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="overlay">
      <div class="dialog">

        <h3>{{ title }}</h3>
        <p>{{ message }}</p>

        <div class="actions">
          <button class="cancel" (click)="cancel()">Annulla</button>
          <button class="confirm" (click)="confirm()">Conferma</button>
        </div>

      </div>
    </div>
  `,
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  @Input() title = 'Conferma';
  @Input() message = 'Sei sicuro?';

  @Output() confirmed = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  confirm() {
    this.confirmed.emit();
    this.closed.emit();
  }

  cancel() {
    this.closed.emit();
  }
}
