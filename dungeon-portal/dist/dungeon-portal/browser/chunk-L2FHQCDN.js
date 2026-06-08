import {
  CampagnaDataService
} from "./chunk-V4NX3A5T.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-IY2YVCXA.js";
import {
  Component,
  Input,
  map,
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
} from "./chunk-PXNMCIHO.js";

// src/app/features/public/campagne/discesa-averno/luoghi/luogo-card/luogo-card.component.ts
function LuogoCardComponent_div_1_Template(rf, ctx) {
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
var LuogoCardComponent = class _LuogoCardComponent {
  nome;
  descrizione;
  immagine;
  static \u0275fac = function LuogoCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LuogoCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LuogoCardComponent, selectors: [["app-luogo-card"]], inputs: { nome: "nome", descrizione: "descrizione", immagine: "immagine" }, decls: 10, vars: 3, consts: [[1, "luogo-wrapper"], ["class", "luogo-image", 4, "ngIf"], [1, "luogo-content"], [1, "luogo-nome"], [1, "luogo-info"], [1, "luogo-image"], [3, "src", "alt"]], template: function LuogoCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, LuogoCardComponent_div_1_Template, 2, 2, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "h3", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ul", 4)(6, "li")(7, "strong");
      \u0275\u0275text(8, "Descrizione:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.immagine);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.nome, " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.descrizione, " ");
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.luogo-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  padding: 1.8rem;\n  margin-bottom: 3rem;\n  background: rgba(20, 20, 20, 0.75);\n  border: 1px solid rgba(212, 175, 55, 0.3);\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.luogo-wrapper[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);\n}\n.luogo-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 160px;\n  border-radius: 10px;\n  border: 2px solid rgba(212, 175, 55, 0.5);\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);\n}\n.luogo-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.luogo-nome[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 1.5rem;\n  color: #d4af37;\n  text-shadow: 0 0 8px rgba(212, 175, 55, 0.4);\n}\n.luogo-info[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.luogo-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.9rem;\n  line-height: 1.6;\n  color: #f1e6c8;\n}\n.luogo-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n/*# sourceMappingURL=luogo-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LuogoCardComponent, [{
    type: Component,
    args: [{ selector: "app-luogo-card", standalone: true, imports: [CommonModule], template: '<div class="luogo-wrapper">\n\n  <div class="luogo-image" *ngIf="immagine">\n    <img [src]="immagine" [alt]="nome">\n  </div>\n\n  <div class="luogo-content">\n\n    <h3 class="luogo-nome">\n      {{ nome }}\n    </h3>\n\n    <ul class="luogo-info">\n\n      <li>\n        <strong>Descrizione:</strong>\n        {{ descrizione }}\n      </li>\n\n\n    </ul>\n\n  </div>\n\n</div>\n', styles: ["/* src/app/features/public/campagne/discesa-averno/luoghi/luogo-card/luogo-card.component.css */\n.luogo-wrapper {\n  display: flex;\n  gap: 2rem;\n  padding: 1.8rem;\n  margin-bottom: 3rem;\n  background: rgba(20, 20, 20, 0.75);\n  border: 1px solid rgba(212, 175, 55, 0.3);\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.luogo-wrapper:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);\n}\n.luogo-image img {\n  width: 160px;\n  border-radius: 10px;\n  border: 2px solid rgba(212, 175, 55, 0.5);\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);\n}\n.luogo-content {\n  flex: 1;\n}\n.luogo-nome {\n  margin: 0 0 1rem 0;\n  font-size: 1.5rem;\n  color: #d4af37;\n  text-shadow: 0 0 8px rgba(212, 175, 55, 0.4);\n}\n.luogo-info {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.luogo-info li {\n  margin-bottom: 0.9rem;\n  line-height: 1.6;\n  color: #f1e6c8;\n}\n.luogo-info strong {\n  color: #ffffff;\n}\n/*# sourceMappingURL=luogo-card.component.css.map */\n"] }]
  }], null, { nome: [{
    type: Input
  }], descrizione: [{
    type: Input
  }], immagine: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LuogoCardComponent, { className: "LuogoCardComponent", filePath: "src/app/features/public/campagne/discesa-averno/luoghi/luogo-card/luogo-card.component.ts", lineNumber: 11 });
})();

// src/app/features/public/campagne/discesa-averno/luoghi/luoghi-page/luoghi-page.component.ts
function LuoghiPageComponent_section_3_app_luogo_card_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-luogo-card", 6);
  }
  if (rf & 2) {
    const l_r1 = ctx.$implicit;
    \u0275\u0275property("nome", l_r1.nome)("descrizione", l_r1.descrizione || "\u2014")("immagine", l_r1.immagine || "");
  }
}
function LuoghiPageComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "h2", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LuoghiPageComponent_section_3_app_luogo_card_3_Template, 1, 3, "app-luogo-card", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const gruppo_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Sessione ", gruppo_r2.sessione, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", gruppo_r2.luoghi);
  }
}
var LuoghiPageComponent = class _LuoghiPageComponent {
  dati;
  gruppi$;
  constructor(dati) {
    this.dati = dati;
    this.gruppi$ = this.dati.getLuoghi().pipe(map((luoghi) => this.raggruppaPerSessione(luoghi)));
  }
  raggruppaPerSessione(luoghi) {
    const mappa = /* @__PURE__ */ new Map();
    for (const l of luoghi) {
      const s = l.primaApparizione ?? 0;
      if (!mappa.has(s)) {
        mappa.set(s, []);
      }
      mappa.get(s).push(l);
    }
    return [...mappa.entries()].sort((a, b) => a[0] - b[0]).map(([sessione, gruppo]) => ({ sessione, luoghi: gruppo }));
  }
  static \u0275fac = function LuoghiPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LuoghiPageComponent)(\u0275\u0275directiveInject(CampagnaDataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LuoghiPageComponent, selectors: [["app-luoghi-page"]], decls: 5, vars: 3, consts: [[1, "luoghi-page-container"], [1, "page-title"], ["class", "luoghi-sessione", 4, "ngFor", "ngForOf"], [1, "luoghi-sessione"], [1, "section-title"], [3, "nome", "descrizione", "immagine", 4, "ngFor", "ngForOf"], [3, "nome", "descrizione", "immagine"]], template: function LuoghiPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, " Luoghi \u2013 Le Cronache dell\u2019Averno ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, LuoghiPageComponent_section_3_Template, 4, 2, "section", 2);
      \u0275\u0275pipe(4, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 1, ctx.gruppi$));
    }
  }, dependencies: [CommonModule, NgForOf, LuogoCardComponent, AsyncPipe], styles: ['\n\n.luoghi-page-container[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 3rem 2rem;\n  color: #f1e6c8;\n}\n.luoghi-page-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.65);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 0;\n}\n.luoghi-page-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  text-align: center;\n  margin-bottom: 3rem;\n  color: #d4af37;\n  letter-spacing: 1px;\n  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);\n}\n/*# sourceMappingURL=luoghi-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LuoghiPageComponent, [{
    type: Component,
    args: [{ selector: "app-luoghi-page", standalone: true, imports: [CommonModule, LuogoCardComponent], template: `<div class="luoghi-page-container">

  <h1 class="page-title">
    Luoghi \u2013 Le Cronache dell\u2019Averno
  </h1>

  <section class="luoghi-sessione" *ngFor="let gruppo of gruppi$ | async">

    <h2 class="section-title">
      Sessione {{ gruppo.sessione }}
    </h2>

    <app-luogo-card
      *ngFor="let l of gruppo.luoghi"
      [nome]="l.nome"
      [descrizione]="l.descrizione || '\u2014'"
      [immagine]="l.immagine || ''">
    </app-luogo-card>

  </section>

</div>
`, styles: ['/* src/app/features/public/campagne/discesa-averno/luoghi/luoghi-page/luoghi-page.component.css */\n.luoghi-page-container {\n  position: relative;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 3rem 2rem;\n  color: #f1e6c8;\n}\n.luoghi-page-container::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.65);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 0;\n}\n.luoghi-page-container > * {\n  position: relative;\n  z-index: 1;\n}\n.page-title {\n  font-size: 2.3rem;\n  text-align: center;\n  margin-bottom: 3rem;\n  color: #d4af37;\n  letter-spacing: 1px;\n  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);\n}\n/*# sourceMappingURL=luoghi-page.component.css.map */\n'] }]
  }], () => [{ type: CampagnaDataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LuoghiPageComponent, { className: "LuoghiPageComponent", filePath: "src/app/features/public/campagne/discesa-averno/luoghi/luoghi-page/luoghi-page.component.ts", lineNumber: 20 });
})();
export {
  LuoghiPageComponent
};
//# sourceMappingURL=chunk-L2FHQCDN.js.map
