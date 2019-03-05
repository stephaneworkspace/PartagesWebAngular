import { Section } from 'src/app/_models/section';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';
import { Article } from 'src/app/_models/article';

export interface DtoAdminGestionPagesTable {
  section: Section;
  titreMenu?: TitreMenu;
  sousTitreMenu?: SousTitreMenu;
  article?: Article;
}
