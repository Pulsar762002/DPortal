import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import {FooterComponent} from '../footer/footer.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './shell.component.html'
})
export class ShellComponent {
  // hideTopbar = false;
  //
  // constructor(private router: Router) {
  //   this.router.events
  //     .pipe(filter(event => event instanceof NavigationEnd))
  //     .subscribe((event: NavigationEnd) => {
  //       this.hideTopbar =
  //         event.urlAfterRedirects.startsWith('/login') ||
  //         event.urlAfterRedirects.startsWith('/register');
  //     });
  // }
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
