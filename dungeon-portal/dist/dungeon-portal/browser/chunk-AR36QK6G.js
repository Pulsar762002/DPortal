import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-BVPN5UAK.js";

// src/app/features/public/land/land.component.ts
var LandComponent = class _LandComponent {
  static \u0275fac = function LandComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandComponent, selectors: [["app-land"]], decls: 2, vars: 0, template: function LandComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "land works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandComponent, [{
    type: Component,
    args: [{ selector: "app-land", imports: [], template: "<p>land works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandComponent, { className: "LandComponent", filePath: "src/app/features/public/land/land.component.ts", lineNumber: 9 });
})();
export {
  LandComponent
};
//# sourceMappingURL=chunk-AR36QK6G.js.map
