import {
  DomSanitizer
} from "./chunk-IATL4W7T.js";
import {
  Component,
  Injectable,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PXNMCIHO.js";

// src/app/shared/story-blocks/scene-block/scene-block.component.ts
function SceneBlockComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h2", 3);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.block.title);
  }
}
function SceneBlockComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.block.subtitle);
  }
}
function SceneBlockComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "figcaption", 2);
    \u0275\u0275conditionalCreate(1, SceneBlockComponent_Conditional_2_Conditional_1_Template, 2, 1, "h2", 3);
    \u0275\u0275conditionalCreate(2, SceneBlockComponent_Conditional_2_Conditional_2_Template, 2, 1, "p", 4);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.block.title ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.block.subtitle ? 2 : -1);
  }
}
var SceneBlockComponent = class _SceneBlockComponent {
  block;
  static \u0275fac = function SceneBlockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SceneBlockComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SceneBlockComponent, selectors: [["app-scene-block"]], inputs: { block: "block" }, decls: 3, vars: 3, consts: [[1, "scene"], [1, "scene__img", 3, "src", "alt"], [1, "scene__caption"], [1, "scene__title"], [1, "scene__subtitle"]], template: function SceneBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "figure", 0);
      \u0275\u0275domElement(1, "img", 1);
      \u0275\u0275conditionalCreate(2, SceneBlockComponent_Conditional_2_Template, 3, 2, "figcaption", 2);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275domProperty("src", ctx.block.src, \u0275\u0275sanitizeUrl)("alt", ctx.block.alt || ctx.block.title || "");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.block.title || ctx.block.subtitle ? 2 : -1);
    }
  }, styles: ['\n\n.scene[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 48px 0;\n  border-radius: 18px;\n  overflow: hidden;\n  border: 1px solid rgba(230, 195, 111, 0.18);\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.6), inset 0 0 60px rgba(230, 195, 111, 0.04);\n  line-height: 0;\n}\n.scene__img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: clamp(260px, 42vh, 520px);\n  object-fit: cover;\n}\n.scene__caption[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: clamp(20px, 4vw, 48px);\n  background:\n    linear-gradient(\n      to top,\n      rgba(6, 8, 14, 0.88) 0%,\n      rgba(6, 8, 14, 0.45) 32%,\n      rgba(6, 8, 14, 0) 62%);\n  line-height: normal;\n}\n.scene__title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #f3e3b6;\n  font-size: clamp(1.8rem, 4vw, 3rem);\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.85);\n}\n.scene__title[_ngcontent-%COMP%]::after {\n  content: "";\n  display: block;\n  width: 64px;\n  height: 2px;\n  margin-top: 14px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(230, 195, 111, 0.9),\n      rgba(230, 195, 111, 0));\n}\n.scene__subtitle[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  color: rgba(230, 195, 111, 0.92);\n  font-style: italic;\n  letter-spacing: 0.08em;\n  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.85);\n}\n/*# sourceMappingURL=scene-block.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SceneBlockComponent, [{
    type: Component,
    args: [{ selector: "app-scene-block", standalone: true, template: `<figure class="scene">

    <img
            class="scene__img"
            [src]="block.src"
            [alt]="block.alt || block.title || ''"
    />

    @if (block.title || block.subtitle) {
        <figcaption class="scene__caption">

            @if (block.title) {
                <h2 class="scene__title">{{ block.title }}</h2>
            }

            @if (block.subtitle) {
                <p class="scene__subtitle">{{ block.subtitle }}</p>
            }

        </figcaption>
    }

</figure>
`, styles: ['/* src/app/shared/story-blocks/scene-block/scene-block.component.css */\n.scene {\n  position: relative;\n  margin: 48px 0;\n  border-radius: 18px;\n  overflow: hidden;\n  border: 1px solid rgba(230, 195, 111, 0.18);\n  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.6), inset 0 0 60px rgba(230, 195, 111, 0.04);\n  line-height: 0;\n}\n.scene__img {\n  display: block;\n  width: 100%;\n  height: clamp(260px, 42vh, 520px);\n  object-fit: cover;\n}\n.scene__caption {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: clamp(20px, 4vw, 48px);\n  background:\n    linear-gradient(\n      to top,\n      rgba(6, 8, 14, 0.88) 0%,\n      rgba(6, 8, 14, 0.45) 32%,\n      rgba(6, 8, 14, 0) 62%);\n  line-height: normal;\n}\n.scene__title {\n  margin: 0;\n  color: #f3e3b6;\n  font-size: clamp(1.8rem, 4vw, 3rem);\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.85);\n}\n.scene__title::after {\n  content: "";\n  display: block;\n  width: 64px;\n  height: 2px;\n  margin-top: 14px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(230, 195, 111, 0.9),\n      rgba(230, 195, 111, 0));\n}\n.scene__subtitle {\n  margin: 12px 0 0;\n  color: rgba(230, 195, 111, 0.92);\n  font-style: italic;\n  letter-spacing: 0.08em;\n  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.85);\n}\n/*# sourceMappingURL=scene-block.component.css.map */\n'] }]
  }], null, { block: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SceneBlockComponent, { className: "SceneBlockComponent", filePath: "src/app/shared/story-blocks/scene-block/scene-block.component.ts", lineNumber: 10 });
})();

// src/app/shared/story-blocks/divider-block/divider-block.component.ts
function DividerBlockComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.mark);
  }
}
var DividerBlockComponent = class _DividerBlockComponent {
  block;
  /** Glifo centrale in base alla variante. */
  get mark() {
    switch (this.block.variant) {
      case "rune":
        return "\u16DF";
      case "plain":
        return "";
      default:
        return "\u25C8";
    }
  }
  static \u0275fac = function DividerBlockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DividerBlockComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DividerBlockComponent, selectors: [["app-divider-block"]], inputs: { block: "block" }, decls: 4, vars: 1, consts: [["role", "separator", "aria-hidden", "true", 1, "divider"], [1, "divider__line"], [1, "divider__mark"]], template: function DividerBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domElement(1, "span", 1);
      \u0275\u0275conditionalCreate(2, DividerBlockComponent_Conditional_2_Template, 2, 1, "span", 2);
      \u0275\u0275domElement(3, "span", 1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.mark ? 2 : -1);
    }
  }, styles: ["\n\n.divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  margin: 40px auto;\n  max-width: 520px;\n  color: rgba(230, 195, 111, 0.85);\n}\n.divider__line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(230, 195, 111, 0) 0%,\n      rgba(230, 195, 111, 0.55) 50%,\n      rgba(230, 195, 111, 0) 100%);\n}\n.divider__mark[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1;\n  letter-spacing: 0.2em;\n  text-shadow: 0 0 14px rgba(230, 195, 111, 0.45);\n}\n/*# sourceMappingURL=divider-block.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DividerBlockComponent, [{
    type: Component,
    args: [{ selector: "app-divider-block", standalone: true, template: '<div class="divider" role="separator" aria-hidden="true">\n\n    <span class="divider__line"></span>\n\n    @if (mark) {\n        <span class="divider__mark">{{ mark }}</span>\n    }\n\n    <span class="divider__line"></span>\n\n</div>\n', styles: ["/* src/app/shared/story-blocks/divider-block/divider-block.component.css */\n.divider {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  margin: 40px auto;\n  max-width: 520px;\n  color: rgba(230, 195, 111, 0.85);\n}\n.divider__line {\n  flex: 1;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(230, 195, 111, 0) 0%,\n      rgba(230, 195, 111, 0.55) 50%,\n      rgba(230, 195, 111, 0) 100%);\n}\n.divider__mark {\n  font-size: 1.1rem;\n  line-height: 1;\n  letter-spacing: 0.2em;\n  text-shadow: 0 0 14px rgba(230, 195, 111, 0.45);\n}\n/*# sourceMappingURL=divider-block.component.css.map */\n"] }]
  }], null, { block: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DividerBlockComponent, { className: "DividerBlockComponent", filePath: "src/app/shared/story-blocks/divider-block/divider-block.component.ts", lineNumber: 10 });
})();

// src/app/core/services/text-render.ts
var TextRenderService = class _TextRenderService {
  sanitizer;
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  render(text) {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
  static \u0275fac = function TextRenderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextRenderService)(\u0275\u0275inject(DomSanitizer));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TextRenderService, factory: _TextRenderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextRenderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: DomSanitizer }], null);
})();

// src/app/shared/story-blocks/note-block/note-block.component.ts
var NoteBlockComponent = class _NoteBlockComponent {
  textRender;
  block;
  constructor(textRender) {
    this.textRender = textRender;
  }
  static \u0275fac = function NoteBlockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoteBlockComponent)(\u0275\u0275directiveInject(TextRenderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NoteBlockComponent, selectors: [["app-note-block"]], inputs: { block: "block" }, decls: 6, vars: 2, consts: [[1, "note"], [1, "note__label"], [1, "note__mark"], [1, "note__text", 3, "innerHTML"]], template: function NoteBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "aside", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "\u25C8");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(5, "div", 3);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.block.title || "Nota del Master", " ");
      \u0275\u0275advance();
      \u0275\u0275domProperty("innerHTML", ctx.textRender.render(ctx.block.text), \u0275\u0275sanitizeHtml);
    }
  }, styles: ["\n\n.note[_ngcontent-%COMP%] {\n  margin: 32px 0;\n  padding: 20px 24px;\n  border-radius: 12px;\n  border-left: 3px solid rgba(230, 195, 111, 0.7);\n  background: linear-gradient(rgba(15, 18, 30, 0.7), rgba(10, 12, 20, 0.8));\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45), inset 0 0 30px rgba(230, 195, 111, 0.04);\n}\n.note__label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n  color: #e6c36f;\n  font-size: 0.78rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n}\n.note__mark[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  text-shadow: 0 0 12px rgba(230, 195, 111, 0.5);\n}\n.note__text[_ngcontent-%COMP%] {\n  color: rgba(235, 230, 220, 0.85);\n  font-style: italic;\n  line-height: 1.7;\n}\n.note__text[_ngcontent-%COMP%]   :is(p[_ngcontent-%COMP%]) {\n  margin: 0 0 10px;\n}\n.note__text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(p):last-child {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=note-block.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoteBlockComponent, [{
    type: Component,
    args: [{ selector: "app-note-block", standalone: true, template: `<aside class="note">

    <div class="note__label">
        <span class="note__mark">\u25C8</span>
        {{ block.title || 'Nota del Master' }}
    </div>

    <div class="note__text" [innerHTML]="textRender.render(block.text)"></div>

</aside>
`, styles: ["/* src/app/shared/story-blocks/note-block/note-block.component.css */\n.note {\n  margin: 32px 0;\n  padding: 20px 24px;\n  border-radius: 12px;\n  border-left: 3px solid rgba(230, 195, 111, 0.7);\n  background: linear-gradient(rgba(15, 18, 30, 0.7), rgba(10, 12, 20, 0.8));\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45), inset 0 0 30px rgba(230, 195, 111, 0.04);\n}\n.note__label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n  color: #e6c36f;\n  font-size: 0.78rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n}\n.note__mark {\n  font-size: 0.9rem;\n  text-shadow: 0 0 12px rgba(230, 195, 111, 0.5);\n}\n.note__text {\n  color: rgba(235, 230, 220, 0.85);\n  font-style: italic;\n  line-height: 1.7;\n}\n.note__text :is(p) {\n  margin: 0 0 10px;\n}\n.note__text :is(p):last-child {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=note-block.component.css.map */\n"] }]
  }], () => [{ type: TextRenderService }], { block: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NoteBlockComponent, { className: "NoteBlockComponent", filePath: "src/app/shared/story-blocks/note-block/note-block.component.ts", lineNumber: 11 });
})();

// src/app/shared/story-blocks/subtitle-block/subtitle-block.component.ts
var SubtitleBlockComponent = class _SubtitleBlockComponent {
  block;
  static \u0275fac = function SubtitleBlockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SubtitleBlockComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubtitleBlockComponent, selectors: [["app-subtitle-block"]], inputs: { block: "block" }, decls: 2, vars: 1, consts: [[1, "subtitle"]], template: function SubtitleBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "h3", 0);
      \u0275\u0275text(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.block.text);
    }
  }, styles: ["\n\n.subtitle[_ngcontent-%COMP%] {\n  margin: 30px 0 14px;\n  color: #e6c36f;\n  font-size: 1.25rem;\n  letter-spacing: 0.04em;\n}\n/*# sourceMappingURL=subtitle-block.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubtitleBlockComponent, [{
    type: Component,
    args: [{ selector: "app-subtitle-block", standalone: true, template: `<h3 class="subtitle">{{ block.text }}</h3>`, styles: ["/* angular:styles/component:css;bcd30386d02a55ab1f3384b4fa0ba672231e967c1a598cadc08bf4b88aecf8b4;/home/andrea/bitbucket/DPortal/dungeon-portal/src/app/shared/story-blocks/subtitle-block/subtitle-block.component.ts */\n.subtitle {\n  margin: 30px 0 14px;\n  color: #e6c36f;\n  font-size: 1.25rem;\n  letter-spacing: 0.04em;\n}\n/*# sourceMappingURL=subtitle-block.component.css.map */\n"] }]
  }], null, { block: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubtitleBlockComponent, { className: "SubtitleBlockComponent", filePath: "src/app/shared/story-blocks/subtitle-block/subtitle-block.component.ts", lineNumber: 17 });
})();

// src/app/shared/story-blocks/list-block/list-block.component.ts
function ListBlockComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "li", 2);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("innerHTML", ctx_r1.textRender.render(item_r1), \u0275\u0275sanitizeHtml);
  }
}
function ListBlockComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ol", 0);
    \u0275\u0275repeaterCreate(1, ListBlockComponent_Conditional_0_For_2_Template, 1, 1, "li", 2, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.block.items);
  }
}
function ListBlockComponent_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "li", 2);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("innerHTML", ctx_r1.textRender.render(item_r3), \u0275\u0275sanitizeHtml);
  }
}
function ListBlockComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul", 1);
    \u0275\u0275repeaterCreate(1, ListBlockComponent_Conditional_1_For_2_Template, 1, 1, "li", 2, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.block.items);
  }
}
var ListBlockComponent = class _ListBlockComponent {
  textRender;
  block;
  constructor(textRender) {
    this.textRender = textRender;
  }
  static \u0275fac = function ListBlockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListBlockComponent)(\u0275\u0275directiveInject(TextRenderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListBlockComponent, selectors: [["app-list-block"]], inputs: { block: "block" }, decls: 2, vars: 1, consts: [[1, "story-list", "story-list--number"], [1, "story-list"], [3, "innerHTML"]], template: function ListBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ListBlockComponent_Conditional_0_Template, 3, 0, "ol", 0)(1, ListBlockComponent_Conditional_1_Template, 3, 0, "ul", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.block.variant === "number" ? 0 : 1);
    }
  }, styles: ['\n\n.story-list[_ngcontent-%COMP%] {\n  margin: 18px 0;\n  padding-left: 26px;\n  color: rgba(235, 230, 220, 0.9);\n  line-height: 1.7;\n}\n.story-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  padding-left: 6px;\n}\n.story-list[_ngcontent-%COMP%]:not(.story-list--number) {\n  list-style: none;\n  padding-left: 18px;\n}\n.story-list[_ngcontent-%COMP%]:not(.story-list--number)   li[_ngcontent-%COMP%]::before {\n  content: "\\25c6";\n  color: rgba(230, 195, 111, 0.8);\n  font-size: 0.7em;\n  margin-right: 12px;\n  vertical-align: middle;\n}\n.story-list--number[_ngcontent-%COMP%] {\n  list-style: decimal;\n}\n.story-list--number[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  color: rgba(230, 195, 111, 0.85);\n}\n/*# sourceMappingURL=list-block.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListBlockComponent, [{
    type: Component,
    args: [{ selector: "app-list-block", standalone: true, template: `@if (block.variant === 'number') {
    <ol class="story-list story-list--number">
        @for (item of block.items; track $index) {
            <li [innerHTML]="textRender.render(item)"></li>
        }
    </ol>
} @else {
    <ul class="story-list">
        @for (item of block.items; track $index) {
            <li [innerHTML]="textRender.render(item)"></li>
        }
    </ul>
}
`, styles: ['/* src/app/shared/story-blocks/list-block/list-block.component.css */\n.story-list {\n  margin: 18px 0;\n  padding-left: 26px;\n  color: rgba(235, 230, 220, 0.9);\n  line-height: 1.7;\n}\n.story-list li {\n  margin-bottom: 8px;\n  padding-left: 6px;\n}\n.story-list:not(.story-list--number) {\n  list-style: none;\n  padding-left: 18px;\n}\n.story-list:not(.story-list--number) li::before {\n  content: "\\25c6";\n  color: rgba(230, 195, 111, 0.8);\n  font-size: 0.7em;\n  margin-right: 12px;\n  vertical-align: middle;\n}\n.story-list--number {\n  list-style: decimal;\n}\n.story-list--number li::marker {\n  color: rgba(230, 195, 111, 0.85);\n}\n/*# sourceMappingURL=list-block.component.css.map */\n'] }]
  }], () => [{ type: TextRenderService }], { block: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListBlockComponent, { className: "ListBlockComponent", filePath: "src/app/shared/story-blocks/list-block/list-block.component.ts", lineNumber: 11 });
})();

// src/app/shared/story-blocks/spacer-block/spacer-block.component.ts
var SpacerBlockComponent = class _SpacerBlockComponent {
  block;
  static \u0275fac = function SpacerBlockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpacerBlockComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpacerBlockComponent, selectors: [["app-spacer-block"]], inputs: { block: "block" }, decls: 1, vars: 2, consts: [[1, "spacer"]], template: function SpacerBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElement(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275classMap("spacer--" + (ctx.block.variant || "medium"));
    }
  }, styles: ["\n\n.spacer--small[_ngcontent-%COMP%] {\n  height: 16px;\n}\n.spacer--medium[_ngcontent-%COMP%] {\n  height: 36px;\n}\n.spacer--large[_ngcontent-%COMP%] {\n  height: 64px;\n}\n/*# sourceMappingURL=spacer-block.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpacerBlockComponent, [{
    type: Component,
    args: [{ selector: "app-spacer-block", standalone: true, template: `<div class="spacer" [class]="'spacer--' + (block.variant || 'medium')"></div>`, styles: ["/* angular:styles/component:css;4282347407604aa9584357c3e65af84c7bcccc8a9da9ecf14fddd9b48465ecf3;/home/andrea/bitbucket/DPortal/dungeon-portal/src/app/shared/story-blocks/spacer-block/spacer-block.component.ts */\n.spacer--small {\n  height: 16px;\n}\n.spacer--medium {\n  height: 36px;\n}\n.spacer--large {\n  height: 64px;\n}\n/*# sourceMappingURL=spacer-block.component.css.map */\n"] }]
  }], null, { block: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpacerBlockComponent, { className: "SpacerBlockComponent", filePath: "src/app/shared/story-blocks/spacer-block/spacer-block.component.ts", lineNumber: 14 });
})();

export {
  SceneBlockComponent,
  DividerBlockComponent,
  NoteBlockComponent,
  SubtitleBlockComponent,
  ListBlockComponent,
  SpacerBlockComponent
};
//# sourceMappingURL=chunk-RZPL6OEY.js.map
