import { Section } from './section';

export interface TitreMenu {
  id: number;
  sectionId?: number;
  nom: string;
  swHorsLigne?: boolean; // Dto pour créer depuis front end, le back end ne retourne pas ce champ, il faut analiser sectionId
  position?: number;
  swMouseOver?: boolean; // Champ virtuel
}
