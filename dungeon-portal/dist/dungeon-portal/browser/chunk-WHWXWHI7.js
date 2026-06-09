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
  catchError,
  map,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BVPN5UAK.js";

// src/app/features/public/campagne/discesa-averno/grafo/grafo.component.ts
function GrafoComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275element(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.colore(v_r1.cat));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", v_r1.label, " ");
  }
}
function GrafoComponent_ng_container_7_div_1__svg_line_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 15);
  }
  if (rf & 2) {
    const e_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("spento", !ctx_r1.arcoAttivo(e_r3));
    \u0275\u0275attribute("x1", e_r3.a.x)("y1", e_r3.a.y)("x2", e_r3.b.x)("y2", e_r3.b.y);
  }
}
function GrafoComponent_ng_container_7_div_1__svg_g_3__svg_text_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "text", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("x", n_r5.x)("y", n_r5.y - n_r5.r - 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", n_r5.nome, " ");
  }
}
function GrafoComponent_ng_container_7_div_1__svg_g_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g", 16);
    \u0275\u0275listener("mouseenter", function GrafoComponent_ng_container_7_div_1__svg_g_3_Template_g_mouseenter_0_listener() {
      const n_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onHover(n_r5));
    })("mouseleave", function GrafoComponent_ng_container_7_div_1__svg_g_3_Template_g_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onHover(null));
    });
    \u0275\u0275elementStart(1, "circle")(2, "title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, GrafoComponent_ng_container_7_div_1__svg_g_3__svg_text_4_Template, 2, 3, "text", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("spento", !ctx_r1.nodoAttivo(n_r5.id));
    \u0275\u0275advance();
    \u0275\u0275attribute("cx", n_r5.x)("cy", n_r5.y)("r", n_r5.r)("fill", ctx_r1.colore(n_r5.categoria));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r5.nome);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mostraLabel(n_r5));
  }
}
function GrafoComponent_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275template(2, GrafoComponent_ng_container_7_div_1__svg_line_2_Template, 1, 6, "line", 13)(3, GrafoComponent_ng_container_7_div_1__svg_g_3_Template, 5, 8, "g", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("viewBox", ctx_r1.viewBox);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.archi);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.nodi);
  }
}
function GrafoComponent_ng_container_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, " Impossibile caricare i dati del grafo. Riprova pi\xF9 tardi. ");
    \u0275\u0275elementEnd();
  }
}
function GrafoComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, GrafoComponent_ng_container_7_div_1_Template, 4, 3, "div", 10)(2, GrafoComponent_ng_container_7_ng_template_2_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const stato_r6 = ctx.ngIf;
    const erroreTpl_r7 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stato_r6 === "ok")("ngIfElse", erroreTpl_r7);
  }
}
function GrafoComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "Caricamento del grafo\u2026");
    \u0275\u0275elementEnd();
  }
}
var GrafoComponent = class _GrafoComponent {
  dati;
  nodi = [];
  archi = [];
  viewBox = "0 0 1000 1000";
  /** 'ok' = grafo pronto, 'err' = errore di caricamento; null (nessun emit) = in caricamento. */
  stato$;
  hoveredId = null;
  vicini = /* @__PURE__ */ new Set();
  colori = {
    party: "#f4a261",
    alleato: "#2a9d8f",
    secondario: "#e9c46a",
    avversario: "#e63946"
  };
  legenda = [
    { cat: "party", label: "Party (PG)" },
    { cat: "alleato", label: "Alleati" },
    { cat: "secondario", label: "Secondari" },
    { cat: "avversario", label: "Avversari" }
  ];
  constructor(dati) {
    this.dati = dati;
  }
  ngOnInit() {
    this.stato$ = this.dati.getPersonaggi().pipe(map((personaggi) => {
      this.costruisciGrafo(personaggi);
      this.layoutForzaDiretta();
      this.adattaViewBox();
      return "ok";
    }), catchError((err) => {
      console.error("Grafo: errore nel caricamento di personaggi.json", err);
      return of("err");
    }));
  }
  colore(cat) {
    return this.colori[cat] ?? "#888";
  }
  // ---------- costruzione grafo ----------
  costruisciGrafo(personaggi) {
    const indice = /* @__PURE__ */ new Map();
    this.nodi = personaggi.map((p, i) => {
      indice.set(p.id, i);
      return {
        id: p.id,
        nome: p.nome,
        categoria: p.categoria,
        x: 0,
        y: 0,
        r: 6,
        grado: 0
      };
    });
    const visti = /* @__PURE__ */ new Set();
    const archi = [];
    for (const p of personaggi) {
      const ai = indice.get(p.id);
      for (const c of p.correlazioni ?? []) {
        const bi = indice.get(c.personaggio);
        if (bi === void 0 || bi === ai) {
          continue;
        }
        const key = ai < bi ? `${ai}|${bi}` : `${bi}|${ai}`;
        if (visti.has(key)) {
          continue;
        }
        visti.add(key);
        const a = this.nodi[ai];
        const b = this.nodi[bi];
        archi.push({ a, b, ai, bi, tipo: c.tipo });
        a.grado++;
        b.grado++;
      }
    }
    this.archi = archi;
    for (const n of this.nodi) {
      n.r = 6 + Math.min(n.grado, 16) * 1 + (n.categoria === "party" ? 3 : 0);
    }
  }
  // ---------- layout Fruchterman-Reingold (deterministico) ----------
  // Simula solo i nodi CON legami (clampati nel riquadro, così riempiono il
  // pannello); i nodi isolati vengono disposti in una fascia ordinata sotto.
  layoutForzaDiretta() {
    const W = 1800;
    const H = 1100;
    const cx = W / 2;
    const cy = H / 2;
    const margine = 50;
    const sim = this.nodi.filter((n) => n.grado > 0);
    const isolati = this.nodi.filter((n) => n.grado === 0);
    const N = sim.length;
    let seed = 1337;
    const rnd = () => {
      seed = seed * 1103515245 + 12345 & 2147483647;
      return seed / 2147483647;
    };
    if (N) {
      const k = Math.sqrt(W * H / N) * 0.85;
      const idx = /* @__PURE__ */ new Map();
      sim.forEach((n, i) => {
        idx.set(n, i);
        const ang = i / N * Math.PI * 2;
        const rad = 280 + rnd() * 260;
        n.x = cx + Math.cos(ang) * rad + (rnd() - 0.5) * 50;
        n.y = cy + Math.sin(ang) * rad + (rnd() - 0.5) * 50;
      });
      const iters = 420;
      let t = W * 0.12;
      const dx = new Array(N).fill(0);
      const dy = new Array(N).fill(0);
      for (let it = 0; it < iters; it++) {
        for (let i = 0; i < N; i++) {
          dx[i] = 0;
          dy[i] = 0;
        }
        for (let i = 0; i < N; i++) {
          for (let j = i + 1; j < N; j++) {
            let vx = sim[i].x - sim[j].x;
            let vy = sim[i].y - sim[j].y;
            const d = Math.sqrt(vx * vx + vy * vy) || 0.01;
            const f = k * k / d;
            vx = vx / d * f;
            vy = vy / d * f;
            dx[i] += vx;
            dy[i] += vy;
            dx[j] -= vx;
            dy[j] -= vy;
          }
        }
        for (const e of this.archi) {
          const i = idx.get(e.a);
          const j = idx.get(e.b);
          let vx = sim[i].x - sim[j].x;
          let vy = sim[i].y - sim[j].y;
          const d = Math.sqrt(vx * vx + vy * vy) || 0.01;
          const f = d * d / k;
          vx = vx / d * f;
          vy = vy / d * f;
          dx[i] -= vx;
          dy[i] -= vy;
          dx[j] += vx;
          dy[j] += vy;
        }
        for (let i = 0; i < N; i++) {
          dx[i] += (cx - sim[i].x) * 0.035;
          dy[i] += (cy - sim[i].y) * 0.035;
        }
        for (let i = 0; i < N; i++) {
          const d = Math.sqrt(dx[i] * dx[i] + dy[i] * dy[i]) || 0.01;
          const cap = Math.min(d, t);
          sim[i].x = Math.max(margine, Math.min(W - margine, sim[i].x + dx[i] / d * cap));
          sim[i].y = Math.max(margine, Math.min(H - margine, sim[i].y + dy[i] / d * cap));
        }
        t *= 0.975;
      }
    }
    if (isolati.length) {
      let minX = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;
      for (const n of sim) {
        minX = Math.min(minX, n.x);
        maxX = Math.max(maxX, n.x);
        maxY = Math.max(maxY, n.y);
      }
      if (!sim.length) {
        minX = margine;
        maxX = W - margine;
        maxY = cy;
      }
      const perRiga = Math.max(6, Math.ceil(Math.sqrt(isolati.length) * 2));
      const gapX = Math.max((maxX - minX) / (perRiga - 1 || 1), 90);
      const top = maxY + 90;
      isolati.forEach((n, i) => {
        n.x = minX + i % perRiga * gapX;
        n.y = top + Math.floor(i / perRiga) * 60;
      });
    }
  }
  adattaViewBox() {
    if (!this.nodi.length) {
      return;
    }
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (const n of this.nodi) {
      minX = Math.min(minX, n.x - n.r);
      maxX = Math.max(maxX, n.x + n.r);
      minY = Math.min(minY, n.y - n.r);
      maxY = Math.max(maxY, n.y + n.r);
    }
    const pad = 50;
    const x = minX - pad;
    const y = minY - pad;
    const w = maxX - minX + pad * 2;
    const h = maxY - minY + pad * 2;
    this.viewBox = `${x.toFixed(1)} ${y.toFixed(1)} ${w.toFixed(1)} ${h.toFixed(1)}`;
  }
  // ---------- interazione ----------
  onHover(n) {
    this.hoveredId = n ? n.id : null;
    this.vicini.clear();
    if (n) {
      for (const e of this.archi) {
        if (e.a.id === n.id) {
          this.vicini.add(e.b.id);
        } else if (e.b.id === n.id) {
          this.vicini.add(e.a.id);
        }
      }
    }
  }
  nodoAttivo(id) {
    return !this.hoveredId || this.hoveredId === id || this.vicini.has(id);
  }
  arcoAttivo(e) {
    return !this.hoveredId || e.a.id === this.hoveredId || e.b.id === this.hoveredId;
  }
  mostraLabel(n) {
    return n.categoria === "party" || n.grado >= 8 || n.grado === 0 || this.hoveredId === n.id || this.vicini.has(n.id);
  }
  static \u0275fac = function GrafoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GrafoComponent)(\u0275\u0275directiveInject(CampagnaDataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GrafoComponent, selectors: [["app-grafo"]], decls: 11, vars: 5, consts: [["caricamento", ""], ["erroreTpl", ""], [1, "grafo-page"], [1, "page-title"], [1, "grafo-intro"], [1, "grafo-legenda"], ["class", "voce", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "voce"], [1, "pallino"], ["class", "grafo-wrapper", 4, "ngIf", "ngIfElse"], [1, "grafo-wrapper"], ["preserveAspectRatio", "xMidYMid meet", 1, "grafo-svg"], ["class", "arco", 3, "spento", 4, "ngFor", "ngForOf"], ["class", "nodo", 3, "spento", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "arco"], [1, "nodo", 3, "mouseenter", "mouseleave"], ["class", "etichetta", 4, "ngIf"], [1, "etichetta"], [1, "grafo-loading"]], template: function GrafoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "h1", 3);
      \u0275\u0275text(2, " Grafo dei legami \u2013 Le Cronache dell\u2019Averno ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 4);
      \u0275\u0275text(4, " Ogni nodo \xE8 un personaggio, ogni linea un legame. Passa il mouse su un nodo per evidenziarne le relazioni. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275template(6, GrafoComponent_span_6_Template, 3, 3, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, GrafoComponent_ng_container_7_Template, 4, 2, "ng-container", 7);
      \u0275\u0275pipe(8, "async");
      \u0275\u0275template(9, GrafoComponent_ng_template_9_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const caricamento_r8 = \u0275\u0275reference(10);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.legenda);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 3, ctx.stato$))("ngIfElse", caricamento_r8);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe], styles: ["\n\n.grafo-page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 3rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.grafo-intro[_ngcontent-%COMP%] {\n  text-align: center;\n  opacity: 0.8;\n  margin: 0 auto 1rem;\n  max-width: 640px;\n}\n.grafo-legenda[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.2rem;\n  justify-content: center;\n  margin-bottom: 1rem;\n  font-size: 0.9rem;\n}\n.grafo-legenda[_ngcontent-%COMP%]   .voce[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.grafo-legenda[_ngcontent-%COMP%]   .pallino[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  display: inline-block;\n}\n.grafo-wrapper[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 50% 38%,\n      #20242e,\n      #14161c);\n  border: 1px solid #2c2f3a;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.grafo-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  display: block;\n}\n.arco[_ngcontent-%COMP%] {\n  stroke: #6b7280;\n  stroke-width: 1.6;\n  stroke-opacity: 0.35;\n  transition: stroke-opacity 0.15s ease;\n}\n.arco.spento[_ngcontent-%COMP%] {\n  stroke-opacity: 0.05;\n}\n.nodo[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: opacity 0.15s ease;\n}\n.nodo.spento[_ngcontent-%COMP%] {\n  opacity: 0.18;\n}\n.nodo[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #0d0f14;\n  stroke-width: 1.2;\n}\n.etichetta[_ngcontent-%COMP%] {\n  fill: #f1ede2;\n  font-size: 15px;\n  text-anchor: middle;\n  paint-order: stroke;\n  stroke: #11131a;\n  stroke-width: 3.5px;\n  stroke-linejoin: round;\n  pointer-events: none;\n}\n.grafo-loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=grafo.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GrafoComponent, [{
    type: Component,
    args: [{ selector: "app-grafo", standalone: true, imports: [CommonModule], template: `<div class="grafo-page">

  <h1 class="page-title">
    Grafo dei legami \u2013 Le Cronache dell\u2019Averno
  </h1>

  <p class="grafo-intro">
    Ogni nodo \xE8 un personaggio, ogni linea un legame. Passa il mouse su un nodo
    per evidenziarne le relazioni.
  </p>

  <div class="grafo-legenda">
    <span class="voce" *ngFor="let v of legenda">
      <span class="pallino" [style.background]="colore(v.cat)"></span>
      {{ v.label }}
    </span>
  </div>

  <ng-container *ngIf="(stato$ | async) as stato; else caricamento">

    <div class="grafo-wrapper" *ngIf="stato === 'ok'; else erroreTpl">

      <svg
        [attr.viewBox]="viewBox"
        class="grafo-svg"
        preserveAspectRatio="xMidYMid meet">

        <!-- archi -->
        <line
          *ngFor="let e of archi"
          class="arco"
          [class.spento]="!arcoAttivo(e)"
          [attr.x1]="e.a.x" [attr.y1]="e.a.y"
          [attr.x2]="e.b.x" [attr.y2]="e.b.y">
        </line>

        <!-- nodi -->
        <g
          *ngFor="let n of nodi"
          class="nodo"
          [class.spento]="!nodoAttivo(n.id)"
          (mouseenter)="onHover(n)"
          (mouseleave)="onHover(null)">

          <circle
            [attr.cx]="n.x" [attr.cy]="n.y" [attr.r]="n.r"
            [attr.fill]="colore(n.categoria)">
            <title>{{ n.nome }}</title>
          </circle>

          <text
            *ngIf="mostraLabel(n)"
            class="etichetta"
            [attr.x]="n.x"
            [attr.y]="n.y - n.r - 3">
            {{ n.nome }}
          </text>

        </g>

      </svg>

    </div>

    <ng-template #erroreTpl>
      <p class="grafo-loading">
        Impossibile caricare i dati del grafo. Riprova pi\xF9 tardi.
      </p>
    </ng-template>

  </ng-container>

  <ng-template #caricamento>
    <p class="grafo-loading">Caricamento del grafo\u2026</p>
  </ng-template>

</div>
`, styles: ["/* src/app/features/public/campagne/discesa-averno/grafo/grafo.component.css */\n.grafo-page {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 3rem;\n}\n.page-title {\n  text-align: center;\n}\n.grafo-intro {\n  text-align: center;\n  opacity: 0.8;\n  margin: 0 auto 1rem;\n  max-width: 640px;\n}\n.grafo-legenda {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.2rem;\n  justify-content: center;\n  margin-bottom: 1rem;\n  font-size: 0.9rem;\n}\n.grafo-legenda .voce {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.grafo-legenda .pallino {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  display: inline-block;\n}\n.grafo-wrapper {\n  background:\n    radial-gradient(\n      circle at 50% 38%,\n      #20242e,\n      #14161c);\n  border: 1px solid #2c2f3a;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.grafo-svg {\n  width: 100%;\n  height: 80vh;\n  display: block;\n}\n.arco {\n  stroke: #6b7280;\n  stroke-width: 1.6;\n  stroke-opacity: 0.35;\n  transition: stroke-opacity 0.15s ease;\n}\n.arco.spento {\n  stroke-opacity: 0.05;\n}\n.nodo {\n  cursor: pointer;\n  transition: opacity 0.15s ease;\n}\n.nodo.spento {\n  opacity: 0.18;\n}\n.nodo circle {\n  stroke: #0d0f14;\n  stroke-width: 1.2;\n}\n.etichetta {\n  fill: #f1ede2;\n  font-size: 15px;\n  text-anchor: middle;\n  paint-order: stroke;\n  stroke: #11131a;\n  stroke-width: 3.5px;\n  stroke-linejoin: round;\n  pointer-events: none;\n}\n.grafo-loading {\n  text-align: center;\n  padding: 3rem;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=grafo.component.css.map */\n"] }]
  }], () => [{ type: CampagnaDataService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GrafoComponent, { className: "GrafoComponent", filePath: "src/app/features/public/campagne/discesa-averno/grafo/grafo.component.ts", lineNumber: 32 });
})();
export {
  GrafoComponent
};
//# sourceMappingURL=chunk-WHWXWHI7.js.map
