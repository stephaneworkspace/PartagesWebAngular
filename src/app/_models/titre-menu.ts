import { Section } from './section';
import { SousTitreMenu } from './sous-titre-menu';

export interface TitreMenu {
  id?: number;
  sectionId?: number;
  section?: Section;
  nom: string;
  position?: number;
  sousTitreMenus?: SousTitreMenu[]; // optional (dans DTO selectbox) 
                                    // *Note* 7 mars je ne comprend pas mais j'utilise pour le modal supression
  swMouseOver?: boolean; // Champ virtuel
}