import { Section } from './section';
import { TitreMenu } from './titre-menu';
import { SousTitreMenu } from './sous-titre-menu';

export interface Article {
  id: number;
  section?: Section;
  titreMenu?: TitreMenu;
  sousTitreMenu?: SousTitreMenu;
  nom: string;
  article: string;
  position: number;
}
