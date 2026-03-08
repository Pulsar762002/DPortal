import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ConfirmDialogComponent } from '../../../core/components/confirm-dialog/confirm-dialog.component';
import {FormsModule} from '@angular/forms';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';

@Component({
  standalone: true,
  imports: [CommonModule, ConfirmDialogComponent, FormsModule, EditUserDialogComponent],
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
  selectedUser: any = null;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('Eccomi');
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<any[]>(`${this.apiUrl}/api/admin/users`)
      .subscribe(data => this.users = data);
  }

  changeRole(user: any, role: string) {
    this.http.put(
      `${this.apiUrl}/api/admin/users/${user.id}/role?role=${role}`,
      {}
    ).subscribe(() => {
      user.role = role;
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
    });
  }

  openEdit(user: any) {
    this.selectedUser = user;
    this.showEditDialog = true;
  }

  handleSave(updatedData: any) {

    this.http.put(
      `${this.apiUrl}/api/admin/users/${this.selectedUser.id}`,
      updatedData
    ).subscribe(() => {

      Object.assign(this.selectedUser, updatedData);

      this.showEditDialog = false;
    });
  }


}
