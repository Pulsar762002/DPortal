/**
 * Personaggio giocante di un utente (GET /api/personaggi/...). Un utente può
 * averne più d'uno, nella stessa campagna o in campagne diverse; la campagna
 * è facoltativa. Il nickname dell'utente resta l'alias del giocatore.
 */
export interface Personaggio {
  id: string;
  userId: string;
  nickname: string;
  nome: string;
  classe?: string | null;
  razza?: string | null;
  livello?: number | null;
  descrizione?: string | null;
  avatarUrl?: string | null;
  campagnaSlug?: string | null;
  campagnaNome?: string | null;
}

/** Dati inviati in create/update (multipart, insieme all'eventuale immagine). */
export interface PersonaggioInput {
  nome: string;
  classe?: string | null;
  razza?: string | null;
  livello?: number | null;
  descrizione?: string | null;
  campagnaSlug?: string | null;
  /** Solo master/admin: crea il PG per un altro utente. */
  userId?: string | null;
}
