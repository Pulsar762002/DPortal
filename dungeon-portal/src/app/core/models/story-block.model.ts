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

export type StoryBlock =
  | ParagraphBlock
  | QuoteBlock
  | ImageBlock;