import { User } from './user';

export interface Messagerie {
    id: number;
    userId?: number;
    user?: User;
    sendByUserId?: number;
    sendByUser: User;
    date: Date;
    contenu: string;
    swLu: boolean;
}