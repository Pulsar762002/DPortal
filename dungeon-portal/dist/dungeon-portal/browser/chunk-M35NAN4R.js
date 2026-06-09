import {
  CampagnaDataService
} from "./chunk-CHRY54ZV.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-DPMPS3AG.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-BVPN5UAK.js";

// src/app/features/public/campagne/discesa-averno/personaggi/principali/personaggio-card/personaggio-card.component.ts
function PersonaggioCardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.immagine, \u0275\u0275sanitizeUrl)("alt", ctx_r0.nome);
  }
}
var PersonaggioCardComponent = class _PersonaggioCardComponent {
  nome;
  specieClasse;
  descrizione;
  ruolo;
  immagine;
  static \u0275fac = function PersonaggioCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PersonaggioCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PersonaggioCardComponent, selectors: [["app-personaggio-card"]], inputs: { nome: "nome", specieClasse: "specieClasse", descrizione: "descrizione", ruolo: "ruolo", immagine: "immagine" }, decls: 18, vars: 5, consts: [[1, "personaggio-wrapper"], ["class", "personaggio-image", 4, "ngIf"], [1, "personaggio-content"], [1, "personaggio-nome"], [1, "personaggio-info"], [1, "personaggio-image"], [3, "src", "alt"]], template: function PersonaggioCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, PersonaggioCardComponent_div_1_Template, 2, 2, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "h3", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ul", 4)(6, "li")(7, "strong");
      \u0275\u0275text(8, "Specie/Classe:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "li")(11, "strong");
      \u0275\u0275text(12, "Descrizione:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "li")(15, "strong");
      \u0275\u0275text(16, "Ruolo nel gruppo:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.immagine);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.nome, " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.specieClasse, " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.descrizione, " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.ruolo, " ");
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.personaggio-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  padding: 1.8rem;\n  margin-bottom: 3rem;\n  background: rgba(20, 20, 20, 0.75);\n  border: 1px solid rgba(212, 175, 55, 0.3);\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.personaggio-wrapper[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);\n}\n.personaggio-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 160px;\n  border-radius: 10px;\n  border: 2px solid rgba(212, 175, 55, 0.5);\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);\n}\n.personaggio-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.personaggio-nome[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 1.5rem;\n  color: #d4af37;\n  text-shadow: 0 0 8px rgba(212, 175, 55, 0.4);\n}\n.personaggio-info[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.personaggio-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.9rem;\n  line-height: 1.6;\n  color: #f1e6c8;\n}\n.personaggio-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n/*# sourceMappingURL=personaggio-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonaggioCardComponent, [{
    type: Component,
    args: [{ selector: "app-personaggio-card", standalone: true, imports: [CommonModule], template: '<div class="personaggio-wrapper">\n\n  <div class="personaggio-image" *ngIf="immagine">\n    <img [src]="immagine" [alt]="nome">\n  </div>\n\n  <div class="personaggio-content">\n\n    <h3 class="personaggio-nome">\n      {{ nome }}\n    </h3>\n\n    <ul class="personaggio-info">\n      <li>\n        <strong>Specie/Classe:</strong>\n        {{ specieClasse }}\n      </li>\n\n      <li>\n        <strong>Descrizione:</strong>\n        {{ descrizione }}\n      </li>\n\n      <li>\n        <strong>Ruolo nel gruppo:</strong>\n        {{ ruolo }}\n      </li>\n    </ul>\n\n  </div>\n\n</div>\n', styles: ["/* src/app/features/public/campagne/discesa-averno/personaggi/principali/personaggio-card/personaggio-card.component.css */\n.personaggio-wrapper {\n  display: flex;\n  gap: 2rem;\n  padding: 1.8rem;\n  margin-bottom: 3rem;\n  background: rgba(20, 20, 20, 0.75);\n  border: 1px solid rgba(212, 175, 55, 0.3);\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.personaggio-wrapper:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);\n}\n.personaggio-image img {\n  width: 160px;\n  border-radius: 10px;\n  border: 2px solid rgba(212, 175, 55, 0.5);\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);\n}\n.personaggio-content {\n  flex: 1;\n}\n.personaggio-nome {\n  margin: 0 0 1rem 0;\n  font-size: 1.5rem;\n  color: #d4af37;\n  text-shadow: 0 0 8px rgba(212, 175, 55, 0.4);\n}\n.personaggio-info {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.personaggio-info li {\n  margin-bottom: 0.9rem;\n  line-height: 1.6;\n  color: #f1e6c8;\n}\n.personaggio-info strong {\n  color: #ffffff;\n}\n/*# sourceMappingURL=personaggio-card.component.css.map */\n"] }]
  }], null, { nome: [{
    type: Input
  }], specieClasse: [{
    type: Input
  }], descrizione: [{
    type: Input
  }], ruolo: [{
    type: Input
  }], immagine: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersonaggioCardComponent, { className: "PersonaggioCardComponent", filePath: "src/app/features/public/campagne/discesa-averno/personaggi/principali/personaggio-card/personaggio-card.component.ts", lineNumber: 11 });
})();

// src/app/features/public/campagne/discesa-averno/personaggi/principali/principali.component.ts
function PrincipaliComponent_app_personaggio_card_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-personaggio-card", 3);
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275property("nome", p_r1.nome)("specieClasse", p_r1.specieClasse)("descrizione", p_r1.descrizione)("ruolo", p_r1.ruolo)("immagine", p_r1.immagine);
  }
}
var PrincipaliComponent = class _PrincipaliComponent {
  dati;
  personaggi$;
  constructor(dati) {
    this.dati = dati;
    this.personaggi$ = this.dati.getCardsByCategoria("party");
  }
  static \u0275fac = function PrincipaliComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrincipaliComponent)(\u0275\u0275directiveInject(CampagnaDataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrincipaliComponent, selectors: [["app-principali"]], decls: 5, vars: 3, consts: [[1, "personaggi-section"], [1, "section-title"], [3, "nome", "specieClasse", "descrizione", "ruolo", "immagine", 4, "ngFor", "ngForOf"], [3, "nome", "specieClasse", "descrizione", "ruolo", "immagine"]], template: function PrincipaliComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h2", 1);
      \u0275\u0275text(2, " Personaggi principali della campagna ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, PrincipaliComponent_app_personaggio_card_3_Template, 1, 5, "app-personaggio-card", 2);
      \u0275\u0275pipe(4, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 1, ctx.personaggi$));
    }
  }, dependencies: [CommonModule, NgForOf, PersonaggioCardComponent, AsyncPipe], styles: ["\n\n.personaggi-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  margin-bottom: 2rem;\n  color: var(--accent);\n}\n/*# sourceMappingURL=principali.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrincipaliComponent, [{
    type: Component,
    args: [{ selector: "app-principali", standalone: true, imports: [CommonModule, PersonaggioCardComponent], template: '<section class="personaggi-section">\n\n  <h2 class="section-title">\n    Personaggi principali della campagna\n  </h2>\n\n  <app-personaggio-card\n    *ngFor="let p of personaggi$ | async"\n    [nome]="p.nome"\n    [specieClasse]="p.specieClasse"\n    [descrizione]="p.descrizione"\n    [ruolo]="p.ruolo"\n    [immagine]="p.immagine">\n  </app-personaggio-card>\n\n</section>\n', styles: ["/* src/app/features/public/campagne/discesa-averno/personaggi/principali/principali.component.css */\n.personaggi-section {\n  margin-top: 2rem;\n}\n.section-title {\n  font-size: 1.6rem;\n  margin-bottom: 2rem;\n  color: var(--accent);\n}\n/*# sourceMappingURL=principali.component.css.map */\n"] }]
  }], () => [{ type: CampagnaDataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrincipaliComponent, { className: "PrincipaliComponent", filePath: "src/app/features/public/campagne/discesa-averno/personaggi/principali/principali.component.ts", lineNumber: 14 });
})();

// src/app/features/public/campagne/discesa-averno/personaggi/alleati/alleati.component.ts
function AlleatiComponent_app_personaggio_card_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-personaggio-card", 3);
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275property("nome", p_r1.nome)("specieClasse", p_r1.specieClasse)("descrizione", p_r1.descrizione)("ruolo", p_r1.ruolo)("immagine", p_r1.immagine);
  }
}
var AlleatiComponent = class _AlleatiComponent {
  dati;
  personaggi$;
  constructor(dati) {
    this.dati = dati;
    this.personaggi$ = this.dati.getCardsByCategoria("alleato");
  }
  static \u0275fac = function AlleatiComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlleatiComponent)(\u0275\u0275directiveInject(CampagnaDataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlleatiComponent, selectors: [["app-alleati"]], decls: 5, vars: 3, consts: [[1, "alleati-section"], [1, "section-title"], [3, "nome", "specieClasse", "descrizione", "ruolo", "immagine", 4, "ngFor", "ngForOf"], [3, "nome", "specieClasse", "descrizione", "ruolo", "immagine"]], template: function AlleatiComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h2", 1);
      \u0275\u0275text(2, " Alleati e PNG incontrati della campagna ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, AlleatiComponent_app_personaggio_card_3_Template, 1, 5, "app-personaggio-card", 2);
      \u0275\u0275pipe(4, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 1, ctx.personaggi$));
    }
  }, dependencies: [CommonModule, NgForOf, PersonaggioCardComponent, AsyncPipe], styles: ["\n\n.personaggi-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  margin-bottom: 2rem;\n  color: var(--accent);\n}\n/*# sourceMappingURL=alleati.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlleatiComponent, [{
    type: Component,
    args: [{ selector: "app-alleati", standalone: true, imports: [CommonModule, PersonaggioCardComponent], template: '<section class="alleati-section">\n\n  <h2 class="section-title">\n    Alleati e PNG incontrati della campagna\n  </h2>\n\n  <app-personaggio-card\n    *ngFor="let p of personaggi$ | async"\n    [nome]="p.nome"\n    [specieClasse]="p.specieClasse"\n    [descrizione]="p.descrizione"\n    [ruolo]="p.ruolo"\n    [immagine]="p.immagine">\n  </app-personaggio-card>\n\n</section>\n', styles: ["/* src/app/features/public/campagne/discesa-averno/personaggi/alleati/alleati.component.css */\n.personaggi-section {\n  margin-top: 2rem;\n}\n.section-title {\n  font-size: 1.6rem;\n  margin-bottom: 2rem;\n  color: var(--accent);\n}\n/*# sourceMappingURL=alleati.component.css.map */\n"] }]
  }], () => [{ type: CampagnaDataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlleatiComponent, { className: "AlleatiComponent", filePath: "src/app/features/public/campagne/discesa-averno/personaggi/alleati/alleati.component.ts", lineNumber: 14 });
})();

// src/app/features/public/campagne/discesa-averno/personaggi/minori/minori.component.ts
function MinoriComponent_app_personaggio_card_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-personaggio-card", 4);
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275property("nome", p_r1.nome)("specieClasse", p_r1.specieClasse)("descrizione", p_r1.descrizione)("ruolo", p_r1.ruolo)("immagine", p_r1.immagine);
  }
}
var MinoriComponent = class _MinoriComponent {
  dati;
  personaggi$;
  constructor(dati) {
    this.dati = dati;
    this.personaggi$ = this.dati.getCardsByCategoria("avversario");
  }
  static \u0275fac = function MinoriComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MinoriComponent)(\u0275\u0275directiveInject(CampagnaDataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MinoriComponent, selectors: [["app-minori"]], decls: 7, vars: 3, consts: [[1, "minori-section"], [1, "section-title"], [1, "section-intro"], [3, "nome", "specieClasse", "descrizione", "ruolo", "immagine", 4, "ngFor", "ngForOf"], [3, "nome", "specieClasse", "descrizione", "ruolo", "immagine"]], template: function MinoriComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h2", 1);
      \u0275\u0275text(2, " Avversari e antagonisti ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, " Fazioni e nemici affrontati nel corso della campagna: ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, MinoriComponent_app_personaggio_card_5_Template, 1, 5, "app-personaggio-card", 3);
      \u0275\u0275pipe(6, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 1, ctx.personaggi$));
    }
  }, dependencies: [CommonModule, NgForOf, PersonaggioCardComponent, AsyncPipe], styles: ["\n\n.personaggi-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  margin-bottom: 2rem;\n  color: var(--accent);\n}\n.npc-minori-section[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n.section-title[_ngcontent-%COMP%] {\n  color: #e6c36f;\n  margin-bottom: 10px;\n}\n.section-intro[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  color: #d0d4e0;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.npc-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: rgba(15, 20, 35, 0.85);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.npc-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #3f5fa8;\n  color: white;\n}\n.npc-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.npc-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  text-align: left;\n}\n.npc-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(255, 255, 255, 0.04);\n}\n.npc-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(230, 195, 111, 0.08);\n}\n/*# sourceMappingURL=minori.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinoriComponent, [{
    type: Component,
    args: [{ selector: "app-minori", standalone: true, imports: [CommonModule, PersonaggioCardComponent], template: '<section class="minori-section">\n\n  <h2 class="section-title">\n    Avversari e antagonisti\n  </h2>\n\n  <p class="section-intro">\n    Fazioni e nemici affrontati nel corso della campagna:\n  </p>\n\n  <app-personaggio-card\n    *ngFor="let p of personaggi$ | async"\n    [nome]="p.nome"\n    [specieClasse]="p.specieClasse"\n    [descrizione]="p.descrizione"\n    [ruolo]="p.ruolo"\n    [immagine]="p.immagine">\n  </app-personaggio-card>\n\n</section>\n', styles: ["/* src/app/features/public/campagne/discesa-averno/personaggi/minori/minori.component.css */\n.personaggi-section {\n  margin-top: 2rem;\n}\n.section-title {\n  font-size: 1.6rem;\n  margin-bottom: 2rem;\n  color: var(--accent);\n}\n.npc-minori-section {\n  margin-top: 60px;\n}\n.section-title {\n  color: #e6c36f;\n  margin-bottom: 10px;\n}\n.section-intro {\n  margin-bottom: 25px;\n  color: #d0d4e0;\n}\n.table-wrapper {\n  overflow-x: auto;\n}\n.npc-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: rgba(15, 20, 35, 0.85);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.npc-table thead {\n  background: #3f5fa8;\n  color: white;\n}\n.npc-table th,\n.npc-table td {\n  padding: 14px 18px;\n  text-align: left;\n}\n.npc-table tbody tr:nth-child(even) {\n  background: rgba(255, 255, 255, 0.04);\n}\n.npc-table tbody tr:hover {\n  background: rgba(230, 195, 111, 0.08);\n}\n/*# sourceMappingURL=minori.component.css.map */\n"] }]
  }], () => [{ type: CampagnaDataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MinoriComponent, { className: "MinoriComponent", filePath: "src/app/features/public/campagne/discesa-averno/personaggi/minori/minori.component.ts", lineNumber: 14 });
})();

// src/app/features/public/campagne/discesa-averno/personaggi/secondari/secondari.component.ts
function SecondariComponent_app_personaggio_card_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-personaggio-card", 3);
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275property("nome", p_r1.nome)("specieClasse", p_r1.specieClasse)("descrizione", p_r1.descrizione)("ruolo", p_r1.ruolo)("immagine", p_r1.immagine);
  }
}
var SecondariComponent = class _SecondariComponent {
  dati;
  personaggi$;
  constructor(dati) {
    this.dati = dati;
    this.personaggi$ = this.dati.getCardsByCategoria("secondario");
  }
  static \u0275fac = function SecondariComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SecondariComponent)(\u0275\u0275directiveInject(CampagnaDataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SecondariComponent, selectors: [["app-secondari"]], decls: 5, vars: 3, consts: [[1, "alleati-section"], [1, "section-title"], [3, "nome", "specieClasse", "descrizione", "ruolo", "immagine", 4, "ngFor", "ngForOf"], [3, "nome", "specieClasse", "descrizione", "ruolo", "immagine"]], template: function SecondariComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h2", 1);
      \u0275\u0275text(2, " PNG Secondari ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, SecondariComponent_app_personaggio_card_3_Template, 1, 5, "app-personaggio-card", 2);
      \u0275\u0275pipe(4, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 1, ctx.personaggi$));
    }
  }, dependencies: [CommonModule, NgForOf, PersonaggioCardComponent, AsyncPipe], styles: ["\n\n.personaggi-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  margin-bottom: 2rem;\n  color: var(--accent);\n}\n/*# sourceMappingURL=secondari.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SecondariComponent, [{
    type: Component,
    args: [{ selector: "app-secondari", standalone: true, imports: [CommonModule, PersonaggioCardComponent], template: '<section class="alleati-section">\n\n  <h2 class="section-title">\n    PNG Secondari\n  </h2>\n\n  <app-personaggio-card\n    *ngFor="let p of personaggi$ | async"\n    [nome]="p.nome"\n    [specieClasse]="p.specieClasse"\n    [descrizione]="p.descrizione"\n    [ruolo]="p.ruolo"\n    [immagine]="p.immagine">\n  </app-personaggio-card>\n\n</section>\n', styles: ["/* src/app/features/public/campagne/discesa-averno/personaggi/secondari/secondari.component.css */\n.personaggi-section {\n  margin-top: 2rem;\n}\n.section-title {\n  font-size: 1.6rem;\n  margin-bottom: 2rem;\n  color: var(--accent);\n}\n/*# sourceMappingURL=secondari.component.css.map */\n"] }]
  }], () => [{ type: CampagnaDataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SecondariComponent, { className: "SecondariComponent", filePath: "src/app/features/public/campagne/discesa-averno/personaggi/secondari/secondari.component.ts", lineNumber: 14 });
})();

// src/app/features/public/campagne/discesa-averno/personaggi/personaggi-page/personaggi-page.component.ts
var PersonaggiPageComponent = class _PersonaggiPageComponent {
  static \u0275fac = function PersonaggiPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PersonaggiPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PersonaggiPageComponent, selectors: [["app-personaggi-page"]], decls: 11, vars: 0, consts: [[1, "personaggi-page-container"], [1, "page-title"], ["id", "principali"], ["id", "alleati"], ["id", "secondari"], ["id", "minori"]], template: function PersonaggiPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, " Personaggi \u2013 Le Cronache dell\u2019Averno ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "section", 2);
      \u0275\u0275element(4, "app-principali");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "section", 3);
      \u0275\u0275element(6, "app-alleati");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "section", 4);
      \u0275\u0275element(8, "app-secondari");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "section", 5);
      \u0275\u0275element(10, "app-minori");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [CommonModule, PrincipaliComponent, AlleatiComponent, MinoriComponent, SecondariComponent], styles: ['\n\n.personaggi-page-container[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 3rem 2rem;\n  color: #f1e6c8;\n}\n.personaggi-page-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.65);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 0;\n}\n.personaggi-page-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  text-align: center;\n  margin-bottom: 3rem;\n  color: #d4af37;\n  letter-spacing: 1px;\n  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);\n}\n/*# sourceMappingURL=personaggi-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonaggiPageComponent, [{
    type: Component,
    args: [{ selector: "app-personaggi-page", standalone: true, imports: [CommonModule, PrincipaliComponent, AlleatiComponent, MinoriComponent, SecondariComponent], template: '<div class="personaggi-page-container">\n\n  <h1 class="page-title">\n    Personaggi \u2013 Le Cronache dell\u2019Averno\n  </h1>\n\n  <section id="principali">\n    <app-principali></app-principali>\n  </section>\n\n  <section id="alleati">\n    <app-alleati></app-alleati>\n  </section>\n\n  <section id="secondari">\n    <app-secondari></app-secondari>\n  </section>\n\n  <section id="minori">\n    <!-- npc minori -->\n    <app-minori></app-minori>\n  </section>\n\n<!--  <section id="ruoli">-->\n<!--    &lt;!&ndash; ruoli narrativi &ndash;&gt;-->\n<!--  </section>-->\n\n</div>\n', styles: ['/* src/app/features/public/campagne/discesa-averno/personaggi/personaggi-page/personaggi-page.component.css */\n.personaggi-page-container {\n  position: relative;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 3rem 2rem;\n  color: #f1e6c8;\n}\n.personaggi-page-container::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.65);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 0;\n}\n.personaggi-page-container > * {\n  position: relative;\n  z-index: 1;\n}\n.page-title {\n  font-size: 2.3rem;\n  text-align: center;\n  margin-bottom: 3rem;\n  color: #d4af37;\n  letter-spacing: 1px;\n  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);\n}\n/*# sourceMappingURL=personaggi-page.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersonaggiPageComponent, { className: "PersonaggiPageComponent", filePath: "src/app/features/public/campagne/discesa-averno/personaggi/personaggi-page/personaggi-page.component.ts", lineNumber: 16 });
})();
export {
  PersonaggiPageComponent
};
//# sourceMappingURL=chunk-M35NAN4R.js.map
