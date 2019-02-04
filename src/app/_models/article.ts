import { Section } from './section';
import { Titre } from './titre';
import { SousTitre } from './sous-titre';

export interface Article {
  id: number;
  section?: Section;
  titre?: Titre;
  sousTitre?: SousTitre;
  nom: string;
  article: string;
  position: number;
}
