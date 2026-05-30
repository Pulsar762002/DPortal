export interface BaseBlock {
    id?: string;
    type: string;
    variant?: string;
}

export interface ParagraphBlock extends BaseBlock {
    type: 'paragraph';
    text: string;
}

export interface QuoteBlock extends BaseBlock {
    type: 'quote';
    text: string;
}
export interface ImageBlock extends BaseBlock {
    type: 'image';
    variant:
        | 'left'
        | 'left-small'
        | 'left-big'
        | 'center';
    src: string;
    alt?: string;
}

/**
 * Scena "establishing shot": immagine a tutta larghezza con titolo
 * (e sottotitolo) sovrimpressi. Pensata per aprire una scena in modo
 * cinematografico. Da autore basta src + title.
 */
export interface SceneBlock extends BaseBlock {
    type: 'scene';
    src: string;
    title?: string;
    subtitle?: string;
    alt?: string;
}

/**
 * Separatore ornamentale tra una scena e l'altra. Solo decorativo.
 * variant sceglie il decoro centrale (default: flourish).
 */
export interface DividerBlock extends BaseBlock {
    type: 'divider';
    variant?: 'flourish' | 'rune' | 'plain';
}

/**
 * Nota del Master: riquadro "aside" per lore o voce fuori campo del
 * narratore, con stile distinto dal corpo del testo. `text` può contenere
 * HTML (reso come i paragrafi). `title` sovrascrive l'etichetta.
 */
export interface NoteBlock extends BaseBlock {
    type: 'note';
    text: string;
    title?: string;
}

export type StoryBlock =
  | ParagraphBlock
  | QuoteBlock
  | ImageBlock
  | SceneBlock
  | DividerBlock
  | NoteBlock;