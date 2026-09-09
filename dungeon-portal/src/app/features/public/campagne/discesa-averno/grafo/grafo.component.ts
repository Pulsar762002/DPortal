import { Component, OnInit, OnDestroy, ViewChild, ElementRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CampagnaDataService, Personaggio, CategoriaPersonaggio } from '../campagna-data.service';

interface GNode {
  id: string;
  nome: string;
  categoria: CategoriaPersonaggio;
  x: number;
  y: number;
  r: number;
  grado: number;
}

interface GEdge {
  a: GNode;
  b: GNode;
  ai: number;
  bi: number;
  tipo: string;
}

interface DragState {
  startX: number;
  startY: number;
  startVbX: number;
  startVbY: number;
  startVbW: number;
  startVbH: number;
  rectW: number;
  rectH: number;
}

@Component({
  selector: 'app-grafo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grafo.component.html',
  styleUrl: './grafo.component.css',
})
export class GrafoComponent implements OnInit, OnDestroy {
  nodi: GNode[] = [];
  archi: GEdge[] = [];

  vbX = 0;
  vbY = 0;
  vbW = 1000;
  vbH = 1000;
  get viewBox(): string {
    return `${this.vbX.toFixed(1)} ${this.vbY.toFixed(1)} ${this.vbW.toFixed(1)} ${this.vbH.toFixed(1)}`;
  }

  /** 'ok' = grafo pronto, 'err' = errore di caricamento; null (nessun emit) = in caricamento. */
  stato$!: Observable<'ok' | 'err'>;

  hoveredId: string | null = null;
  hoveredArco: GEdge | null = null;
  dragStart: DragState | null = null;
  private moved = false;
  private vicini = new Set<string>();
  private _svgEl: SVGSVGElement | null = null;

  readonly colori: Record<string, string> = {
    party: '#f4a261',
    alleato: '#2a9d8f',
    secondario: '#e9c46a',
    avversario: '#e63946',
  };

  readonly legenda = [
    { cat: 'party', label: 'Party (PG)' },
    { cat: 'alleato', label: 'Alleati' },
    { cat: 'secondario', label: 'Secondari' },
    { cat: 'avversario', label: 'Avversari' },
  ];

  private readonly categoriaAnchor: Record<CategoriaPersonaggio, string> = {
    party: 'principali',
    alleato: 'alleati',
    secondario: 'secondari',
    avversario: 'minori',
  };

  // Wheel listener come arrow function per poterla rimuovere con removeEventListener.
  private handleWheel = (e: WheelEvent): void => {
    e.preventDefault();
    const rect = this._svgEl!.getBoundingClientRect();
    const rx = (e.clientX - rect.left) / rect.width;
    const ry = (e.clientY - rect.top) / rect.height;
    const cx = this.vbX + rx * this.vbW;
    const cy = this.vbY + ry * this.vbH;
    const factor = e.deltaY > 0 ? 1.15 : 1 / 1.15;
    this.vbW *= factor;
    this.vbH *= factor;
    this.vbX = cx - rx * this.vbW;
    this.vbY = cy - ry * this.vbH;
  };

  // ViewChild setter: il SVG appare dopo *ngIf, non prima — ngAfterViewInit sarebbe troppo presto.
  @ViewChild('svgEl')
  set svgElRef(ref: ElementRef<SVGSVGElement> | undefined) {
    if (this._svgEl && typeof window !== 'undefined') {
      this._svgEl.removeEventListener('wheel', this.handleWheel);
    }
    this._svgEl = ref?.nativeElement ?? null;
    if (this._svgEl && typeof window !== 'undefined') {
      this._svgEl.addEventListener('wheel', this.handleWheel, { passive: false });
    }
  }

  constructor(
    private dati: CampagnaDataService,
    private router: Router,
    private zone: NgZone,
  ) {}

  ngOnInit(): void {
    this.stato$ = this.dati.getPersonaggi().pipe(
      map(personaggi => {
        this.costruisciGrafo(personaggi);
        this.layoutForzaDiretta();
        this.adattaViewBox();
        return 'ok' as const;
      }),
      catchError(err => {
        console.error('Grafo: errore nel caricamento di personaggi.json', err);
        return of('err' as const);
      })
    );
  }

  ngOnDestroy(): void {
    if (this._svgEl && typeof window !== 'undefined') {
      this._svgEl.removeEventListener('wheel', this.handleWheel);
    }
  }

  colore(cat: string): string {
    return this.colori[cat] ?? '#888';
  }

  // ---------- costruzione grafo ----------
  private costruisciGrafo(personaggi: Personaggio[]): void {
    const indice = new Map<string, number>();
    this.nodi = personaggi.map((p, i) => {
      indice.set(p.id, i);
      return {
        id: p.id,
        nome: p.nome,
        categoria: p.categoria,
        x: 0,
        y: 0,
        r: 6,
        grado: 0,
      };
    });

    const visti = new Set<string>();
    const archi: GEdge[] = [];
    for (const p of personaggi) {
      const ai = indice.get(p.id)!;
      for (const c of p.correlazioni ?? []) {
        const bi = indice.get(c.personaggio);
        if (bi === undefined || bi === ai) {
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
      n.r = 6 + Math.min(n.grado, 16) * 1.0 + (n.categoria === 'party' ? 3 : 0);
    }
  }

  // ---------- layout Fruchterman-Reingold (deterministico) ----------
  private layoutForzaDiretta(): void {
    const W = 1800;
    const H = 1100;
    const cx = W / 2;
    const cy = H / 2;
    const margine = 50;

    const sim = this.nodi.filter(n => n.grado > 0);
    const isolati = this.nodi.filter(n => n.grado === 0);
    const N = sim.length;

    let seed = 1337;
    const rnd = () => {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return seed / 0x7fffffff;
    };

    if (N) {
      const k = Math.sqrt((W * H) / N) * 0.85;
      const idx = new Map<GNode, number>();
      sim.forEach((n, i) => {
        idx.set(n, i);
        const ang = (i / N) * Math.PI * 2;
        const rad = 280 + rnd() * 260;
        n.x = cx + Math.cos(ang) * rad + (rnd() - 0.5) * 50;
        n.y = cy + Math.sin(ang) * rad + (rnd() - 0.5) * 50;
      });

      const iters = 420;
      let t = W * 0.12;
      const dx = new Array<number>(N).fill(0);
      const dy = new Array<number>(N).fill(0);

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
            const f = (k * k) / d;
            vx = (vx / d) * f;
            vy = (vy / d) * f;
            dx[i] += vx;
            dy[i] += vy;
            dx[j] -= vx;
            dy[j] -= vy;
          }
        }
        for (const e of this.archi) {
          const i = idx.get(e.a)!;
          const j = idx.get(e.b)!;
          let vx = sim[i].x - sim[j].x;
          let vy = sim[i].y - sim[j].y;
          const d = Math.sqrt(vx * vx + vy * vy) || 0.01;
          const f = (d * d) / k;
          vx = (vx / d) * f;
          vy = (vy / d) * f;
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
          sim[i].x = Math.max(margine, Math.min(W - margine, sim[i].x + (dx[i] / d) * cap));
          sim[i].y = Math.max(margine, Math.min(H - margine, sim[i].y + (dy[i] / d) * cap));
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
        n.x = minX + (i % perRiga) * gapX;
        n.y = top + Math.floor(i / perRiga) * 60;
      });
    }
  }

  private adattaViewBox(): void {
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
    this.vbX = minX - pad;
    this.vbY = minY - pad;
    this.vbW = maxX - minX + pad * 2;
    this.vbH = maxY - minY + pad * 2;
  }

  // ---------- pan ----------
  onMouseDown(e: MouseEvent): void {
    if (e.button !== 0) return;
    const rect = (e.currentTarget as SVGSVGElement).getBoundingClientRect();
    this.dragStart = {
      startX: e.clientX,
      startY: e.clientY,
      startVbX: this.vbX,
      startVbY: this.vbY,
      startVbW: this.vbW,
      startVbH: this.vbH,
      rectW: rect.width,
      rectH: rect.height,
    };
    this.moved = false;
    if (typeof window === 'undefined') return;

    const onMove = (ev: MouseEvent): void => {
      if (!this.dragStart) return;
      const d = Math.hypot(ev.clientX - this.dragStart.startX, ev.clientY - this.dragStart.startY);
      if (d > 4) this.moved = true;
      this.zone.run(() => {
        if (!this.dragStart) return;
        const dx = ((ev.clientX - this.dragStart.startX) / this.dragStart.rectW) * this.dragStart.startVbW;
        const dy = ((ev.clientY - this.dragStart.startY) / this.dragStart.rectH) * this.dragStart.startVbH;
        this.vbX = this.dragStart.startVbX - dx;
        this.vbY = this.dragStart.startVbY - dy;
      });
    };
    const onUp = (): void => {
      this.zone.run(() => {
        this.dragStart = null;
      });
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }

  // ---------- interazione nodi ----------
  onHover(n: GNode | null): void {
    if (this.dragStart) return;
    this.hoveredId = n ? n.id : null;
    this.hoveredArco = null;
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

  onClickNodo(n: GNode): void {
    if (this.moved) return;
    this.router.navigate(['/campagne/discesa-averno/personaggi'], {
      fragment: this.categoriaAnchor[n.categoria],
    });
  }

  // ---------- interazione archi ----------
  onHoverArco(e: GEdge | null): void {
    if (this.dragStart) return;
    this.hoveredArco = e;
  }

  nodoAttivo(id: string): boolean {
    return !this.hoveredId || this.hoveredId === id || this.vicini.has(id);
  }

  arcoAttivo(e: GEdge): boolean {
    return !this.hoveredId || e.a.id === this.hoveredId || e.b.id === this.hoveredId;
  }

  mostraLabel(n: GNode): boolean {
    return (
      n.categoria === 'party' ||
      n.grado >= 8 ||
      n.grado === 0 ||
      this.hoveredId === n.id ||
      this.vicini.has(n.id)
    );
  }
}
