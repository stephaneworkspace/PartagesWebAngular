import { Section } from './section';
import { TitreMenu } from './titre-menu';
import { Article } from './article';

export interface SousTitreMenu {
  id: number;
  titreMenuId?: number;
  titreMenu?: TitreMenu;
  nom: string;
  position: number;
  articles?: Article[]; // optional (dans DTO selectbox)
                        // *Note* 7 mars je ne comprend pas mais j'utilise pour le modal supression  
  swMouseOver?: boolean; // Champ virtuel
}
