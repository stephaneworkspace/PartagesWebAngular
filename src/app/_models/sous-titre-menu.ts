import { Section } from './section';
import { TitreMenu } from './titre-menu';

export interface SousTitreMenu {
  id: number;
  section?: Section;
  titreMenu?: TitreMenu;
  nom: string;
  position: number;
  swMouseOver?: boolean; // Champ virtuel
}
