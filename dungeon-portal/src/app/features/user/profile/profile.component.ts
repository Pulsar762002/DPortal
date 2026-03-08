import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  apiUrl = environment.apiUrl;
  previewUrl: string | null = null;
  user: any;
  nickname = '';
  selectedFile: File | null = null;

  isSaving = false;
  message = '';

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.user = this.authService.getUser();
    this.nickname = this.user?.nickname;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (!file) return;

    this.selectedFile = file;

    const reader = new FileReader();

    reader.onload = () => {
      this.previewUrl = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  saveChanges() {

    if (!this.nickname?.trim()) {
      this.message = "Il nickname non può essere vuoto";
      return;
    }

    this.isSaving = true;
    this.message = '';

    const formData = new FormData();
    formData.append('nickname', this.nickname);

    if (this.selectedFile) {
      formData.append('avatar', this.selectedFile);
    }

    this.http.put<any>(`${this.apiUrl}/api/users/profile`, formData)
      .subscribe({
        next: (res) => {

          // aggiorna localStorage
          localStorage.setItem('user', JSON.stringify(res.user));
          this.user = res.user;

          this.isSaving = false;
          this.message = "Profilo aggiornato con successo";
        },
        error: () => {
          this.isSaving = false;
          this.message = "Errore durante il salvataggio";
        }
      });
  }

  getAvatarUrl(): string {
    if (this.previewUrl) {
      return this.previewUrl;
    }
    console.log(this.user)
    if (!this.user?.avatarUrl) {
      return 'assets/default-avatar.png';
    }

    return `${this.apiUrl}/uploads/${this.user.avatarUrl}`;
  }
}
