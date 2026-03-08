import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: () => {

        const returnUrl =
          this.route.snapshot.queryParamMap.get('returnUrl') || '/';
          console.log(returnUrl);
        this.router.navigateByUrl(returnUrl);
      },
      error: () => {
        this.error = 'Credenziali non valide';
      }
    });
  }
}
