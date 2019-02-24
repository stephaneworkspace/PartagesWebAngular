import { TitreMenu } from './titre-menu';

export interface Section {
    id?: number;
    nom: string;
    icone: string;
    type?: string; // n'est pas envoyé par le dto dans GetSetions()
    position?: number;
    swHorsLigne: boolean;
    titreMenus: TitreMenu[];
    swMouseOver?: boolean; // Champ virtuel
}
