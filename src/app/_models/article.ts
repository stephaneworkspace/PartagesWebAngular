import { Section } from './section';
import { TitreMenu } from './titre-menu';
import { SousTitreMenu } from './sous-titre-menu';

export interface Article {
  id: number;
  sousTitreMenuId?: number;
  sousTitreMenu?: SousTitreMenu;
  nom: string;
  contenu: string;
  position: number;
}
