import { TitreMenu } from './titre-menu';

export interface Section {
    id?: number;
    nom: string;
    icone: string;
    type: string;
    position?: number;
    swHorsLigne: boolean;
    titreMenus: TitreMenu[];
}
