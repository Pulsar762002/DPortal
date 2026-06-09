import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-BVPN5UAK.js";

// src/app/features/public/masters/masters.component.ts
var MastersComponent = class _MastersComponent {
  static \u0275fac = function MastersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MastersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MastersComponent, selectors: [["app-masters"]], decls: 2, vars: 0, template: function MastersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "masters works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MastersComponent, [{
    type: Component,
    args: [{ selector: "app-masters", imports: [], template: "<p>masters works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MastersComponent, { className: "MastersComponent", filePath: "src/app/features/public/masters/masters.component.ts", lineNumber: 9 });
})();
export {
  MastersComponent
};
//# sourceMappingURL=chunk-IQXF25D4.js.map
