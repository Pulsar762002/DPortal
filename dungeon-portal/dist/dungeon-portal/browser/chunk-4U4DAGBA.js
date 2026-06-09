import {
  environment
} from "./chunk-HLZZMSUH.js";
import {
  Router
} from "./chunk-7BCSRJIT.js";
import {
  HttpClient
} from "./chunk-DPMPS3AG.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-BVPN5UAK.js";

// src/app/core/models/role.model.ts
var ROLES = {
  User: "USER",
  Master: "MASTER",
  Admin: "ADMIN"
};
function hasAnyRole(userRole, allowed) {
  if (!userRole)
    return false;
  const normalized = userRole.toUpperCase();
  return allowed.includes(normalized);
}

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  router;
  apiUrl = environment.apiUrl;
  authState = new BehaviorSubject(this.hasToken());
  isAuthenticated$ = this.authState.asObservable();
  constructor(http, router) {
    this.http = http;
    this.router = router;
  }
  register(data) {
    return this.http.post(`${this.apiUrl}/api/auth/register`, data);
  }
  hasToken() {
    if (typeof window === "undefined") {
      return false;
    }
    return !!localStorage.getItem("token");
  }
  login(email, password) {
    return this.http.post(`${this.apiUrl}/api/auth/login`, { email, password }).pipe(tap((response) => {
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      this.authState.next(true);
    }));
  }
  getUser() {
    if (typeof window === "undefined") {
      return null;
    }
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  getRole() {
    return this.getUser()?.role ?? null;
  }
  /** Verifica (case-insensitive) se l'utente corrente ha uno dei ruoli indicati. */
  hasRole(...allowed) {
    return hasAnyRole(this.getRole(), allowed);
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.authState.next(false);
    this.router.navigate(["/login"]);
  }
  getToken() {
    if (typeof window === "undefined") {
      return null;
    }
    return localStorage.getItem("token");
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

export {
  ROLES,
  AuthService
};
//# sourceMappingURL=chunk-4U4DAGBA.js.map
