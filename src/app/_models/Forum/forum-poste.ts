import { User } from '../user';
import { ForumSujet } from './forum-sujet';

export interface ForumPoste {
    id: number;
    forumSujetId: number;
    forumSujet: ForumSujet;
    userId: number;
    user: User;
    date: Date;
    contenu: string;
    // virtual
    swCurrentUser: boolean;
}
