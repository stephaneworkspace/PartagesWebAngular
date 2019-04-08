import { ForumPoste } from './forum-poste';

export interface ForumCategorie {
  id: number;
  nom: string;
  countSujet: number;
  countPoste: number;
  dernierPoste?: ForumPoste;
  countDernierPoste?: number;
  pageDernierPoste?: number;
  swMouseOver?: boolean; // Champ virtuel
  // dernierPoste: ForumPoste;
  // position: number; // amélioration au futur
  // description // amélioration au futur
}
