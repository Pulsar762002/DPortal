import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  imports: [ CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule],
    template: `
  <div class="overlay">
    <div class="dialog">

      <h3>Modifica Utente</h3>

      <label>Email</label>
      <input [(ngModel)]="form.email">

      <label>Nickname</label>
      <input [(ngModel)]="form.nickname">

      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Data di nascita</mat-label>

        <input matInput
               [matDatepicker]="picker"
               [(ngModel)]="form.birthDate">

        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>

      </mat-form-field>

      <label>Ruolo</label>
      <select [(ngModel)]="form.role">
        <option value="USER">User</option>
        <option value="MASTER">Master</option>
        <option value="ADMIN">Admin</option>
      </select>

      <label>Nuova Password (opzionale)</label>
      <input type="password" [(ngModel)]="form.password">

      <label *ngIf="form.password">Ripeti Password</label>
      <input *ngIf="form.password"
             type="password"
             [(ngModel)]="form.confirmPassword">

      <div class="error" *ngIf="passwordMismatch">
        Le password non coincidono
      </div>

      <div class="actions">
        <button class="cancel" (click)="close()">Annulla</button>
        <button class="confirm"
                [disabled]="passwordMismatch"
                (click)="save()">
          Salva
        </button>
      </div>

    </div>
  </div>
`,
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent {

  @Input() user: any;
  @Output() saved = new EventEmitter<any>();
  @Output() closed = new EventEmitter<void>();

  form: any = {};

  ngOnChanges() {
    if (!this.user) return;

    this.form = {
      email: this.user.email,
      nickname: this.user.nickname || '',
      birthDate: this.user.birthDate
        ? this.user.birthDate.split('T')[0]
        : '',
      role: this.user.role,
      password: ''
    };
  }

  save() {

    if (this.passwordMismatch) return;

    const payload = { ...this.form };

    // Se password vuota → non la mandiamo
    if (!payload.password) {
      delete payload.password;
    }

    delete payload.confirmPassword;

    this.saved.emit(payload);
  }


  close() {
    this.closed.emit();
  }

  get passwordMismatch(): boolean {
    if (!this.form.password) return false;
    return this.form.password !== this.form.confirmPassword;
  }

}
