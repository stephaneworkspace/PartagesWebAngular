import { TitreMenu } from './titre-menu';

export interface Section {
    id?: number;
    nom: string;
    icone?: string; // optional dans DTO selectbox
    type?: string; // n'est pas envoyé par le dto dans GetSetions()
    position?: number;
    swHorsLigne?: boolean; // optional dans DTO selectbox
    titreMenus?: TitreMenu[]; // optional dans DTO selectbox
    swMouseOver?: boolean; // Champ virtuel
}
