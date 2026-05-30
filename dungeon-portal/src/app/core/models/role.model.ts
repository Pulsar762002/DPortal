/**
 * Fonte di verità unica per i ruoli utente.
 * I valori canonici sono in MAIUSCOLO e devono combaciare con quelli
 * emessi dal backend (User.Role) e dai claim JWT.
 */
export const ROLES = {
  User: 'USER',
  Master: 'MASTER',
  Admin: 'ADMIN',
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

/**
 * Verifica (case-insensitive) se `userRole` corrisponde a uno dei ruoli ammessi.
 * Il confronto normalizza il casing per non dipendere da come il ruolo è scritto.
 */
export function hasAnyRole(
  userRole: string | null | undefined,
  allowed: Role[]
): boolean {
  if (!userRole) return false;
  const normalized = userRole.toUpperCase();
  return allowed.includes(normalized as Role);
}
