import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-create-user-dialog',
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

      <h3>Nuovo Utente</h3>

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

      <label>Password</label>
      <input type="password" [(ngModel)]="form.password">

      <label>Ripeti Password</label>
      <input type="password" [(ngModel)]="form.confirmPassword">

      <div class="error" *ngIf="passwordMismatch">
        Le password non coincidono
      </div>

      <div class="actions">
        <button class="cancel" (click)="close()">Annulla</button>
        <button class="confirm"
                [disabled]="!canSave"
                (click)="save()">
          Crea
        </button>
      </div>

    </div>
  </div>
`,
  styleUrls: ['./create-user-dialog.component.css']
})
export class CreateUserDialogComponent {

  @Output() created = new EventEmitter<any>();
  @Output() closed = new EventEmitter<void>();

  form: any = {
    email: '',
    nickname: '',
    birthDate: '',
    role: 'USER',
    password: '',
    confirmPassword: ''
  };

  save() {
    if (!this.canSave) return;

    const payload = { ...this.form };
    delete payload.confirmPassword;

    this.created.emit(payload);
  }

  close() {
    this.closed.emit();
  }

  get passwordMismatch(): boolean {
    if (!this.form.password && !this.form.confirmPassword) return false;
    return this.form.password !== this.form.confirmPassword;
  }

  get canSave(): boolean {
    return !!this.form.email
      && !!this.form.password
      && !this.passwordMismatch;
  }

}
