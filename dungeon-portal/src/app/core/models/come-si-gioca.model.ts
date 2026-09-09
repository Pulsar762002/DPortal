import { StoryBlock } from './story-block.model';

export interface ComeSiGiocaIndice {
  categorie: ComeSiGiocaCategoria[];
  argomenti: ComeSiGiocaArgomentoMeta[];
}

/** Una categoria di argomenti, mostrata come tab nella pagina "Come si gioca". */
export interface ComeSiGiocaCategoria {
  id: string;
  titolo: string;
}

/** Metadati di un argomento (per la card nella pagina lista): niente blocks. */
export interface ComeSiGiocaArgomentoMeta {
  id: string;
  titolo: string;
  immagine: string;
  categoria: string;
  sommario?: string;
}

/** Un argomento completo: una card con immagine quadrata + titolo, e una pagina di dettaglio in stile cronache. */
export interface ComeSiGiocaArgomento {
  id: string;
  titolo: string;
  immagine: string;
  categoria: string;
  sommario?: string;
  blocks: StoryBlock[];
}
