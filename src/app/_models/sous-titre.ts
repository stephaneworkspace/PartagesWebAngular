import { Section } from './section';
import { Titre } from './titre';

export interface SousTitre {
  id: number;
  section?: Section;
  titre?: Titre;
  nom: string;
  position: number;
}
