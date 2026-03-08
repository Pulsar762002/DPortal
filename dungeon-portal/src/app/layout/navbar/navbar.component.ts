import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isAuthenticated$!: Observable<boolean>;
  user: any;
  menuOpen = false;
  apiUrl = environment.apiUrl;

  isMaster(): boolean {
    return this.user?.role === 'MASTER' || this.user?.role === 'ADMIN';
  }

  isAdmin(): boolean {
    return this.user?.role === 'ADMIN';
  }

  constructor(private authService: AuthService) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

  getAvatarUrl(): string {
    if (!this.user?.avatarUrl) {
      return 'assets/default-avatar.png';
    }
    return `${this.apiUrl}/uploads/${this.user.avatarUrl}`;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.authService.logout();
  }

}
