import { Section } from './section';

export interface TitreMenu {
  id: number;
  section?: Section;
  nom: string;
  position: number;
}
