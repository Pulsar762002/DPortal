import {
  DividerBlockComponent,
  ListBlockComponent,
  NoteBlockComponent,
  SceneBlockComponent,
  SpacerBlockComponent,
  SubtitleBlockComponent
} from "./chunk-IDFIINKI.js";
import "./chunk-K4BMEWWG.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-DPMPS3AG.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BVPN5UAK.js";

// src/app/features/public/styleguide/styleguide.component.ts
var _c0 = () => [];
var _c1 = (a0, a1) => ({ "paragraph-emphasis": a0, "paragraph-italic": a1 });
function StyleguideComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 9);
    \u0275\u0275listener("click", function StyleguideComponent_li_8_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chapter_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(chapter_r2.title);
  }
}
function StyleguideComponent_section_11_ng_container_5_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 17);
  }
  if (rf & 2) {
    const block_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c1, block_r3.variant === "emphasis", block_r3.style === "italic"))("innerHTML", block_r3.text, \u0275\u0275sanitizeHtml);
  }
}
function StyleguideComponent_section_11_ng_container_5_app_subtitle_block_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-subtitle-block", 18);
  }
  if (rf & 2) {
    const block_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r3);
  }
}
function StyleguideComponent_section_11_ng_container_5_blockquote_3_cite_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cite", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 ", block_r3.author);
  }
}
function StyleguideComponent_section_11_ng_container_5_blockquote_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "blockquote");
    \u0275\u0275text(1);
    \u0275\u0275template(2, StyleguideComponent_section_11_ng_container_5_blockquote_3_cite_2_Template, 2, 1, "cite", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", block_r3.text, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r3.author);
  }
}
function StyleguideComponent_section_11_ng_container_5_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
  if (rf & 2) {
    const block_r3 = \u0275\u0275nextContext().$implicit;
    const chapter_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", block_r3.src, \u0275\u0275sanitizeUrl)("alt", block_r3.alt || chapter_r4.title)("ngClass", "chapter-image-" + block_r3.variant);
  }
}
function StyleguideComponent_section_11_ng_container_5_app_scene_block_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-scene-block", 18);
  }
  if (rf & 2) {
    const block_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r3);
  }
}
function StyleguideComponent_section_11_ng_container_5_app_divider_block_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-divider-block", 18);
  }
  if (rf & 2) {
    const block_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r3);
  }
}
function StyleguideComponent_section_11_ng_container_5_app_note_block_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-note-block", 18);
  }
  if (rf & 2) {
    const block_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r3);
  }
}
function StyleguideComponent_section_11_ng_container_5_app_list_block_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-list-block", 18);
  }
  if (rf & 2) {
    const block_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r3);
  }
}
function StyleguideComponent_section_11_ng_container_5_app_spacer_block_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spacer-block", 18);
  }
  if (rf & 2) {
    const block_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r3);
  }
}
function StyleguideComponent_section_11_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StyleguideComponent_section_11_ng_container_5_p_1_Template, 1, 5, "p", 13)(2, StyleguideComponent_section_11_ng_container_5_app_subtitle_block_2_Template, 1, 1, "app-subtitle-block", 14)(3, StyleguideComponent_section_11_ng_container_5_blockquote_3_Template, 3, 2, "blockquote", 15)(4, StyleguideComponent_section_11_ng_container_5_img_4_Template, 1, 3, "img", 16)(5, StyleguideComponent_section_11_ng_container_5_app_scene_block_5_Template, 1, 1, "app-scene-block", 14)(6, StyleguideComponent_section_11_ng_container_5_app_divider_block_6_Template, 1, 1, "app-divider-block", 14)(7, StyleguideComponent_section_11_ng_container_5_app_note_block_7_Template, 1, 1, "app-note-block", 14)(8, StyleguideComponent_section_11_ng_container_5_app_list_block_8_Template, 1, 1, "app-list-block", 14)(9, StyleguideComponent_section_11_ng_container_5_app_spacer_block_9_Template, 1, 1, "app-spacer-block", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const block_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r3.type === "paragraph");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r3.type === "subtitle");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r3.type === "quote");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r3.type === "image");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r3.type === "scene");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r3.type === "divider");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r3.type === "note");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r3.type === "list");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r3.type === "spacer");
  }
}
function StyleguideComponent_section_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10)(1, "div", 11)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275template(5, StyleguideComponent_section_11_ng_container_5_Template, 10, 9, "ng-container", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chapter_r4 = ctx.$implicit;
    \u0275\u0275property("id", chapter_r4.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(chapter_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", chapter_r4.blocks || \u0275\u0275pureFunction0(3, _c0));
  }
}
var StyleguideComponent = class _StyleguideComponent {
  // Immagini di esempio già presenti negli asset della campagna
  imgWide = "assets/data/ikaros/campagne/discesa-averno/avernus-hero.jpg";
  imgParty = "assets/data/ikaros/campagne/discesa-averno/avernus-party.jpg";
  /**
   * Una "sessione" fittizia che funge da catalogo: ogni capitolo raccoglie
   * un tipo di blocco con tutte le sue varianti. Viene renderizzata con lo
   * stesso markup di dynamic-session.
   */
  session = {
    id: 0,
    title: "Galleria degli stili",
    chapters: [
      {
        id: "paragrafo",
        title: "Paragrafo",
        blocks: [
          {
            type: "paragraph",
            text: 'Paragrafo normale. Il testo pu\xF2 contenere HTML inline, come <strong>grassetto</strong>, <em>corsivo</em> o un <a href="#">collegamento</a>. \xC8 il blocco di base della narrazione.'
          },
          {
            type: "paragraph",
            style: "italic",
            text: 'Paragrafo con <code>style: "italic"</code>: tutto il testo \xE8 reso in corsivo.'
          },
          {
            type: "paragraph",
            variant: "emphasis",
            text: 'Paragrafo con <code>variant: "emphasis"</code>: centrato, dorato e spaziato, per dare risalto a un momento.'
          }
        ]
      },
      {
        id: "sottotitolo",
        title: "Sottotitolo",
        blocks: [
          {
            type: "paragraph",
            text: "Il blocco <code>subtitle</code> introduce una sezione dentro un capitolo."
          },
          { type: "subtitle", text: "Un sottotitolo di esempio" },
          {
            type: "paragraph",
            text: "Il testo che segue il sottotitolo prosegue normalmente."
          }
        ]
      },
      {
        id: "citazione",
        title: "Citazione",
        blocks: [
          {
            type: "quote",
            text: "Chi guarda nell\u2019abisso scopre presto che anche l\u2019abisso lo osserva."
          },
          {
            type: "quote",
            text: "L\xE0 dove la luce si arrende, comincia il vero viaggio.",
            author: "Iscrizione sulle Porte di Averno"
          }
        ]
      },
      {
        id: "elenco",
        title: "Elenco",
        blocks: [
          {
            type: "paragraph",
            text: "Elenco puntato (default), con pallini dorati:"
          },
          {
            type: "list",
            items: [
              "Prima voce dell\u2019elenco",
              "Seconda voce, con <strong>testo in evidenza</strong>",
              "Terza voce"
            ]
          },
          {
            type: "paragraph",
            text: 'Elenco numerato (<code>variant: "number"</code>):'
          },
          {
            type: "list",
            variant: "number",
            items: ["Primo passo", "Secondo passo", "Terzo passo"]
          }
        ]
      },
      {
        id: "immagine",
        title: "Immagine",
        blocks: [
          {
            type: "paragraph",
            text: "Variante <code>center</code>: immagine centrata a tutta colonna."
          },
          { type: "image", variant: "center", src: this.imgWide, alt: "Veduta dell\u2019Averno" },
          {
            type: "paragraph",
            text: "Variante <code>left</code>: l\u2019immagine fluttua a sinistra e il testo le scorre accanto, avvolgendola. Ideale per accompagnare la descrizione di un luogo o di un personaggio senza spezzare il ritmo della lettura. Continua a leggere e vedrai il paragrafo adattarsi attorno alla figura, riempiendo lo spazio rimanente sulla destra."
          },
          { type: "image", variant: "left", src: this.imgParty, alt: "Il gruppo" },
          {
            type: "paragraph",
            text: "Esistono inoltre le varianti <code>left-small</code> e <code>left-big</code>, identiche ma con larghezze diverse della miniatura a sinistra."
          },
          { type: "spacer", variant: "large" }
        ]
      },
      {
        id: "scena",
        title: "Scena",
        blocks: [
          {
            type: "paragraph",
            text: "Il blocco <code>scene</code> \xE8 un\u2019immagine full-width con titolo e sottotitolo sovrimpressi, pensata per aprire una scena in modo cinematografico."
          },
          {
            type: "scene",
            src: this.imgWide,
            title: "La discesa nell\u2019Averno",
            subtitle: "Le porte si aprono",
            alt: "Le porte di Averno"
          }
        ]
      },
      {
        id: "divider",
        title: "Divider",
        blocks: [
          { type: "paragraph", text: "Variante <code>flourish</code> (default):" },
          { type: "divider", variant: "flourish" },
          { type: "paragraph", text: "Variante <code>rune</code>:" },
          { type: "divider", variant: "rune" },
          { type: "paragraph", text: "Variante <code>plain</code> (solo linea):" },
          { type: "divider", variant: "plain" }
        ]
      },
      {
        id: "nota",
        title: "Nota del Master",
        blocks: [
          {
            type: "note",
            text: "Riquadro \xABaside\xBB per lore o voce fuori campo del narratore. Senza titolo mostra l\u2019etichetta di default \xABNota del Master\xBB."
          },
          {
            type: "note",
            title: "Dietro le quinte",
            text: "Con un <strong>titolo</strong> personalizzato la nota pu\xF2 evidenziare segreti, ganci di trama o appunti di preparazione."
          }
        ]
      },
      {
        id: "spacer",
        title: "Spacer",
        blocks: [
          {
            type: "paragraph",
            text: "Il blocco <code>spacer</code> inserisce spazio verticale tra i blocchi (<code>small</code> 16px, <code>medium</code> 36px, <code>large</code> 64px). Qui sotto un <code>spacer</code> large prima del prossimo paragrafo."
          },
          { type: "spacer", variant: "large" },
          { type: "paragraph", text: "Paragrafo dopo lo spazio." }
        ]
      }
    ]
  };
  static \u0275fac = function StyleguideComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StyleguideComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StyleguideComponent, selectors: [["app-styleguide"]], decls: 12, vars: 3, consts: [[1, "dynamic-session"], [1, "session-layout"], [1, "session-sidebar"], [1, "sidebar-card"], [1, "sidebar-title-row"], [4, "ngFor", "ngForOf"], [1, "session-content"], [1, "content-card"], ["class", "chapter", 3, "id", 4, "ngFor", "ngForOf"], ["href", "", 3, "click"], [1, "chapter", 3, "id"], [1, "chapter-title-row"], [1, "chapter-blocks"], [3, "ngClass", "innerHTML", 4, "ngIf"], [3, "block", 4, "ngIf"], [4, "ngIf"], [3, "src", "alt", "ngClass", 4, "ngIf"], [3, "ngClass", "innerHTML"], [3, "block"], ["class", "quote-author", 4, "ngIf"], [1, "quote-author"], [3, "src", "alt", "ngClass"]], template: function StyleguideComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "aside", 2)(3, "div", 3)(4, "div", 4)(5, "h3");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "ul");
      \u0275\u0275template(8, StyleguideComponent_li_8_Template, 3, 1, "li", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "main", 6)(10, "div", 7);
      \u0275\u0275template(11, StyleguideComponent_section_11_Template, 6, 4, "section", 8);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.session.title);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.session.chapters);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.session.chapters);
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
  ], styles: ['\n\n.session-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  padding: 20px clamp(30px, 4vw, 80px) 100px;\n  width: 100%;\n  max-width: 1920px;\n  margin: 0 auto;\n}\n.session-sidebar[_ngcontent-%COMP%] {\n  width: 340px;\n  min-width: 320px;\n  position: sticky;\n  top: 120px;\n  height: fit-content;\n}\n.sidebar-card[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(15, 18, 30, 0.75), rgba(10, 12, 20, 0.85));\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-radius: 18px;\n  padding: 35px;\n  border: 1px solid rgba(230, 195, 111, 0.15);\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(230, 195, 111, 0.05);\n}\n.sidebar-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  color: #e6c36f;\n}\n.sidebar-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.sidebar-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding-left: 0;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2726";\n  color: #e6c36f;\n  margin-right: 10px;\n}\n.sidebar-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d0d4e0;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n.sidebar-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e6c36f;\n}\n.session-content[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 1400px;\n}\n.content-card[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(15, 20, 35, 0.75), rgba(10, 12, 22, 0.85));\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  border-radius: 26px;\n  padding: 80px;\n  border: 1px solid rgba(230, 195, 111, 0.12);\n  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.75), inset 0 0 60px rgba(230, 195, 111, 0.04);\n  line-height: 2.05;\n  font-size: 1.08rem;\n  color: #e4e7f2;\n  text-align: justify;\n  font-weight: 200;\n}\n.content-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  margin-bottom: 20px;\n  color: #e6c36f;\n}\n.content-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.chapter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.content-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  margin-bottom: 18px;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #e6c36f;\n  border-left: 3px solid rgba(230, 195, 111, 0.6);\n  padding-left: 14px;\n}\n.chapter-blocks[_ngcontent-%COMP%] {\n  display: block;\n}\n.chapter-image-left[_ngcontent-%COMP%] {\n  float: left;\n  width: 320px;\n  max-width: none;\n  margin: 10px 40px 20px 0;\n  border-radius: 14px;\n  line-height: normal;\n  display: inline-block;\n}\n.chapter-image-left-small[_ngcontent-%COMP%] {\n  float: left;\n  width: 100px;\n  max-width: none;\n  margin: 10px 40px 20px 0;\n  border-radius: 14px;\n  line-height: normal;\n  display: inline-block;\n}\n.chapter-image-left-big[_ngcontent-%COMP%] {\n  float: left;\n  max-width: 100%;\n  height: auto;\n  margin: 10px 40px 20px 0;\n  border-radius: 14px;\n  display: inline-block;\n  line-height: normal;\n}\n.chapter[_ngcontent-%COMP%]::after {\n  content: "";\n  display: block;\n  clear: both;\n}\n.chapter-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n}\n.chapter-title-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 40px 0 18px;\n  flex: 1;\n}\n.chapter-play[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 999px;\n  border: 1px solid rgba(230, 195, 111, 0.35);\n  background: rgba(230, 195, 111, 0.12);\n  color: rgba(230, 195, 111, 0.95);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.45);\n  transition: transform .15s ease, background .15s ease;\n}\n.chapter-play[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  background: rgba(230, 195, 111, 0.18);\n}\n.video-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.65);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 28px;\n}\n.video-modal[_ngcontent-%COMP%] {\n  width: min(1100px, 96vw);\n  border-radius: 22px;\n  border: 1px solid rgba(230, 195, 111, 0.18);\n  background: linear-gradient(rgba(15, 18, 30, 0.92), rgba(10, 12, 20, 0.94));\n  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.75);\n  position: relative;\n  padding: 18px;\n}\n.video-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  border: 1px solid rgba(230, 195, 111, 0.25);\n  background: rgba(230, 195, 111, 0.10);\n  color: rgba(230, 195, 111, 0.9);\n  cursor: pointer;\n}\n.video-frame[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  border-radius: 16px;\n  overflow: hidden;\n  margin-top: 18px;\n}\n.video-frame[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.sidebar-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.sidebar-play[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid rgba(230, 195, 111, 0.35);\n  background: rgba(230, 195, 111, 0.12);\n  color: #e6c36f;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.sidebar-play[_ngcontent-%COMP%]:hover {\n  background: rgba(230, 195, 111, 0.2);\n  transform: scale(1.05);\n}\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.dynamic-session[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  padding-top: 120px;\n  color: white;\n}\n.chapter[_ngcontent-%COMP%]   .paragraph-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.chapter[_ngcontent-%COMP%]   .paragraph-emphasis[_ngcontent-%COMP%] {\n  font-style: italic;\n  text-align: center;\n  color: #e6c36f;\n  letter-spacing: 0.04em;\n  margin: 22px 0;\n}\n.chapter[_ngcontent-%COMP%]   .quote-author[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  font-style: normal;\n  text-align: right;\n  color: rgba(230, 195, 111, 0.8);\n}\n.chapter[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 0.9em;\n  color: #e6c36f;\n  background: rgba(230, 195, 111, 0.1);\n  padding: 0.05em 0.4em;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=styleguide.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleguideComponent, [{
    type: Component,
    args: [{ selector: "app-styleguide", standalone: true, imports: [
      CommonModule,
      SceneBlockComponent,
      DividerBlockComponent,
      NoteBlockComponent,
      SubtitleBlockComponent,
      ListBlockComponent,
      SpacerBlockComponent
    ], template: `<!--
  Galleria degli stili. Usa la stessa struttura di dynamic-session
  (session-layout.css + i componenti story-block), cos\xEC gli esempi
  riflettono esattamente gli stili reali delle sessioni.
-->
<div class="dynamic-session">

    <div class="session-layout">

        <!-- SIDEBAR -->
        <aside class="session-sidebar">

            <div class="sidebar-card">

                <div class="sidebar-title-row">
                    <h3>{{ session.title }}</h3>
                </div>

                <ul>
                    <li *ngFor="let chapter of session.chapters">
                        <a href="" (click)="$event.preventDefault()">{{ chapter.title }}</a>
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

</div>
`, styles: ['/* src/app/shared/styles/session-layout.css */\n.session-layout {\n  display: flex;\n  gap: 20px;\n  padding: 20px clamp(30px, 4vw, 80px) 100px;\n  width: 100%;\n  max-width: 1920px;\n  margin: 0 auto;\n}\n.session-sidebar {\n  width: 340px;\n  min-width: 320px;\n  position: sticky;\n  top: 120px;\n  height: fit-content;\n}\n.sidebar-card {\n  background: linear-gradient(rgba(15, 18, 30, 0.75), rgba(10, 12, 20, 0.85));\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-radius: 18px;\n  padding: 35px;\n  border: 1px solid rgba(230, 195, 111, 0.15);\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(230, 195, 111, 0.05);\n}\n.sidebar-card h3 {\n  margin-bottom: 15px;\n  color: #e6c36f;\n}\n.sidebar-card ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.sidebar-card li {\n  margin-bottom: 10px;\n}\nul {\n  list-style-type: none;\n  padding-left: 0;\n}\nul li::before {\n  content: "\\2726";\n  color: #e6c36f;\n  margin-right: 10px;\n}\n.sidebar-card a {\n  color: #d0d4e0;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n.sidebar-card a:hover {\n  color: #e6c36f;\n}\n.session-content {\n  flex: 1;\n  max-width: 1400px;\n}\n.content-card {\n  background: linear-gradient(rgba(15, 20, 35, 0.75), rgba(10, 12, 22, 0.85));\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  border-radius: 26px;\n  padding: 80px;\n  border: 1px solid rgba(230, 195, 111, 0.12);\n  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.75), inset 0 0 60px rgba(230, 195, 111, 0.04);\n  line-height: 2.05;\n  font-size: 1.08rem;\n  color: #e4e7f2;\n  text-align: justify;\n  font-weight: 200;\n}\n.content-card h3 {\n  margin-top: 60px;\n  margin-bottom: 20px;\n  color: #e6c36f;\n}\n.content-card h2:first-child {\n  margin-top: 0;\n}\n.chapter p {\n  text-align: left;\n}\n.content-card h2 {\n  margin-top: 40px;\n  margin-bottom: 18px;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #e6c36f;\n  border-left: 3px solid rgba(230, 195, 111, 0.6);\n  padding-left: 14px;\n}\n.chapter-blocks {\n  display: block;\n}\n.chapter-image-left {\n  float: left;\n  width: 320px;\n  max-width: none;\n  margin: 10px 40px 20px 0;\n  border-radius: 14px;\n  line-height: normal;\n  display: inline-block;\n}\n.chapter-image-left-small {\n  float: left;\n  width: 100px;\n  max-width: none;\n  margin: 10px 40px 20px 0;\n  border-radius: 14px;\n  line-height: normal;\n  display: inline-block;\n}\n.chapter-image-left-big {\n  float: left;\n  max-width: 100%;\n  height: auto;\n  margin: 10px 40px 20px 0;\n  border-radius: 14px;\n  display: inline-block;\n  line-height: normal;\n}\n.chapter::after {\n  content: "";\n  display: block;\n  clear: both;\n}\n.chapter-title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n}\n.chapter-title-row h2 {\n  margin: 40px 0 18px;\n  flex: 1;\n}\n.chapter-play {\n  width: 38px;\n  height: 38px;\n  border-radius: 999px;\n  border: 1px solid rgba(230, 195, 111, 0.35);\n  background: rgba(230, 195, 111, 0.12);\n  color: rgba(230, 195, 111, 0.95);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.45);\n  transition: transform .15s ease, background .15s ease;\n}\n.chapter-play:hover {\n  transform: translateY(-1px);\n  background: rgba(230, 195, 111, 0.18);\n}\n.video-modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.65);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 28px;\n}\n.video-modal {\n  width: min(1100px, 96vw);\n  border-radius: 22px;\n  border: 1px solid rgba(230, 195, 111, 0.18);\n  background: linear-gradient(rgba(15, 18, 30, 0.92), rgba(10, 12, 20, 0.94));\n  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.75);\n  position: relative;\n  padding: 18px;\n}\n.video-close {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  border: 1px solid rgba(230, 195, 111, 0.25);\n  background: rgba(230, 195, 111, 0.10);\n  color: rgba(230, 195, 111, 0.9);\n  cursor: pointer;\n}\n.video-frame {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  border-radius: 16px;\n  overflow: hidden;\n  margin-top: 18px;\n}\n.video-frame iframe {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.sidebar-title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.sidebar-play {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid rgba(230, 195, 111, 0.35);\n  background: rgba(230, 195, 111, 0.12);\n  color: #e6c36f;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.sidebar-play:hover {\n  background: rgba(230, 195, 111, 0.2);\n  transform: scale(1.05);\n}\n\n/* src/app/features/public/styleguide/styleguide.component.css */\n:host {\n  display: block;\n  width: 100%;\n}\n.dynamic-session {\n  width: 100%;\n  min-height: 100vh;\n  padding-top: 120px;\n  color: white;\n}\n.chapter .paragraph-italic {\n  font-style: italic;\n}\n.chapter .paragraph-emphasis {\n  font-style: italic;\n  text-align: center;\n  color: #e6c36f;\n  letter-spacing: 0.04em;\n  margin: 22px 0;\n}\n.chapter .quote-author {\n  display: block;\n  margin-top: 8px;\n  font-style: normal;\n  text-align: right;\n  color: rgba(230, 195, 111, 0.8);\n}\n.chapter code {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    monospace;\n  font-size: 0.9em;\n  color: #e6c36f;\n  background: rgba(230, 195, 111, 0.1);\n  padding: 0.05em 0.4em;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=styleguide.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StyleguideComponent, { className: "StyleguideComponent", filePath: "src/app/features/public/styleguide/styleguide.component.ts", lineNumber: 33 });
})();
export {
  StyleguideComponent
};
//# sourceMappingURL=chunk-KAVD6UCX.js.map
