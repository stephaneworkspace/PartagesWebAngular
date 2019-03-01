import { Section } from './section';
import { TitreMenu } from './titre-menu';

export interface SousTitreMenu {
  id: number;
  titreMenuId?: number;
  titreMenu?: TitreMenu;
  nom: string;
  position: number;
  swMouseOver?: boolean; // Champ virtuel
}
