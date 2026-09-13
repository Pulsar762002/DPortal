/**
 * Master: elenco alimentato dall'API (GET /api/users/masters), pubblico
 * e senza autenticazione — vedi MasterService.
 */
export interface Master {
  id: string;
  nickname: string;
  avatarUrl?: string | null;
  campagne: { slug: string; nome: string }[];
}
