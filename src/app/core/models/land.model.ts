export interface Land {
  id: string;
  slug: string;
  nome: string;
}

export interface LandMasterInfo {
  userId: string;
  nickname: string;
  isPrincipale: boolean;
}

export interface LandCampagnaInfo {
  slug: string;
  nome: string;
  descrizione?: string | null;
}

export interface LandDetail {
  id: string;
  slug: string;
  nome: string;
  lore?: string | null;
  mapImageUrl?: string | null;
  masters: LandMasterInfo[];
  campagne: LandCampagnaInfo[];
}
