import { StoryBlock } from '../../core/models/story-block.model';

export interface ArchivioIndice {
  cartelle: ArchivioCartella[];
}

export interface ArchivioCartella {
  id: string;
  nome: string;
  sottocartelle: ArchivioCartella[];
  voci: ArchivioVoceMeta[];
}

export interface ArchivioVoceMeta {
  id: string;
  titolo: string;
}

export interface ArchivioVoce {
  id: string;
  titolo: string;
  blocks: StoryBlock[];
}
