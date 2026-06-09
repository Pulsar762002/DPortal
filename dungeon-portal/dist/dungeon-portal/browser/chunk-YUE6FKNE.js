import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-7ZFA3LSQ.js";
import {
  AuthService
} from "./chunk-4U4DAGBA.js";
import {
  environment
} from "./chunk-HLZZMSUH.js";
import "./chunk-7BCSRJIT.js";
import "./chunk-K4BMEWWG.js";
import {
  CommonModule,
  HttpClient
} from "./chunk-DPMPS3AG.js";
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BVPN5UAK.js";

// src/app/features/user/profile/profile.component.ts
var ProfileComponent = class _ProfileComponent {
  authService;
  http;
  apiUrl = environment.apiUrl;
  previewUrl = null;
  user;
  nickname = "";
  selectedFile = null;
  isSaving = false;
  message = "";
  constructor(authService, http) {
    this.authService = authService;
    this.http = http;
  }
  ngOnInit() {
    this.user = this.authService.getUser();
    this.nickname = this.user?.nickname;
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (!file)
      return;
    this.selectedFile = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }
  saveChanges() {
    if (!this.nickname?.trim()) {
      this.message = "Il nickname non pu\xF2 essere vuoto";
      return;
    }
    this.isSaving = true;
    this.message = "";
    const formData = new FormData();
    formData.append("nickname", this.nickname);
    if (this.selectedFile) {
      formData.append("avatar", this.selectedFile);
    }
    this.http.put(`${this.apiUrl}/api/users/profile`, formData).subscribe({
      next: (res) => {
        localStorage.setItem("user", JSON.stringify(res.user));
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
  getAvatarUrl() {
    if (this.previewUrl) {
      return this.previewUrl;
    }
    console.log(this.user);
    if (!this.user?.avatarUrl) {
      return "assets/data/ikaros/campagne/discesa-averno/default-avatar.png";
    }
    return `${this.apiUrl}/uploads/${this.user.avatarUrl}`;
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 21, vars: 7, consts: [[1, "profile-wrapper"], [1, "profile-card"], [1, "avatar-section"], [1, "avatar-large", 3, "src"], ["type", "file", 3, "change"], [1, "info-section"], ["type", "text", "disabled", "", 3, "value"], ["type", "text", 3, "ngModelChange", "ngModel"], [3, "click", "disabled"], [1, "message"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementStart(4, "input", 4);
      \u0275\u0275listener("change", function ProfileComponent_Template_input_change_4_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 5)(6, "h2");
      \u0275\u0275text(7, "Profilo Utente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "label");
      \u0275\u0275text(9, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "input", 6);
      \u0275\u0275elementStart(11, "label");
      \u0275\u0275text(12, "Nickname");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.nickname, $event) || (ctx.nickname = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "label");
      \u0275\u0275text(15, "Ruolo");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 6);
      \u0275\u0275elementStart(17, "button", 8);
      \u0275\u0275listener("click", function ProfileComponent_Template_button_click_17_listener() {
        return ctx.saveChanges();
      });
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 9);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx.getAvatarUrl(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.user.email);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.nickname);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.user.role);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSaving ? "Salvataggio..." : "Salva modifiche", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.message);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.profile-wrapper[_ngcontent-%COMP%] {\n  padding: 60px;\n  display: flex;\n  justify-content: center;\n}\n.profile-card[_ngcontent-%COMP%] {\n  background: var(--bg-panel);\n  border: 1px solid var(--border-soft);\n  border-radius: 12px;\n  padding: 40px;\n  display: flex;\n  gap: 60px;\n  color: var(--text-main);\n  min-width: 700px;\n}\n.avatar-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.avatar-large[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid var(--accent);\n}\n.info-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 300px;\n}\ninput[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 6px;\n  border: 1px solid var(--border-soft);\n  background: var(--bg-card);\n  color: var(--text-main);\n}\nbutton[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 10px;\n  background: var(--accent);\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.message[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="profile-wrapper">

  <div class="profile-card">

    <div class="avatar-section">
      <img [src]="getAvatarUrl()" class="avatar-large">
      <input type="file" (change)="onFileSelected($event)">
    </div>

    <div class="info-section">

      <h2>Profilo Utente</h2>

      <label>Email</label>
      <input type="text" [value]="user.email" disabled>

      <label>Nickname</label>
      <input type="text" [(ngModel)]="nickname">

      <label>Ruolo</label>
      <input type="text" [value]="user.role" disabled>

      <button (click)="saveChanges()" [disabled]="isSaving">
        {{ isSaving ? 'Salvataggio...' : 'Salva modifiche' }}
      </button>

      <p class="message">{{ message }}</p>

    </div>

  </div>

</div>
`, styles: ["/* src/app/features/user/profile/profile.component.css */\n.profile-wrapper {\n  padding: 60px;\n  display: flex;\n  justify-content: center;\n}\n.profile-card {\n  background: var(--bg-panel);\n  border: 1px solid var(--border-soft);\n  border-radius: 12px;\n  padding: 40px;\n  display: flex;\n  gap: 60px;\n  color: var(--text-main);\n  min-width: 700px;\n}\n.avatar-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.avatar-large {\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid var(--accent);\n}\n.info-section {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 300px;\n}\ninput {\n  padding: 10px;\n  border-radius: 6px;\n  border: 1px solid var(--border-soft);\n  background: var(--bg-card);\n  color: var(--text-main);\n}\nbutton {\n  margin-top: 20px;\n  padding: 10px;\n  background: var(--accent);\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n}\nbutton:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.message {\n  margin-top: 10px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=profile.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/features/user/profile/profile.component.ts", lineNumber: 15 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-YUE6FKNE.js.map
