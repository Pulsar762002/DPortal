import {
  AuthService,
  ROLES
} from "./chunk-ZQ7WHGMO.js";
import {
  environment
} from "./chunk-HLZZMSUH.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-G6S4C2NR.js";
import "./chunk-IATL4W7T.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-IY2YVCXA.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PXNMCIHO.js";

// src/app/layout/navbar/navbar.component.ts
var _c0 = () => ({ exact: true });
function NavbarComponent_a_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1, " Dashboard ");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("click", function NavbarComponent_a_13_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.menuOpen = false);
    });
    \u0275\u0275text(1, " Users ");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "a", 14);
    \u0275\u0275text(2, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 15);
    \u0275\u0275text(4, "Registrati");
    \u0275\u0275elementEnd()();
  }
}
function NavbarComponent_div_16_div_9_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275listener("click", function NavbarComponent_div_16_div_9_a_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.menuOpen = false);
    });
    \u0275\u0275text(1, " Admin Panel ");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_div_16_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "a", 24);
    \u0275\u0275listener("click", function NavbarComponent_div_16_div_9_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.menuOpen = false);
    });
    \u0275\u0275text(2, " Profilo ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NavbarComponent_div_16_div_9_a_3_Template, 2, 0, "a", 25);
    \u0275\u0275elementStart(4, "a", 26);
    \u0275\u0275listener("click", function NavbarComponent_div_16_div_9_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(5, " Logout ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isAdmin());
  }
}
function NavbarComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275listener("click", function NavbarComponent_div_16_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMenu());
    });
    \u0275\u0275element(2, "img", 18);
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 21);
    \u0275\u0275text(8, "\u25BC");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, NavbarComponent_div_16_div_9_Template, 6, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.getAvatarUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.user.nickname, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.user.role == null ? null : ctx_r1.user.role.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.user.role, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.menuOpen);
  }
}
var NavbarComponent = class _NavbarComponent {
  authService;
  isAuthenticated$;
  user;
  menuOpen = false;
  apiUrl = environment.apiUrl;
  isMaster() {
    return this.authService.hasRole(ROLES.Master, ROLES.Admin);
  }
  isAdmin() {
    return this.authService.hasRole(ROLES.Admin);
  }
  constructor(authService) {
    this.authService = authService;
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }
  ngOnInit() {
    this.user = this.authService.getUser();
  }
  getAvatarUrl() {
    if (!this.user?.avatarUrl) {
      return "assets/data/ikaros/campagne/discesa-averno/default-avatar.png";
    }
    return `${this.apiUrl}/uploads/${this.user.avatarUrl}`;
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  logout() {
    this.authService.logout();
  }
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], decls: 18, vars: 10, consts: [[1, "topbar"], [1, "topbar-nav"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/campagne", "routerLinkActive", "active"], ["routerLink", "/land", "routerLinkActive", "active"], ["routerLink", "/masters", "routerLinkActive", "active"], ["routerLink", "/styleguide", "routerLinkActive", "active"], ["routerLink", "/dashboard", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/admin/users", 3, "click", 4, "ngIf"], ["class", "topbar-auth", 4, "ngIf"], ["class", "nav-right", 4, "ngIf"], ["routerLink", "/dashboard", "routerLinkActive", "active"], ["routerLink", "/admin/users", 3, "click"], [1, "topbar-auth"], ["routerLink", "/login", 1, "login-link"], ["routerLink", "/register", 1, "register-btn"], [1, "nav-right"], [1, "user-menu", 3, "click"], [1, "avatar", 3, "src"], [1, "nickname"], [1, "role-badge", 3, "ngClass"], [1, "caret"], ["class", "dropdown", 4, "ngIf"], [1, "dropdown"], ["routerLink", "/profile", 3, "click"], ["routerLink", "/admin", 3, "click", 4, "ngIf"], [3, "click"], ["routerLink", "/admin", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "nav", 1)(2, "a", 2);
      \u0275\u0275text(3, " Home ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 3);
      \u0275\u0275text(5, " Campagne ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "a", 4);
      \u0275\u0275text(7, " Land ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, " Masters ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "a", 6);
      \u0275\u0275text(11, " Stili ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, NavbarComponent_a_12_Template, 2, 0, "a", 7)(13, NavbarComponent_a_13_Template, 2, 0, "a", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, NavbarComponent_div_14_Template, 5, 0, "div", 9);
      \u0275\u0275pipe(15, "async");
      \u0275\u0275template(16, NavbarComponent_div_16_Template, 10, 5, "div", 10);
      \u0275\u0275pipe(17, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.isMaster());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(15, 5, ctx.isAuthenticated$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(17, 7, ctx.isAuthenticated$) && ctx.user);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterLink, RouterLinkActive, AsyncPipe], styles: ['\n\n.topbar-auth[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.topbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 36px;\n}\n.topbar-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.topbar-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: -12px;\n  width: 100%;\n  height: 2px;\n  background: var(--accent);\n  border-radius: 2px;\n}\n.login-link[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  text-decoration: none;\n  font-size: 0.95rem;\n  transition: color 0.2s ease;\n}\n.login-link[_ngcontent-%COMP%]:hover {\n  color: var(--text-main);\n}\n.register-btn[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      to right,\n      var(--accent),\n      var(--accent-hover));\n  color: #0f1115;\n  font-weight: 600;\n  font-size: 0.9rem;\n  text-decoration: none;\n  box-shadow: 0 6px 18px rgba(199, 156, 59, 0.35);\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.register-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 26px rgba(199, 156, 59, 0.45);\n}\n.logout-btn[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 999px;\n  border: 1px solid var(--border-soft);\n  background: transparent;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  color: var(--text-main);\n  border-color: var(--accent);\n}\n.nav-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.user-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  gap: 10px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid var(--accent);\n}\n.nickname[_ngcontent-%COMP%] {\n  color: var(--text-main);\n  font-weight: 500;\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  right: 0;\n  background: var(--bg-panel);\n  border: 1px solid var(--border-soft);\n  border-radius: 8px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  min-width: 150px;\n}\n.dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 8px;\n  color: var(--text-main);\n  text-decoration: none;\n}\n.dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: var(--bg-card);\n}\n.role-badge[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  padding: 2px 6px;\n  font-size: 11px;\n  border-radius: 6px;\n  font-weight: 500;\n}\n.role-badge.user[_ngcontent-%COMP%] {\n  background: #555;\n}\n.role-badge.master[_ngcontent-%COMP%] {\n  background: #1976d2;\n}\n.role-badge.admin[_ngcontent-%COMP%] {\n  background: #c62828;\n}\n.caret[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  font-size: 10px;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=navbar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], template: '<header class="topbar">\n\n  <!-- ========================= -->\n  <!-- NAV SINISTRA              -->\n  <!-- ========================= -->\n  <nav class="topbar-nav">\n    <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">\n      Home\n    </a>\n\n    <a routerLink="/campagne" routerLinkActive="active">\n      Campagne\n    </a>\n\n    <a routerLink="/land" routerLinkActive="active">\n      Land\n    </a>\n\n    <a routerLink="/masters" routerLinkActive="active">\n      Masters\n    </a>\n\n    <a routerLink="/styleguide" routerLinkActive="active">\n      Stili\n    </a>\n\n    <!-- Solo Master/Admin -->\n    <a *ngIf="isMaster()" routerLink="/dashboard" routerLinkActive="active">\n      Dashboard\n    </a>\n\n    <a *ngIf="isAdmin()" routerLink="/admin/users" (click)="menuOpen = false">\n      Users\n    </a>\n  </nav>\n\n  <!-- ========================= -->\n  <!-- NON AUTENTICATO           -->\n  <!-- ========================= -->\n  <div class="topbar-auth" *ngIf="!(isAuthenticated$ | async)">\n    <a routerLink="/login" class="login-link">Login</a>\n    <a routerLink="/register" class="register-btn">Registrati</a>\n  </div>\n\n  <!-- ========================= -->\n  <!-- AUTENTICATO               -->\n  <!-- ========================= -->\n  <div class="nav-right" *ngIf="(isAuthenticated$ | async) && user">\n\n    <div class="user-menu" (click)="toggleMenu()">\n\n      <img [src]="getAvatarUrl()" class="avatar" />\n\n      <span class="nickname">\n        {{ user.nickname }}\n      </span>\n\n      <!-- Badge ruolo -->\n      <span class="role-badge" [ngClass]="user.role?.toLowerCase()">\n        {{ user.role }}\n      </span>\n\n      <span class="caret">\u25BC</span>\n\n    </div>\n\n    <!-- Dropdown -->\n    <div class="dropdown" *ngIf="menuOpen">\n\n      <a routerLink="/profile" (click)="menuOpen = false">\n        Profilo\n      </a>\n\n      <!-- Solo Admin -->\n      <a *ngIf="isAdmin()" routerLink="/admin" (click)="menuOpen = false">\n        Admin Panel\n      </a>\n\n      <a (click)="logout()">\n        Logout\n      </a>\n\n    </div>\n\n  </div>\n\n</header>\n', styles: ['/* src/app/layout/navbar/navbar.component.css */\n.topbar-auth {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.topbar-nav {\n  display: flex;\n  align-items: center;\n  gap: 36px;\n}\n.topbar-nav a.active {\n  color: #ffffff;\n}\n.topbar-nav a.active::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: -12px;\n  width: 100%;\n  height: 2px;\n  background: var(--accent);\n  border-radius: 2px;\n}\n.login-link {\n  color: var(--text-muted);\n  text-decoration: none;\n  font-size: 0.95rem;\n  transition: color 0.2s ease;\n}\n.login-link:hover {\n  color: var(--text-main);\n}\n.register-btn {\n  padding: 8px 18px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      to right,\n      var(--accent),\n      var(--accent-hover));\n  color: #0f1115;\n  font-weight: 600;\n  font-size: 0.9rem;\n  text-decoration: none;\n  box-shadow: 0 6px 18px rgba(199, 156, 59, 0.35);\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.register-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 26px rgba(199, 156, 59, 0.45);\n}\n.logout-btn {\n  padding: 6px 14px;\n  border-radius: 999px;\n  border: 1px solid var(--border-soft);\n  background: transparent;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.logout-btn:hover {\n  color: var(--text-main);\n  border-color: var(--accent);\n}\n.nav-right {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.user-menu {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  gap: 10px;\n}\n.avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid var(--accent);\n}\n.nickname {\n  color: var(--text-main);\n  font-weight: 500;\n}\n.dropdown {\n  position: absolute;\n  top: 50px;\n  right: 0;\n  background: var(--bg-panel);\n  border: 1px solid var(--border-soft);\n  border-radius: 8px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  min-width: 150px;\n}\n.dropdown a {\n  padding: 8px;\n  color: var(--text-main);\n  text-decoration: none;\n}\n.dropdown a:hover {\n  background: var(--bg-card);\n}\n.role-badge {\n  margin-left: 8px;\n  padding: 2px 6px;\n  font-size: 11px;\n  border-radius: 6px;\n  font-weight: 500;\n}\n.role-badge.user {\n  background: #555;\n}\n.role-badge.master {\n  background: #1976d2;\n}\n.role-badge.admin {\n  background: #c62828;\n}\n.caret {\n  margin-left: 6px;\n  font-size: 10px;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=navbar.component.css.map */\n'] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/layout/navbar/navbar.component.ts", lineNumber: 16 });
})();

// src/app/layout/shell/shell.component.ts
var ShellComponent = class _ShellComponent {
  authService;
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
  constructor(authService) {
    this.authService = authService;
  }
  logout() {
    this.authService.logout();
  }
  static \u0275fac = function ShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShellComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellComponent, selectors: [["app-shell"]], decls: 3, vars: 0, consts: [[1, "app-content"]], template: function ShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar");
      \u0275\u0275elementStart(1, "main", 0);
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet, NavbarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShellComponent, [{
    type: Component,
    args: [{ selector: "app-shell", standalone: true, imports: [RouterOutlet, NavbarComponent], template: '\n<app-navbar></app-navbar>\n\n<main class="app-content">\n  <router-outlet></router-outlet>\n</main>\n\n<!--<app-footer></app-footer>-->\n' }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellComponent, { className: "ShellComponent", filePath: "src/app/layout/shell/shell.component.ts", lineNumber: 13 });
})();
export {
  ShellComponent
};
//# sourceMappingURL=chunk-RLPPQACC.js.map
