/**
 * Campagna: elenco alimentato dall'API (GET /api/campagne), non più
 * hardcoded — vedi CampagnaService. Lo slug resta lo stesso segmento
 * usato dalle rotte di Archivi/Sessioni.
 */
export interface Campagna {
  slug: string;
  nome: string;
  descrizione?: string | null;
  immagineUrl?: string | null;
  landId?: string | null;
  landSlug?: string | null;
  masterUserId: string;
  masterNickname: string;
}
