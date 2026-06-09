import {
  HttpClient
} from "./chunk-DPMPS3AG.js";
import {
  Injectable,
  map,
  setClassMetadata,
  shareReplay,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-BVPN5UAK.js";

// src/app/features/public/campagne/discesa-averno/campagna-data.service.ts
var BASE = "assets/data/ikaros/campagne/discesa-averno";
var CampagnaDataService = class _CampagnaDataService {
  http;
  personaggi$;
  luoghi$;
  constructor(http) {
    this.http = http;
  }
  /** Tutti i personaggi (cache condivisa). */
  getPersonaggi() {
    if (!this.personaggi$) {
      this.personaggi$ = this.http.get(`${BASE}/personaggi.json`).pipe(map((f) => f.personaggi ?? []), shareReplay(1));
    }
    return this.personaggi$;
  }
  /** Personaggi di una categoria, già mappati a view-model per la card. */
  getCardsByCategoria(categoria) {
    return this.getPersonaggi().pipe(map((lista) => lista.filter((p) => p.categoria === categoria).map((p) => this.toCardVM(p))));
  }
  toCardVM(p) {
    return {
      nome: p.nome,
      specieClasse: [p.razza, p.eta && p.eta !== "Ignota" ? `(${p.eta})` : null].filter(Boolean).join(" ") || "\u2014",
      descrizione: (p.personalita || p.aspetto || p.background || "").trim() || "\u2014",
      ruolo: p.ruolo || "\u2014",
      immagine: p.immagine ?? null
    };
  }
  /** Tutti i luoghi (cache condivisa). */
  getLuoghi() {
    if (!this.luoghi$) {
      this.luoghi$ = this.http.get(`${BASE}/luoghi.json`).pipe(map((f) => f.luoghi ?? []), shareReplay(1));
    }
    return this.luoghi$;
  }
  static \u0275fac = function CampagnaDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CampagnaDataService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CampagnaDataService, factory: _CampagnaDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CampagnaDataService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CampagnaDataService
};
//# sourceMappingURL=chunk-CHRY54ZV.js.map
