import {
  RouterLink,
  RouterModule
} from "./chunk-7BCSRJIT.js";
import "./chunk-K4BMEWWG.js";
import "./chunk-DPMPS3AG.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-BVPN5UAK.js";

// src/app/features/public/campagne/campagne.component.ts
var _c0 = () => ["/campagne", "discesa-averno"];
var CampagneComponent = class _CampagneComponent {
  test() {
    console.log("Campagne Component Test");
  }
  static \u0275fac = function CampagneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CampagneComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CampagneComponent, selectors: [["app-campagne"]], decls: 24, vars: 2, consts: [[1, "campaign-section"], [1, "campaign-card"], [1, "campaign-header"], [1, "campaign-content"], [1, "campaign-text"], [1, "intro"], [1, "final"], [1, "chronicles-button", 3, "click", "routerLink"], [1, "campaign-party"], ["src", "/assets/data/ikaros/campagne/discesa-averno/avernus-party.jpg", "alt", "Party Discesa nell'Averno"], [1, "campaign-footer"], ["routerLink", "/masters/ikaros"]], template: function CampagneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275text(4, "Discesa nell'Averno");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "p", 5);
      \u0275\u0275text(8, " Non c\u2019\xE8 eroe senza colpa, n\xE9 inferno senza memoria. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, " Baldur\u2019s Gate \xE8 sull\u2019orlo del caos, logorata da vizi e ambizione. Le voci parlano di Elturel, la citt\xE0 perduta, trascinata gi\xF9 in un lampo di luce rovesciata. Le autorit\xE0 negano, i chierici tacciono, e il popolo trema. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p");
      \u0275\u0275text(12, " Ma la verit\xE0 \xE8 pi\xF9 terribile di quanto chiunque osi ammettere: l\u2019Averno ha aperto le sue porte, e presto le fiamme lambiranno anche la superficie. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 6);
      \u0275\u0275text(14, " La discesa \xE8 cominciata\u2026 Benvenuti all\u2019Inferno. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 6)(16, "a", 7);
      \u0275\u0275listener("click", function CampagneComponent_Template_a_click_16_listener() {
        return ctx.test();
      });
      \u0275\u0275text(17, " Vai alle cronache ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 8);
      \u0275\u0275element(19, "img", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 10);
      \u0275\u0275text(21, " Master: ");
      \u0275\u0275elementStart(22, "a", 11);
      \u0275\u0275text(23, "@Ikaros");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c0));
    }
  }, dependencies: [RouterModule, RouterLink], styles: ['\n\n.campaign-section[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 80px 20px;\n  background-image: url(/assets/avernus-hero.jpg);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: flex;\n  justify-content: center;\n}\n.campaign-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(rgba(35, 25, 18, 0.75), rgba(20, 20, 10, 0.90));\n  z-index: 0;\n  pointer-events: none;\n}\n.campaign-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n.campaign-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 1100px;\n  background: linear-gradient(rgba(10, 12, 22, 0.75), rgba(10, 12, 22, 0.85));\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 18px;\n  overflow: hidden;\n  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);\n}\n.campaign-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  transition: 0.4s ease;\n}\n.campaign-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  font-size: 2rem;\n  color: #e6c36f;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.campaign-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 40px;\n  padding: 40px;\n  align-items: center;\n}\n.campaign-text[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #d0d4e0;\n  line-height: 1.8;\n  font-size: 0.95rem;\n}\n.campaign-text[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #c9a23f;\n  margin-bottom: 20px;\n}\n.campaign-text[_ngcontent-%COMP%]   .final[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  font-weight: 600;\n  color: #f0d27a;\n}\n.campaign-party[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.campaign-party[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 12px;\n}\n.campaign-footer[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  background: rgba(13, 17, 26, 0.65);\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n  text-align: right;\n}\n.campaign-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #c9a23f;\n  font-weight: 600;\n  text-decoration: none;\n}\n.campaign-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.chronicles-button[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  display: inline-block;\n  padding: 10px 18px;\n  background:\n    linear-gradient(\n      45deg,\n      #c9a23f,\n      #e6c36f);\n  color: #111;\n  border-radius: 8px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.chronicles-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(201, 162, 63, 0.4);\n}\n/*# sourceMappingURL=campagne.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CampagneComponent, [{
    type: Component,
    args: [{ selector: "app-campagne", standalone: true, imports: [RouterModule], template: `<div class="campaign-section">

  <div class="campaign-card">

    <div class="campaign-header">
      <h2>Discesa nell'Averno</h2>
    </div>

    <div class="campaign-content">

      <div class="campaign-text">
        <p class="intro">
          Non c\u2019\xE8 eroe senza colpa, n\xE9 inferno senza memoria.
        </p>

        <p>
          Baldur\u2019s Gate \xE8 sull\u2019orlo del caos, logorata da vizi e ambizione.
          Le voci parlano di Elturel, la citt\xE0 perduta, trascinata gi\xF9 in un lampo
          di luce rovesciata. Le autorit\xE0 negano, i chierici tacciono,
          e il popolo trema.
        </p>

        <p>
          Ma la verit\xE0 \xE8 pi\xF9 terribile di quanto chiunque osi ammettere:
          l\u2019Averno ha aperto le sue porte, e presto le fiamme lambiranno
          anche la superficie.
        </p>

        <p class="final">
          La discesa \xE8 cominciata\u2026 Benvenuti all\u2019Inferno.
        </p>

        <p class="final">
          <a [routerLink]="['/campagne', 'discesa-averno']"
             (click)="test()"
             class="chronicles-button">
            Vai alle cronache
          </a>
        </p>
      </div>

      <div class="campaign-party">
        <img src="/assets/data/ikaros/campagne/discesa-averno/avernus-party.jpg" alt="Party Discesa nell'Averno">
      </div>

    </div>

    <div class="campaign-footer">
      Master:
      <a routerLink="/masters/ikaros">&#64;Ikaros</a>
    </div>

  </div>

</div>
`, styles: ['/* src/app/features/public/campagne/campagne.component.css */\n.campaign-section {\n  width: 100%;\n  padding: 80px 20px;\n  background-image: url(/assets/avernus-hero.jpg);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: flex;\n  justify-content: center;\n}\n.campaign-section::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(rgba(35, 25, 18, 0.75), rgba(20, 20, 10, 0.90));\n  z-index: 0;\n  pointer-events: none;\n}\n.campaign-section {\n  position: relative;\n}\n.campaign-card {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 1100px;\n  background: linear-gradient(rgba(10, 12, 22, 0.75), rgba(10, 12, 22, 0.85));\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 18px;\n  overflow: hidden;\n  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);\n}\n.campaign-card:hover {\n  transform: translateY(-4px);\n  transition: 0.4s ease;\n}\n.campaign-header {\n  text-align: center;\n  padding: 30px;\n  font-size: 2rem;\n  color: #e6c36f;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.campaign-content {\n  display: flex;\n  gap: 40px;\n  padding: 40px;\n  align-items: center;\n}\n.campaign-text {\n  flex: 1;\n  color: #d0d4e0;\n  line-height: 1.8;\n  font-size: 0.95rem;\n}\n.campaign-text .intro {\n  font-style: italic;\n  color: #c9a23f;\n  margin-bottom: 20px;\n}\n.campaign-text .final {\n  margin-top: 25px;\n  font-weight: 600;\n  color: #f0d27a;\n}\n.campaign-party {\n  flex: 1;\n}\n.campaign-party img {\n  width: 100%;\n  border-radius: 12px;\n}\n.campaign-footer {\n  padding: 20px 30px;\n  background: rgba(13, 17, 26, 0.65);\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n  text-align: right;\n}\n.campaign-footer a {\n  color: #c9a23f;\n  font-weight: 600;\n  text-decoration: none;\n}\n.campaign-footer a:hover {\n  text-decoration: underline;\n}\n.chronicles-button {\n  margin-top: 25px;\n  display: inline-block;\n  padding: 10px 18px;\n  background:\n    linear-gradient(\n      45deg,\n      #c9a23f,\n      #e6c36f);\n  color: #111;\n  border-radius: 8px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.chronicles-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(201, 162, 63, 0.4);\n}\n/*# sourceMappingURL=campagne.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CampagneComponent, { className: "CampagneComponent", filePath: "src/app/features/public/campagne/campagne.component.ts", lineNumber: 11 });
})();
export {
  CampagneComponent
};
//# sourceMappingURL=chunk-EGWSDKYB.js.map
