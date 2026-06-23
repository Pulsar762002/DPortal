/**
 * Fonte di verità unica per le campagne esistenti. Oggi non c'è un backend
 * dedicato alle campagne come entità (a differenza di Archivi/Sessioni, che
 * sono scoped per campagna via slug): l'elenco è statico finché non ne nasce
 * una seconda.
 */
export interface Campagna {
  slug: string;
  nome: string;
}

export const CAMPAGNE: Campagna[] = [
  { slug: 'discesa-averno', nome: "Discesa nell'Averno" }
];
