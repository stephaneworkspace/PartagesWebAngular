import { Section } from './section';

export interface Titre {
  id: number;
  section?: Section;
  nom: string;
  position: number;
}
