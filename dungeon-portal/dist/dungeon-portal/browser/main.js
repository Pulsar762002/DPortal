import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  provideNativeDateAdapter
} from "./chunk-IGN5LVSC.js";
import {
  AuthService,
  ROLES
} from "./chunk-4U4DAGBA.js";
import "./chunk-HLZZMSUH.js";
import {
  Router,
  RouterOutlet,
  provideRouter,
  withInMemoryScrolling
} from "./chunk-7BCSRJIT.js";
import {
  bootstrapApplication,
  provideClientHydration,
  withEventReplay
} from "./chunk-K4BMEWWG.js";
import {
  CommonModule,
  provideHttpClient,
  withInterceptors
} from "./chunk-DPMPS3AG.js";
import {
  Component,
  inject,
  provideBrowserGlobalErrorListeners,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-BVPN5UAK.js";

// src/app/core/services/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const token = typeof window === "undefined" ? null : localStorage.getItem("token");
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }
  return next(req);
};

// src/app/core/guards/auth.guard.ts
var authGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();
  if (token) {
    return true;
  }
  return router.createUrlTree(["/login"], { queryParams: { returnUrl: state.url } });
};

// src/app/core/guards/role.guard.ts
var roleGuard = (allowedRoles) => {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    if (!authService.getUser()) {
      router.navigate(["/login"]);
      return false;
    }
    if (!authService.hasRole(...allowedRoles)) {
      router.navigate(["/"]);
      return false;
    }
    return true;
  };
};

// src/app/app.routes.ts
var routes = [
  // ==========================
  // AUTH (FUORI DAL LAYOUT)
  // ==========================
  {
    path: "login",
    loadComponent: () => import("./chunk-UVDKEID3.js").then((m) => m.LoginComponent)
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-4EKVQQ34.js").then((m) => m.RegisterComponent)
  },
  // ==========================
  // LAYOUT CON NAVBAR
  // ==========================
  {
    path: "",
    loadComponent: () => import("./chunk-DX4V57TM.js").then((m) => m.ShellComponent),
    children: [
      // PUBLIC
      {
        path: "",
        loadComponent: () => import("./chunk-4AIMMXR6.js").then((m) => m.HomeComponent)
      },
      {
        path: "masters",
        loadComponent: () => import("./chunk-IQXF25D4.js").then((m) => m.MastersComponent)
      },
      {
        path: "styleguide",
        loadComponent: () => import("./chunk-KAVD6UCX.js").then((m) => m.StyleguideComponent)
      },
      // PROTECTED
      {
        path: "dashboard",
        canActivate: [
          authGuard,
          roleGuard([ROLES.Master, ROLES.Admin])
        ],
        loadComponent: () => import("./chunk-AZB72ZHN.js").then((m) => m.DashboardComponent)
      },
      {
        path: "dashboard/campagne",
        canActivate: [authGuard],
        loadComponent: () => import("./chunk-22IGSUGU.js").then((m) => m.CampagneManagerComponent)
      },
      {
        path: "dashboard/cronache",
        canActivate: [authGuard],
        loadComponent: () => import("./chunk-WDNUV7NO.js").then((m) => m.CronacheEditorComponent)
      },
      {
        path: "campagne",
        canActivate: [authGuard],
        children: [
          {
            path: "",
            pathMatch: "full",
            loadComponent: () => import("./chunk-EGWSDKYB.js").then((m) => m.CampagneComponent)
          },
          {
            path: ":slug",
            children: [
              {
                path: "",
                pathMatch: "full",
                loadComponent: () => import("./chunk-XAJQZB6G.js").then((m) => m.CampaignDetailComponent)
              },
              {
                path: "sessione/:sessionId",
                loadComponent: () => import("./chunk-5LH74KLJ.js").then((m) => m.DynamicSessionComponent)
              },
              {
                path: "personaggi",
                loadComponent: () => import("./chunk-M35NAN4R.js").then((m) => m.PersonaggiPageComponent)
              },
              {
                path: "luoghi",
                loadComponent: () => import("./chunk-6RFZIEKT.js").then((m) => m.LuoghiPageComponent)
              },
              {
                path: "grafo",
                loadComponent: () => import("./chunk-WHWXWHI7.js").then((m) => m.GrafoComponent)
              }
            ]
          }
        ]
      },
      {
        path: "land",
        canActivate: [authGuard],
        loadComponent: () => import("./chunk-AR36QK6G.js").then((m) => m.LandComponent)
      },
      {
        path: "profile",
        canActivate: [authGuard],
        loadComponent: () => import("./chunk-YUE6FKNE.js").then((m) => m.ProfileComponent)
      },
      {
        path: "admin/users",
        canActivate: [
          authGuard,
          roleGuard([ROLES.Admin])
        ],
        loadComponent: () => import("./chunk-7NSKWUFV.js").then((m) => m.UsersComponent)
      }
    ]
  },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var IT_DATE_FORMATS = {
  parse: {
    dateInput: "DD/MM/YYYY"
  },
  display: {
    dateInput: "DD/MM/YYYY",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "DD/MM/YYYY",
    monthYearA11yLabel: "MMMM YYYY"
  }
};
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({
      anchorScrolling: "enabled",
      scrollPositionRestoration: "enabled"
    })),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: "it-IT" },
    { provide: MAT_DATE_FORMATS, useValue: IT_DATE_FORMATS }
  ]
};

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [CommonModule, RouterOutlet], styles: ["\n\n[_ngcontent-%COMP%]:root {\n  --bg-main: #0f1115;\n  --bg-panel: #161a22;\n  --bg-card: #1e2330;\n  --text-main: #e6e8ee;\n  --text-muted: #a9afc3;\n  --accent: #c79c3b;\n  --accent-hover: #e0b84c;\n  --border-soft: #2a3042;\n}\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], \nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  color: var(--text-main);\n  background: linear-gradient(rgba(10, 12, 15, 0.45), rgba(10, 12, 15, 0.65)), url(/assets/backgrounds/lotr-bg.png);\n  background-size: cover;\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [CommonModule, RouterOutlet], template: "<router-outlet></router-outlet>\n", styles: ["/* src/app/app.css */\n:root {\n  --bg-main: #0f1115;\n  --bg-panel: #161a22;\n  --bg-card: #1e2330;\n  --text-main: #e6e8ee;\n  --text-muted: #a9afc3;\n  --accent: #c79c3b;\n  --accent-hover: #e0b84c;\n  --border-soft: #2a3042;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  margin: 0;\n  height: 100%;\n}\nbody {\n  font-family:\n    Inter,\n    system-ui,\n    sans-serif;\n  color: var(--text-main);\n  background: linear-gradient(rgba(10, 12, 15, 0.45), rgba(10, 12, 15, 0.65)), url(/assets/backgrounds/lotr-bg.png);\n  background-size: cover;\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 12 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
