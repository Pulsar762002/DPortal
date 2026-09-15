import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ConfirmDialogComponent } from '../../../core/components/confirm-dialog/confirm-dialog.component';
import {FormsModule} from '@angular/forms';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';

@Component({
  standalone: true,
  imports: [CommonModule, ConfirmDialogComponent, FormsModule, EditUserDialogComponent, CreateUserDialogComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  apiUrl = environment.apiUrl;
  users: any[] = [];
  showConfirm = false;
  pendingUser: any = null;
  pendingRole: string | null = null;
  showEditModal = false;
  showEditDialog = false;
  showCreateDialog = false;
  showDeleteConfirm = false;
  selectedUser: any = null;


  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<any[]>(`${this.apiUrl}/api/admin/users`)
      .subscribe(data => {
        this.users = data;
        this.cdr.detectChanges();
      });
  }

  changeRole(user: any, role: string) {
    this.http.put(
      `${this.apiUrl}/api/admin/users/${user.id}/role?role=${role}`,
      {}
    ).subscribe(() => {
      user.role = role;
      this.cdr.detectChanges();
    });
  }

  requestRoleChange(user: any, role: string) {
    this.pendingUser = user;
    this.pendingRole = role;
    this.showConfirm = true;
  }

  confirmChange() {
    if (!this.pendingUser || !this.pendingRole) return;

    this.http.put(
      `${this.apiUrl}/api/admin/users/${this.pendingUser.id}/role?role=${this.pendingRole}`,
      {}
    ).subscribe(() => {
      this.pendingUser.role = this.pendingRole;
      this.showConfirm = false;
      this.cdr.detectChanges();
    });
  }

  openEdit(user: any) {
    this.selectedUser = user;
    this.showEditDialog = true;
  }

  openCreate() {
    this.showCreateDialog = true;
  }

  handleCreate(newUser: any) {
    this.http.post<any>(
      `${this.apiUrl}/api/admin/users`,
      newUser
    ).subscribe({
      next: created => {
        this.users.push({
          id: created.id,
          email: created.email,
          nickname: created.nickname,
          role: created.role,
          isActive: created.isActive
        });
        this.showCreateDialog = false;
        this.cdr.detectChanges();
      },
      error: err => alert(err?.error?.message ?? 'Impossibile creare l\'utente')
    });
  }

  handleSave(updatedData: any) {

    this.http.put(
      `${this.apiUrl}/api/admin/users/${this.selectedUser.id}`,
      updatedData
    ).subscribe(() => {

      Object.assign(this.selectedUser, updatedData);

      this.showEditDialog = false;
      this.cdr.detectChanges();
    });
  }

  toggleActive(user: any) {
    const isActive = !user.isActive;

    this.http.put(
      `${this.apiUrl}/api/admin/users/${user.id}/status`,
      { isActive }
    ).subscribe({
      next: () => {
        user.isActive = isActive;
        this.cdr.detectChanges();
      },
      error: err => alert(err?.error?.message ?? 'Operazione non riuscita')
    });
  }

  requestDelete(user: any) {
    this.pendingUser = user;
    this.pendingRole = null;
    this.showDeleteConfirm = true;
  }

  confirmDelete() {
    if (!this.pendingUser) return;

    this.http.delete(
      `${this.apiUrl}/api/admin/users/${this.pendingUser.id}`
    ).subscribe({
      next: () => {
        this.users = this.users.filter(u => u.id !== this.pendingUser.id);
        this.showDeleteConfirm = false;
        this.cdr.detectChanges();
      },
      error: err => {
        alert(err?.error?.message ?? 'Impossibile eliminare l\'utente');
        this.showDeleteConfirm = false;
        this.cdr.detectChanges();
      }
    });
  }

}
