import { Section } from './section';

export interface TitreMenu {
  id: number;
  sectionId?: number;
  nom: string;
  position?: number;
  swMouseOver?: boolean; // Champ virtuel
}
