import { ForumCategorie } from './forum-categorie';

export interface ForumSujet {
    id: number;
    forumCategorieId: number;
    forumCategorie: ForumCategorie;
    nom: string;
    date: Date;
    view: number;
    countPoste?: number;
}