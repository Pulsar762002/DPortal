import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-7BCSRJIT.js";
import "./chunk-K4BMEWWG.js";
import {
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf
} from "./chunk-DPMPS3AG.js";
import {
  ChangeDetectorRef,
  Component,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-BVPN5UAK.js";

// src/app/features/public/campagne/campagne-detail/campagne-detail.component.ts
var _c0 = (a0, a1) => ["/campagne", a0, "sessione", a1];
function CampaignDetailComponent_section_8_ul_3_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 14)(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(3, _c0, ctx_r1.slug, item_r1.sessionNumber));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.sessionNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
  }
}
function CampaignDetailComponent_section_8_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, CampaignDetailComponent_section_8_ul_3_li_1_ng_container_1_Template, 6, 6, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isVisible(item_r1));
  }
}
function CampaignDetailComponent_section_8_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 11);
    \u0275\u0275template(1, CampaignDetailComponent_section_8_ul_3_li_1_Template, 2, 1, "li", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", section_r3.items);
  }
}
function CampaignDetailComponent_section_8_ng_template_4_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.getRoute(item_r4))("fragment", item_r4.fragment);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.label, " ");
  }
}
function CampaignDetailComponent_section_8_ng_template_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, CampaignDetailComponent_section_8_ng_template_4_li_1_ng_container_1_Template, 3, 3, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isVisible(item_r4));
  }
}
function CampaignDetailComponent_section_8_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 17);
    \u0275\u0275template(1, CampaignDetailComponent_section_8_ng_template_4_li_1_Template, 2, 1, "li", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("secondary", section_r3.type === "links");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", section_r3.items);
  }
}
function CampaignDetailComponent_section_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8)(1, "h2", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CampaignDetailComponent_section_8_ul_3_Template, 2, 1, "ul", 10)(4, CampaignDetailComponent_section_8_ng_template_4_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r3 = ctx.$implicit;
    const normalList_r5 = \u0275\u0275reference(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", section_r3.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", section_r3.type === "sessions")("ngIfElse", normalList_r5);
  }
}
var CampaignDetailComponent = class _CampaignDetailComponent {
  route;
  http;
  cdr;
  slug;
  campaign;
  constructor(route, http, cdr) {
    this.route = route;
    this.http = http;
    this.cdr = cdr;
  }
  ngOnInit() {
    console.log("Campaign Component Test");
    this.slug = this.route.snapshot.paramMap.get("slug");
    console.log("Slug:", this.slug);
    this.loadCampaign();
  }
  loadCampaign() {
    this.http.get(`assets/data/ikaros/campagne/${this.slug}/sessioni/elenco-sessioni.json`).subscribe({
      next: (data) => {
        console.log("CAMPAIGN", data);
        this.campaign = __spreadValues({}, data);
        console.log("Title:", this.campaign.title);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error loading campaign detail", err);
      }
    });
  }
  isVisible(item) {
    return item.visible !== false;
  }
  getRoute(item) {
    return [
      "/campagne",
      this.slug,
      ...item.route || []
    ];
  }
  static \u0275fac = function CampaignDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CampaignDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CampaignDetailComponent, selectors: [["app-campaign-detail"]], decls: 9, vars: 3, consts: [["normalList", ""], [1, "campaign-detail-container"], [1, "campaign-card"], [1, "campaign-header"], [1, "campaign-title"], [1, "campaign-description"], [1, "campaign-index"], ["class", "index-section", 4, "ngFor", "ngForOf"], [1, "index-section"], [1, "index-title"], ["class", "index-list sessions-grid", 4, "ngIf", "ngIfElse"], [1, "index-list", "sessions-grid"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "routerLink"], [1, "index-number"], [1, "index-text"], [1, "index-list"], [3, "routerLink", "fragment"]], template: function CampaignDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "header", 3)(3, "h1", 4);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "nav", 6);
      \u0275\u0275template(8, CampaignDetailComponent_section_8_Template, 6, 3, "section", 7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.campaign == null ? null : ctx.campaign.title, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.campaign == null ? null : ctx.campaign.description, " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.campaign == null ? null : ctx.campaign.sections);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ["\n\n.campaign-detail-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 40px auto;\n  padding: 40px 50px;\n  border-radius: 28px;\n  background: linear-gradient(rgba(15, 20, 35, 0.85), rgba(10, 12, 22, 0.92));\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  border: 1px solid rgba(230, 195, 111, 0.15);\n  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.8), inset 0 0 60px rgba(230, 195, 111, 0.04);\n  color: #d0d4e0;\n}\n.campaign-detail-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.9rem;\n  color: #e6c36f;\n  margin-bottom: 20px;\n}\n.campaign-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.campaign-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #e6c36f;\n  margin-bottom: 15px;\n  letter-spacing: 1px;\n}\n.campaign-description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.7;\n  margin-bottom: 20px;\n  color: #cfd3e6;\n  max-width: 800px;\n}\n.campaign-index[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n.index-section[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid rgba(230, 195, 111, 0.12);\n}\n.index-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.index-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  color: #e6c36f;\n  margin-bottom: 15px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.index-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.index-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.index-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  color: #d0d4e0;\n  padding: 4px 0;\n  transition: all 0.25s ease;\n}\n.index-number[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: rgba(230, 195, 111, 0.15);\n  color: #e6c36f;\n  transition: all 0.25s ease;\n}\n.index-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.index-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  transform: translateX(6px);\n}\n.index-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .index-number[_ngcontent-%COMP%] {\n  background: #e6c36f;\n  color: #0f1424;\n  box-shadow: 0 0 12px rgba(230, 195, 111, 0.6);\n}\n.session-content[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 80px 60px;\n  line-height: 2.05;\n  font-size: 1.08rem;\n  color: #e4e7f2;\n}\n.session-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  margin-bottom: 25px;\n  color: #e6c36f;\n  font-weight: 600;\n}\n.session-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.session-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  margin: 35px 0;\n  padding: 20px 30px;\n  border-left: 3px solid #c9a23f;\n  background: rgba(230, 195, 111, 0.05);\n  border-radius: 8px;\n  font-style: italic;\n  color: #f0d27a;\n}\n.sessions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 0.75rem 2rem;\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=campagne-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CampaignDetailComponent, [{
    type: Component,
    args: [{ selector: "app-campaign-detail", standalone: true, imports: [
      CommonModule,
      RouterModule
    ], template: `<div class="campaign-detail-container">

    <div class="campaign-card">

        <!-- HEADER -->
        <header class="campaign-header">

            <h1 class="campaign-title">
                {{ campaign?.title }}
            </h1>

            <p class="campaign-description">
                {{ campaign?.description }}
            </p>

        </header>

        <!-- INDEX -->
        <nav class="campaign-index">

            <section
                    class="index-section"
                    *ngFor="let section of campaign?.sections">

                <h2 class="index-title">
                    {{ section.title }}
                </h2>

                <!-- SESSIONI GRID -->
                <ul
                        *ngIf="section.type === 'sessions'; else normalList"
                        class="index-list sessions-grid">

                    <li
                            *ngFor="let item of section.items">

                        <ng-container
                                *ngIf="isVisible(item)">

                            <a
                                    [routerLink]="[
                                        '/campagne',
                                        slug,
                                        'sessione',
                                        item.sessionNumber
                                    ]">

                                <span class="index-number">
                                    {{ item.sessionNumber }}
                                </span>

                                <span class="index-text">
                                    {{ item.label }}
                                </span>

                            </a>

                        </ng-container>

                    </li>

                </ul>

                <!-- ALTRE LISTE -->
                <ng-template #normalList>

                    <ul
                            class="index-list"
                            [class.secondary]="section.type === 'links'">

                        <li
                                *ngFor="let item of section.items">

                            <ng-container
                                    *ngIf="isVisible(item)">

                                <a
                                        [routerLink]="getRoute(item)"
                                        [fragment]="item.fragment">

                                    {{ item.label }}

                                </a>

                            </ng-container>

                        </li>

                    </ul>

                </ng-template>

            </section>

        </nav>

    </div>

</div>`, styles: ["/* src/app/features/public/campagne/campagne-detail/campagne-detail.component.css */\n.campaign-detail-container {\n  max-width: 1200px;\n  margin: 40px auto;\n  padding: 40px 50px;\n  border-radius: 28px;\n  background: linear-gradient(rgba(15, 20, 35, 0.85), rgba(10, 12, 22, 0.92));\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  border: 1px solid rgba(230, 195, 111, 0.15);\n  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.8), inset 0 0 60px rgba(230, 195, 111, 0.04);\n  color: #d0d4e0;\n}\n.campaign-detail-container h1 {\n  font-size: 1.9rem;\n  color: #e6c36f;\n  margin-bottom: 20px;\n}\n.campaign-header {\n  margin-bottom: 20px;\n}\n.campaign-title {\n  font-size: 2rem;\n  color: #e6c36f;\n  margin-bottom: 15px;\n  letter-spacing: 1px;\n}\n.campaign-description {\n  font-size: 1rem;\n  line-height: 1.7;\n  margin-bottom: 20px;\n  color: #cfd3e6;\n  max-width: 800px;\n}\n.campaign-index {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n.index-section {\n  padding-bottom: 20px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid rgba(230, 195, 111, 0.12);\n}\n.index-section:last-child {\n  border-bottom: none;\n}\n.index-title {\n  font-size: 1.15rem;\n  color: #e6c36f;\n  margin-bottom: 15px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.index-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.index-list li {\n  margin-bottom: 8px;\n}\n.index-list a {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  color: #d0d4e0;\n  padding: 4px 0;\n  transition: all 0.25s ease;\n}\n.index-number {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: rgba(230, 195, 111, 0.15);\n  color: #e6c36f;\n  transition: all 0.25s ease;\n}\n.index-text {\n  font-size: 1rem;\n}\n.index-list a:hover {\n  color: #ffffff;\n  transform: translateX(6px);\n}\n.index-list a:hover .index-number {\n  background: #e6c36f;\n  color: #0f1424;\n  box-shadow: 0 0 12px rgba(230, 195, 111, 0.6);\n}\n.session-content {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 80px 60px;\n  line-height: 2.05;\n  font-size: 1.08rem;\n  color: #e4e7f2;\n}\n.session-content h2 {\n  margin-top: 70px;\n  margin-bottom: 25px;\n  color: #e6c36f;\n  font-weight: 600;\n}\n.session-content p {\n  margin-bottom: 22px;\n}\n.session-content blockquote {\n  margin: 35px 0;\n  padding: 20px 30px;\n  border-left: 3px solid #c9a23f;\n  background: rgba(230, 195, 111, 0.05);\n  border-radius: 8px;\n  font-style: italic;\n  color: #f0d27a;\n}\n.sessions-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 0.75rem 2rem;\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=campagne-detail.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: HttpClient }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CampaignDetailComponent, { className: "CampaignDetailComponent", filePath: "src/app/features/public/campagne/campagne-detail/campagne-detail.component.ts", lineNumber: 34 });
})();
export {
  CampaignDetailComponent
};
//# sourceMappingURL=chunk-XAJQZB6G.js.map
