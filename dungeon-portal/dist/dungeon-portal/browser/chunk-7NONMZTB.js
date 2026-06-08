import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-AUXLXFPS.js";
import {
  AuthService
} from "./chunk-ZQ7WHGMO.js";
import "./chunk-HLZZMSUH.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-G6S4C2NR.js";
import "./chunk-IATL4W7T.js";
import {
  CommonModule,
  NgIf
} from "./chunk-IY2YVCXA.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PXNMCIHO.js";

// src/app/auth/login/login.component.ts
function LoginComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
var LoginComponent = class _LoginComponent {
  authService;
  router;
  route;
  email = "";
  password = "";
  error = "";
  constructor(authService, router, route) {
    this.authService = authService;
    this.router = router;
    this.route = route;
  }
  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";
        console.log(returnUrl);
        this.router.navigateByUrl(returnUrl);
      },
      error: () => {
        this.error = "Credenziali non valide";
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 16, vars: 3, consts: [[1, "login-page"], [1, "login-card"], [1, "subtitle"], [3, "ngSubmit"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Password", "name", "password", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit"], [1, "switch"], ["routerLink", "/register"], ["class", "error", 4, "ngIf"], [1, "error"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Accedi al Portale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Entra nel mondo delle tue campagne");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "form", 3);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
        return ctx.onLogin();
      });
      \u0275\u0275elementStart(7, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 6);
      \u0275\u0275text(10, "Accedi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p", 7);
      \u0275\u0275text(12, " Non hai un account? ");
      \u0275\u0275elementStart(13, "a", 8);
      \u0275\u0275text(14, "Registrati");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(15, LoginComponent_div_15_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.error);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 420px;\n  padding: 40px;\n  border-radius: 20px;\n  background: rgba(22, 26, 34, 0.95);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.04);\n}\n.login-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.8rem;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 8px 0 24px;\n  color: var(--text-muted);\n  font-size: 0.95rem;\n}\n.login-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  margin-bottom: 18px;\n  border-radius: 10px;\n  border: 1px solid var(--border-soft);\n  background: #0f1115;\n  color: var(--text-main);\n  font-size: 0.95rem;\n}\n.login-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent);\n  box-shadow: 0 0 0 2px rgba(199, 156, 59, 0.2);\n}\n.login-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  border-radius: 12px;\n  border: none;\n  background:\n    linear-gradient(\n      to right,\n      var(--accent),\n      var(--accent-hover));\n  color: #000;\n  font-weight: 600;\n  font-size: 0.95rem;\n  cursor: pointer;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.login-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 30px rgba(199, 156, 59, 0.4);\n}\n.switch[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n}\n.switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--accent);\n  text-decoration: none;\n}\n.error[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  color: #ff6b6b;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: '<section class="login-page">\n  <div class="login-card">\n\n    <h1>Accedi al Portale</h1>\n    <p class="subtitle">Entra nel mondo delle tue campagne</p>\n\n    <form (ngSubmit)="onLogin()">\n      <input\n        type="email"\n        placeholder="Email"\n        [(ngModel)]="email"\n        name="email"\n        required\n      />\n\n      <input\n        type="password"\n        placeholder="Password"\n        [(ngModel)]="password"\n        name="password"\n        required\n      />\n\n      <button type="submit">Accedi</button>\n    </form>\n\n    <p class="switch">\n      Non hai un account?\n      <a routerLink="/register">Registrati</a>\n    </p>\n\n    <div *ngIf="error" class="error">\n      {{ error }}\n    </div>\n\n  </div>\n</section>\n', styles: ["/* src/app/auth/login/login.component.css */\n.login-page {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n}\n.login-card {\n  width: 420px;\n  padding: 40px;\n  border-radius: 20px;\n  background: rgba(22, 26, 34, 0.95);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.04);\n}\n.login-card h1 {\n  margin: 0;\n  font-size: 1.8rem;\n}\n.subtitle {\n  margin: 8px 0 24px;\n  color: var(--text-muted);\n  font-size: 0.95rem;\n}\n.login-card input {\n  width: 100%;\n  padding: 14px;\n  margin-bottom: 18px;\n  border-radius: 10px;\n  border: 1px solid var(--border-soft);\n  background: #0f1115;\n  color: var(--text-main);\n  font-size: 0.95rem;\n}\n.login-card input:focus {\n  outline: none;\n  border-color: var(--accent);\n  box-shadow: 0 0 0 2px rgba(199, 156, 59, 0.2);\n}\n.login-card button {\n  width: 100%;\n  padding: 14px;\n  border-radius: 12px;\n  border: none;\n  background:\n    linear-gradient(\n      to right,\n      var(--accent),\n      var(--accent-hover));\n  color: #000;\n  font-weight: 600;\n  font-size: 0.95rem;\n  cursor: pointer;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.login-card button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 30px rgba(199, 156, 59, 0.4);\n}\n.switch {\n  margin-top: 18px;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n}\n.switch a {\n  color: var(--accent);\n  text-decoration: none;\n}\n.error {\n  margin-top: 16px;\n  color: #ff6b6b;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-7NONMZTB.js.map
