import {
  ActivatedRoute
} from "./chunk-7BCSRJIT.js";
import {
  DividerBlockComponent,
  ListBlockComponent,
  NoteBlockComponent,
  SceneBlockComponent,
  SpacerBlockComponent,
  SubtitleBlockComponent
} from "./chunk-IDFIINKI.js";
import {
  DomSanitizer
} from "./chunk-K4BMEWWG.js";
import {
  CommonModule,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-DPMPS3AG.js";
import {
  ChangeDetectorRef,
  Component,
  Injectable,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BVPN5UAK.js";

// src/app/shared/services/dynamic-session.service.ts
var DynamicSessionService = class _DynamicSessionService {
  http;
  constructor(http) {
    this.http = http;
  }
  getSession(campaignSlug, sessionId) {
    const path = `assets/data/ikaros/campagne/${campaignSlug}/sessioni/session-${sessionId}.json`;
    return this.http.get(path);
  }
  static \u0275fac = function DynamicSessionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DynamicSessionService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DynamicSessionService, factory: _DynamicSessionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicSessionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/public/campagne/dynamic-session/dynamic-session.component.ts
var _c0 = () => [];
var _c1 = (a0, a1) => ({ "paragraph-emphasis": a0, "paragraph-italic": a1 });
function DynamicSessionComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function DynamicSessionComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openVideo(ctx_r1.session.videoId, 0, ctx_r1.session.title));
    });
    \u0275\u0275text(1, " \u25B6 ");
    \u0275\u0275elementEnd();
  }
}
function DynamicSessionComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 12);
    \u0275\u0275listener("click", function DynamicSessionComponent_li_9_Template_a_click_1_listener($event) {
      const chapter_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollToChapter($event, chapter_r4.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chapter_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", chapter_r4.title, " ");
  }
}
function DynamicSessionComponent_section_12_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function DynamicSessionComponent_section_12_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const chapter_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openVideo(chapter_r6.videoId, 0, chapter_r6.title));
    });
    \u0275\u0275text(1, " \u25B6 ");
    \u0275\u0275elementEnd();
  }
}
function DynamicSessionComponent_section_12_ng_container_6_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 22);
  }
  if (rf & 2) {
    const block_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c1, block_r7.variant === "emphasis", block_r7.style === "italic"))("innerHTML", block_r7.text, \u0275\u0275sanitizeHtml);
  }
}
function DynamicSessionComponent_section_12_ng_container_6_app_subtitle_block_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-subtitle-block", 23);
  }
  if (rf & 2) {
    const block_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r7);
  }
}
function DynamicSessionComponent_section_12_ng_container_6_blockquote_3_cite_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cite", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 ", block_r7.author);
  }
}
function DynamicSessionComponent_section_12_ng_container_6_blockquote_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "blockquote");
    \u0275\u0275text(1);
    \u0275\u0275template(2, DynamicSessionComponent_section_12_ng_container_6_blockquote_3_cite_2_Template, 2, 1, "cite", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", block_r7.text, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r7.author);
  }
}
function DynamicSessionComponent_section_12_ng_container_6_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
  }
  if (rf & 2) {
    const block_r7 = \u0275\u0275nextContext().$implicit;
    const chapter_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", block_r7.src, \u0275\u0275sanitizeUrl)("alt", block_r7.alt || chapter_r6.title)("ngClass", "chapter-image-" + block_r7.variant);
  }
}
function DynamicSessionComponent_section_12_ng_container_6_app_scene_block_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-scene-block", 23);
  }
  if (rf & 2) {
    const block_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r7);
  }
}
function DynamicSessionComponent_section_12_ng_container_6_app_divider_block_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-divider-block", 23);
  }
  if (rf & 2) {
    const block_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r7);
  }
}
function DynamicSessionComponent_section_12_ng_container_6_app_note_block_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-note-block", 23);
  }
  if (rf & 2) {
    const block_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r7);
  }
}
function DynamicSessionComponent_section_12_ng_container_6_app_list_block_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-list-block", 23);
  }
  if (rf & 2) {
    const block_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r7);
  }
}
function DynamicSessionComponent_section_12_ng_container_6_app_spacer_block_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spacer-block", 23);
  }
  if (rf & 2) {
    const block_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r7);
  }
}
function DynamicSessionComponent_section_12_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DynamicSessionComponent_section_12_ng_container_6_p_1_Template, 1, 5, "p", 18)(2, DynamicSessionComponent_section_12_ng_container_6_app_subtitle_block_2_Template, 1, 1, "app-subtitle-block", 19)(3, DynamicSessionComponent_section_12_ng_container_6_blockquote_3_Template, 3, 2, "blockquote", 20)(4, DynamicSessionComponent_section_12_ng_container_6_img_4_Template, 1, 3, "img", 21)(5, DynamicSessionComponent_section_12_ng_container_6_app_scene_block_5_Template, 1, 1, "app-scene-block", 19)(6, DynamicSessionComponent_section_12_ng_container_6_app_divider_block_6_Template, 1, 1, "app-divider-block", 19)(7, DynamicSessionComponent_section_12_ng_container_6_app_note_block_7_Template, 1, 1, "app-note-block", 19)(8, DynamicSessionComponent_section_12_ng_container_6_app_list_block_8_Template, 1, 1, "app-list-block", 19)(9, DynamicSessionComponent_section_12_ng_container_6_app_spacer_block_9_Template, 1, 1, "app-spacer-block", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const block_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r7.type === "paragraph");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r7.type === "subtitle");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r7.type === "quote");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r7.type === "image");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r7.type === "scene");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r7.type === "divider");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r7.type === "note");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r7.type === "list");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r7.type === "spacer");
  }
}
function DynamicSessionComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 14)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DynamicSessionComponent_section_12_button_4_Template, 2, 0, "button", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16);
    \u0275\u0275template(6, DynamicSessionComponent_section_12_ng_container_6_Template, 10, 9, "ng-container", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chapter_r6 = ctx.$implicit;
    \u0275\u0275property("id", chapter_r6.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(chapter_r6.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", chapter_r6.videoId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", chapter_r6.blocks || \u0275\u0275pureFunction0(4, _c0));
  }
}
function DynamicSessionComponent_div_13_iframe_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.activeVideoUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function DynamicSessionComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function DynamicSessionComponent_div_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeVideo());
    });
    \u0275\u0275elementStart(1, "div", 28);
    \u0275\u0275listener("click", function DynamicSessionComponent_div_13_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 29);
    \u0275\u0275listener("click", function DynamicSessionComponent_div_13_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeVideo());
    });
    \u0275\u0275text(3, " \u2715 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275template(5, DynamicSessionComponent_div_13_iframe_5_Template, 1, 1, "iframe", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.activeVideoTitle || "Video della sezione");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.activeVideoUrl);
  }
}
var DynamicSessionComponent = class _DynamicSessionComponent {
  route;
  dynamicSessionService;
  sanitizer;
  cdr;
  campaignSlug = "";
  sessionId = "";
  session = {
    id: 0,
    title: "",
    chapters: []
  };
  // =========================
  // VIDEO MODAL
  // =========================
  isVideoOpen = false;
  activeVideoUrl;
  activeVideoTitle = "";
  constructor(route, dynamicSessionService, sanitizer, cdr) {
    this.route = route;
    this.dynamicSessionService = dynamicSessionService;
    this.sanitizer = sanitizer;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.sessionId = params.get("sessionId") ?? "";
      this.campaignSlug = this.route.parent?.snapshot.paramMap.get("slug") ?? "";
      console.log("Campaign:", this.campaignSlug);
      console.log("Session:", this.sessionId);
      if (!this.campaignSlug || !this.sessionId) {
        console.warn("Missing params");
        return;
      }
      this.dynamicSessionService.getSession(this.campaignSlug, this.sessionId).subscribe({
        next: (data) => {
          console.log("SESSION LOADED", data);
          this.session = data;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error("LOAD ERROR", err);
        }
      });
    });
  }
  // =========================
  // VIDEO METHODS
  // =========================
  openVideo(videoId, startSeconds = 0, title = "") {
    this.activeVideoTitle = title;
    const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&start=${startSeconds}`;
    this.activeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.isVideoOpen = true;
  }
  closeVideo() {
    this.isVideoOpen = false;
    this.activeVideoUrl = void 0;
    this.activeVideoTitle = "";
  }
  scrollToChapter(event, chapterId) {
    event.preventDefault();
    const element = document.getElementById(chapterId);
    if (!element)
      return;
    const offset = 140;
    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  }
  static \u0275fac = function DynamicSessionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DynamicSessionComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DynamicSessionService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DynamicSessionComponent, selectors: [["app-dynamic-session"]], decls: 14, vars: 5, consts: [[1, "dynamic-session"], [1, "session-layout"], [1, "session-sidebar"], [1, "sidebar-card"], [1, "sidebar-title-row"], ["class", "sidebar-play", "type", "button", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "session-content"], [1, "content-card"], ["class", "chapter", 3, "id", 4, "ngFor", "ngForOf"], ["class", "video-modal-overlay", "role", "presentation", 3, "click", 4, "ngIf"], ["type", "button", 1, "sidebar-play", 3, "click"], ["href", "", 3, "click"], [1, "chapter", 3, "id"], [1, "chapter-title-row"], ["class", "chapter-play", "type", "button", 3, "click", 4, "ngIf"], [1, "chapter-blocks"], ["type", "button", 1, "chapter-play", 3, "click"], [3, "ngClass", "innerHTML", 4, "ngIf"], [3, "block", 4, "ngIf"], [4, "ngIf"], [3, "src", "alt", "ngClass", 4, "ngIf"], [3, "ngClass", "innerHTML"], [3, "block"], ["class", "quote-author", 4, "ngIf"], [1, "quote-author"], [3, "src", "alt", "ngClass"], ["role", "presentation", 1, "video-modal-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "video-modal", 3, "click"], ["type", "button", "aria-label", "Chiudi", 1, "video-close", 3, "click"], [1, "video-frame"], ["title", "Video sessione", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src", 4, "ngIf"], ["title", "Video sessione", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"]], template: function DynamicSessionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "aside", 2)(3, "div", 3)(4, "div", 4)(5, "h3");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, DynamicSessionComponent_button_7_Template, 2, 0, "button", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "ul");
      \u0275\u0275template(9, DynamicSessionComponent_li_9_Template, 3, 1, "li", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "main", 7)(11, "div", 8);
      \u0275\u0275template(12, DynamicSessionComponent_section_12_Template, 7, 5, "section", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(13, DynamicSessionComponent_div_13_Template, 6, 2, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.session.title);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.session.videoId);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.session.chapters);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.session.chapters);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isVideoOpen);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    SceneBlockComponent,
    DividerBlockComponent,
    NoteBlockComponent,
    SubtitleBlockComponent,
    ListBlockComponent,
    SpacerBlockComponent
  ], styles: ['\n\n.session-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  padding: 20px clamp(30px, 4vw, 80px) 100px;\n  width: 100%;\n  max-width: 1920px;\n  margin: 0 auto;\n}\n.session-sidebar[_ngcontent-%COMP%] {\n  width: 340px;\n  min-width: 320px;\n  position: sticky;\n  top: 120px;\n  height: fit-content;\n}\n.sidebar-card[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(15, 18, 30, 0.75), rgba(10, 12, 20, 0.85));\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-radius: 18px;\n  padding: 35px;\n  border: 1px solid rgba(230, 195, 111, 0.15);\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(230, 195, 111, 0.05);\n}\n.sidebar-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  color: #e6c36f;\n}\n.sidebar-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.sidebar-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding-left: 0;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2726";\n  color: #e6c36f;\n  margin-right: 10px;\n}\n.sidebar-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d0d4e0;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n.sidebar-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e6c36f;\n}\n.session-content[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 1400px;\n}\n.content-card[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(15, 20, 35, 0.75), rgba(10, 12, 22, 0.85));\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  border-radius: 26px;\n  padding: 80px;\n  border: 1px solid rgba(230, 195, 111, 0.12);\n  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.75), inset 0 0 60px rgba(230, 195, 111, 0.04);\n  line-height: 2.05;\n  font-size: 1.08rem;\n  color: #e4e7f2;\n  text-align: justify;\n  font-weight: 200;\n}\n.content-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  margin-bottom: 20px;\n  color: #e6c36f;\n}\n.content-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.chapter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.content-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  margin-bottom: 18px;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #e6c36f;\n  border-left: 3px solid rgba(230, 195, 111, 0.6);\n  padding-left: 14px;\n}\n.chapter-blocks[_ngcontent-%COMP%] {\n  display: block;\n}\n.chapter-image-left[_ngcontent-%COMP%] {\n  float: left;\n  width: 320px;\n  max-width: none;\n  margin: 10px 40px 20px 0;\n  border-radius: 14px;\n  line-height: normal;\n  display: inline-block;\n}\n.chapter-image-left-small[_ngcontent-%COMP%] {\n  float: left;\n  width: 100px;\n  max-width: none;\n  margin: 10px 40px 20px 0;\n  border-radius: 14px;\n  line-height: normal;\n  display: inline-block;\n}\n.chapter-image-left-big[_ngcontent-%COMP%] {\n  float: left;\n  max-width: 100%;\n  height: auto;\n  margin: 10px 40px 20px 0;\n  border-radius: 14px;\n  display: inline-block;\n  line-height: normal;\n}\n.chapter[_ngcontent-%COMP%]::after {\n  content: "";\n  display: block;\n  clear: both;\n}\n.chapter-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n}\n.chapter-title-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 40px 0 18px;\n  flex: 1;\n}\n.chapter-play[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 999px;\n  border: 1px solid rgba(230, 195, 111, 0.35);\n  background: rgba(230, 195, 111, 0.12);\n  color: rgba(230, 195, 111, 0.95);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.45);\n  transition: transform .15s ease, background .15s ease;\n}\n.chapter-play[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  background: rgba(230, 195, 111, 0.18);\n}\n.video-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.65);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 28px;\n}\n.video-modal[_ngcontent-%COMP%] {\n  width: min(1100px, 96vw);\n  border-radius: 22px;\n  border: 1px solid rgba(230, 195, 111, 0.18);\n  background: linear-gradient(rgba(15, 18, 30, 0.92), rgba(10, 12, 20, 0.94));\n  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.75);\n  position: relative;\n  padding: 18px;\n}\n.video-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  border: 1px solid rgba(230, 195, 111, 0.25);\n  background: rgba(230, 195, 111, 0.10);\n  color: rgba(230, 195, 111, 0.9);\n  cursor: pointer;\n}\n.video-frame[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  border-radius: 16px;\n  overflow: hidden;\n  margin-top: 18px;\n}\n.video-frame[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.sidebar-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.sidebar-play[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid rgba(230, 195, 111, 0.35);\n  background: rgba(230, 195, 111, 0.12);\n  color: #e6c36f;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.sidebar-play[_ngcontent-%COMP%]:hover {\n  background: rgba(230, 195, 111, 0.2);\n  transform: scale(1.05);\n}\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.dynamic-session[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  padding-top: 120px;\n  color: white;\n}\n.chapter[_ngcontent-%COMP%]   .paragraph-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.chapter[_ngcontent-%COMP%]   .paragraph-emphasis[_ngcontent-%COMP%] {\n  font-style: italic;\n  text-align: center;\n  color: #e6c36f;\n  letter-spacing: 0.04em;\n  margin: 22px 0;\n}\n.chapter[_ngcontent-%COMP%]   .quote-author[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  font-style: normal;\n  text-align: right;\n  color: rgba(230, 195, 111, 0.8);\n}\n/*# sourceMappingURL=dynamic-session.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicSessionComponent, [{
    type: Component,
    args: [{ selector: "app-dynamic-session", standalone: true, imports: [
      CommonModule,
      SceneBlockComponent,
      DividerBlockComponent,
      NoteBlockComponent,
      SubtitleBlockComponent,
      ListBlockComponent,
      SpacerBlockComponent
    ], template: `<div class="dynamic-session">

    <div class="session-layout">

        <!-- SIDEBAR -->
        <aside class="session-sidebar">

            <div class="sidebar-card">

                <div class="sidebar-title-row">

                    <h3>{{ session.title }}</h3>

                    <button
                            *ngIf="session.videoId"
                            class="sidebar-play"
                            type="button"
                            (click)="openVideo(session.videoId, 0, session.title)">
                        \u25B6
                    </button>

                </div>

                <ul>

                    <li *ngFor="let chapter of session.chapters">

                        <a
                                href=""
                                (click)="scrollToChapter($event, chapter.id)">

                            {{ chapter.title }}

                        </a>

                    </li>

                </ul>

            </div>

        </aside>

        <!-- CONTENT -->
        <main class="session-content">

            <div class="content-card">

                <section
                        *ngFor="let chapter of session.chapters"
                        [id]="chapter.id"
                        class="chapter">

                    <!-- TITLE -->
                    <div class="chapter-title-row">

                        <h2>{{ chapter.title }}</h2>

                        <button
                                *ngIf="chapter.videoId"
                                class="chapter-play"
                                type="button"
                                (click)="openVideo(chapter.videoId, 0, chapter.title)">
                            \u25B6
                        </button>

                    </div>


                    <!-- BLOCKS -->
                    <div class="chapter-blocks">
                        <ng-container *ngFor="let block of chapter.blocks || []">

                            <!-- PARAGRAPH -->
                            <p *ngIf="block.type === 'paragraph'"
                               [ngClass]="{
                                   'paragraph-emphasis': block.variant === 'emphasis',
                                   'paragraph-italic': block.style === 'italic'
                               }"
                               [innerHTML]="block.text">
                            </p>

                            <!-- SUBTITLE -->
                            <app-subtitle-block
                                    *ngIf="block.type === 'subtitle'"
                                    [block]="block">
                            </app-subtitle-block>

                            <!-- QUOTE -->
                            <blockquote *ngIf="block.type === 'quote'">

                                {{ block.text }}

                                <cite *ngIf="block.author" class="quote-author">\u2014 {{ block.author }}</cite>

                            </blockquote>

                            <!-- IMAGE -->
                            <img
                                    *ngIf="block.type === 'image'"
                                    [src]="block.src"
                                    [alt]="block.alt || chapter.title"
                                    [ngClass]="'chapter-image-' + block.variant"
                            />

                            <!-- SCENE -->
                            <app-scene-block
                                    *ngIf="block.type === 'scene'"
                                    [block]="block">
                            </app-scene-block>

                            <!-- DIVIDER -->
                            <app-divider-block
                                    *ngIf="block.type === 'divider'"
                                    [block]="block">
                            </app-divider-block>

                            <!-- NOTE -->
                            <app-note-block
                                    *ngIf="block.type === 'note'"
                                    [block]="block">
                            </app-note-block>

                            <!-- LIST -->
                            <app-list-block
                                    *ngIf="block.type === 'list'"
                                    [block]="block">
                            </app-list-block>

                            <!-- SPACER -->
                            <app-spacer-block
                                    *ngIf="block.type === 'spacer'"
                                    [block]="block">
                            </app-spacer-block>

                        </ng-container>
                    </div>

                </section>

            </div>

        </main>

    </div>

    <!-- VIDEO MODAL -->
    <div
            class="video-modal-overlay"
            *ngIf="isVideoOpen"
            (click)="closeVideo()"
            role="presentation">

        <div
                class="video-modal"
                role="dialog"
                aria-modal="true"
                [attr.aria-label]="activeVideoTitle || 'Video della sezione'"
                (click)="$event.stopPropagation()">

            <button
                    class="video-close"
                    type="button"
                    (click)="closeVideo()"
                    aria-label="Chiudi">
                \u2715
            </button>

            <div class="video-frame">

                <iframe
                        *ngIf="activeVideoUrl"
                        [src]="activeVideoUrl"
                        title="Video sessione"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>

            </div>

        </div>

    </div>

</div>`, styles: ['/* src/app/shared/styles/session-layout.css */\n.session-layout {\n  display: flex;\n  gap: 20px;\n  padding: 20px clamp(30px, 4vw, 80px) 100px;\n  width: 100%;\n  max-width: 1920px;\n  margin: 0 auto;\n}\n.session-sidebar {\n  width: 340px;\n  min-width: 320px;\n  position: sticky;\n  top: 120px;\n  height: fit-content;\n}\n.sidebar-card {\n  background: linear-gradient(rgba(15, 18, 30, 0.75), rgba(10, 12, 20, 0.85));\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-radius: 18px;\n  padding: 35px;\n  border: 1px solid rgba(230, 195, 111, 0.15);\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(230, 195, 111, 0.05);\n}\n.sidebar-card h3 {\n  margin-bottom: 15px;\n  color: #e6c36f;\n}\n.sidebar-card ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.sidebar-card li {\n  margin-bottom: 10px;\n}\nul {\n  list-style-type: none;\n  padding-left: 0;\n}\nul li::before {\n  content: "\\2726";\n  color: #e6c36f;\n  margin-right: 10px;\n}\n.sidebar-card a {\n  color: #d0d4e0;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n.sidebar-card a:hover {\n  color: #e6c36f;\n}\n.session-content {\n  flex: 1;\n  max-width: 1400px;\n}\n.content-card {\n  background: linear-gradient(rgba(15, 20, 35, 0.75), rgba(10, 12, 22, 0.85));\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  border-radius: 26px;\n  padding: 80px;\n  border: 1px solid rgba(230, 195, 111, 0.12);\n  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.75), inset 0 0 60px rgba(230, 195, 111, 0.04);\n  line-height: 2.05;\n  font-size: 1.08rem;\n  color: #e4e7f2;\n  text-align: justify;\n  font-weight: 200;\n}\n.content-card h3 {\n  margin-top: 60px;\n  margin-bottom: 20px;\n  color: #e6c36f;\n}\n.content-card h2:first-child {\n  margin-top: 0;\n}\n.chapter p {\n  text-align: left;\n}\n.content-card h2 {\n  margin-top: 40px;\n  margin-bottom: 18px;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #e6c36f;\n  border-left: 3px solid rgba(230, 195, 111, 0.6);\n  padding-left: 14px;\n}\n.chapter-blocks {\n  display: block;\n}\n.chapter-image-left {\n  float: left;\n  width: 320px;\n  max-width: none;\n  margin: 10px 40px 20px 0;\n  border-radius: 14px;\n  line-height: normal;\n  display: inline-block;\n}\n.chapter-image-left-small {\n  float: left;\n  width: 100px;\n  max-width: none;\n  margin: 10px 40px 20px 0;\n  border-radius: 14px;\n  line-height: normal;\n  display: inline-block;\n}\n.chapter-image-left-big {\n  float: left;\n  max-width: 100%;\n  height: auto;\n  margin: 10px 40px 20px 0;\n  border-radius: 14px;\n  display: inline-block;\n  line-height: normal;\n}\n.chapter::after {\n  content: "";\n  display: block;\n  clear: both;\n}\n.chapter-title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n}\n.chapter-title-row h2 {\n  margin: 40px 0 18px;\n  flex: 1;\n}\n.chapter-play {\n  width: 38px;\n  height: 38px;\n  border-radius: 999px;\n  border: 1px solid rgba(230, 195, 111, 0.35);\n  background: rgba(230, 195, 111, 0.12);\n  color: rgba(230, 195, 111, 0.95);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.45);\n  transition: transform .15s ease, background .15s ease;\n}\n.chapter-play:hover {\n  transform: translateY(-1px);\n  background: rgba(230, 195, 111, 0.18);\n}\n.video-modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.65);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 28px;\n}\n.video-modal {\n  width: min(1100px, 96vw);\n  border-radius: 22px;\n  border: 1px solid rgba(230, 195, 111, 0.18);\n  background: linear-gradient(rgba(15, 18, 30, 0.92), rgba(10, 12, 20, 0.94));\n  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.75);\n  position: relative;\n  padding: 18px;\n}\n.video-close {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  border: 1px solid rgba(230, 195, 111, 0.25);\n  background: rgba(230, 195, 111, 0.10);\n  color: rgba(230, 195, 111, 0.9);\n  cursor: pointer;\n}\n.video-frame {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  border-radius: 16px;\n  overflow: hidden;\n  margin-top: 18px;\n}\n.video-frame iframe {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.sidebar-title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.sidebar-play {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid rgba(230, 195, 111, 0.35);\n  background: rgba(230, 195, 111, 0.12);\n  color: #e6c36f;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.sidebar-play:hover {\n  background: rgba(230, 195, 111, 0.2);\n  transform: scale(1.05);\n}\n\n/* src/app/features/public/campagne/dynamic-session/dynamic-session.component.css */\n:host {\n  display: block;\n  width: 100%;\n}\n.dynamic-session {\n  width: 100%;\n  min-height: 100vh;\n  padding-top: 120px;\n  color: white;\n}\n.chapter .paragraph-italic {\n  font-style: italic;\n}\n.chapter .paragraph-emphasis {\n  font-style: italic;\n  text-align: center;\n  color: #e6c36f;\n  letter-spacing: 0.04em;\n  margin: 22px 0;\n}\n.chapter .quote-author {\n  display: block;\n  margin-top: 8px;\n  font-style: normal;\n  text-align: right;\n  color: rgba(230, 195, 111, 0.8);\n}\n/*# sourceMappingURL=dynamic-session.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: DynamicSessionService }, { type: DomSanitizer }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DynamicSessionComponent, { className: "DynamicSessionComponent", filePath: "src/app/features/public/campagne/dynamic-session/dynamic-session.component.ts", lineNumber: 59 });
})();
export {
  DynamicSessionComponent
};
//# sourceMappingURL=chunk-5LH74KLJ.js.map
