import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-BVPN5UAK.js";

// src/app/features/public/home/home.component.ts
var HomeComponent = class _HomeComponent {
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 11, vars: 0, consts: [[1, "hero-band"], [1, "hero-container"], [1, "hero-image"], ["src", "assets/data/ikaros/campagne/discesa-averno/portal-hero_landscape.png", "alt", "Dungeon Portal"], [1, "hero-content"], [1, "subtitle"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275domElement(3, "img", 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 4)(5, "p", 5);
      \u0275\u0275text(6, "Benvenuto nel portale Foundry di");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "h1");
      \u0275\u0275text(8, "Dungeon Portal");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "p");
      \u0275\u0275text(10, " Qui potrai partecipare alle campagne dei nostri Master, esplorare mondi epici e vivere avventure leggendarie. ");
      \u0275\u0275domElementEnd()()()();
    }
  }, styles: ["\n\n.hero-band[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 100px 0;\n  background:\n    linear-gradient(\n      to right,\n      rgba(15, 17, 21, 0.95),\n      rgba(15, 17, 21, 0.80),\n      rgba(15, 17, 21, 0.95));\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.hero-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  gap: 80px;\n  align-items: center;\n  padding: 0 80px;\n}\n.hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 24px;\n  box-shadow: 0 50px 120px rgba(0, 0, 0, 0.75);\n}\n.hero-content[_ngcontent-%COMP%] {\n  padding: 60px;\n  border-radius: 20px;\n  background: rgba(22, 26, 34, 0.92);\n  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.7), inset 0 0 40px rgba(0, 0, 0, 0.4);\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin: 0 0 16px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--accent);\n  margin-bottom: 12px;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.7;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", imports: [], template: '<section class="hero-band">\n  <div class="hero-container">\n\n    <div class="hero-image">\n      <img src="assets/data/ikaros/campagne/discesa-averno/portal-hero_landscape.png" alt="Dungeon Portal">\n    </div>\n\n    <div class="hero-content">\n      <p class="subtitle">Benvenuto nel portale Foundry di</p>\n      <h1>Dungeon Portal</h1>\n      <p>\n        Qui potrai partecipare alle campagne dei nostri Master,\n        esplorare mondi epici e vivere avventure leggendarie.\n      </p>\n    </div>\n\n  </div>\n</section>\n', styles: ["/* src/app/features/public/home/home.component.css */\n.hero-band {\n  width: 100%;\n  padding: 100px 0;\n  background:\n    linear-gradient(\n      to right,\n      rgba(15, 17, 21, 0.95),\n      rgba(15, 17, 21, 0.80),\n      rgba(15, 17, 21, 0.95));\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.hero-container {\n  max-width: 1400px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  gap: 80px;\n  align-items: center;\n  padding: 0 80px;\n}\n.hero-image img {\n  width: 100%;\n  border-radius: 24px;\n  box-shadow: 0 50px 120px rgba(0, 0, 0, 0.75);\n}\n.hero-content {\n  padding: 60px;\n  border-radius: 20px;\n  background: rgba(22, 26, 34, 0.92);\n  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.7), inset 0 0 40px rgba(0, 0, 0, 0.4);\n}\n.hero-content h1 {\n  font-size: 3rem;\n  margin: 0 0 16px;\n}\n.subtitle {\n  color: var(--accent);\n  margin-bottom: 12px;\n}\n.hero-content p {\n  line-height: 1.7;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=home.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/public/home/home.component.ts", lineNumber: 10 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-4AIMMXR6.js.map
