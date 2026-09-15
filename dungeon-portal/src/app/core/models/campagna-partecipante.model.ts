export interface CampagnaPartecipante {
  userId: string;
  nickname: string;
  email: string;
  tipo: 'GIOCATORE' | 'INVITATO' | 'MASTER';
}
