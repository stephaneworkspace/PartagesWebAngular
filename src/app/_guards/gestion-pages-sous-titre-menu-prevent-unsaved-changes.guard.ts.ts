import { EditionSousTitreMenuComponent } from '../admin/gestion-pages/edition-sous-titre-menu/edition-sous-titre-menu.component';
import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class GestionPagesSousTitreMenuPreventUnsavedChangesGuard implements CanDeactivate<EditionSousTitreMenuComponent> {
    canDeactivate(component: EditionSousTitreMenuComponent) {
        if (component.editionSousTitreMenuForm.dirty) {
            // tslint:disable-next-line:max-line-length
            return confirm('Êtes-vous sur de vouloir continuer sans sauvegarder les modifications des données du titre ? Tous changements sera alors perdu');
        }
        return true;
    }
}
