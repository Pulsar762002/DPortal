import { StoryBlock } from './story-block.model';

/** Una categoria di argomenti, mostrata come tab nella pagina "Come si gioca". */
export interface ComeSiGiocaCategoria {
  slug: string;
  titolo: string;
}

/** Un argomento: una card con immagine quadrata + titolo, e una pagina di dettaglio in stile cronache. */
export interface ComeSiGiocaArgomento {
  slug: string;
  titolo: string;
  immagine: string;
  categoria: string;
  sommario?: string;
  blocks: StoryBlock[];
}

/** Contenuto del file assets/data/<mondo>/campagne/<slug>/come-si-gioca.json */
export interface ComeSiGiocaFile {
  categorie: ComeSiGiocaCategoria[];
  argomenti: ComeSiGiocaArgomento[];
}
