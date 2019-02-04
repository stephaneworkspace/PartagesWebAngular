import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditionTitreMenuComponent } from '../admin/gestion-pages/edition-titre-menu/edition-titre-menu.component';

@Injectable()
export class GestionPagesTitreMenuPreventUnsavedChangesGuard implements CanDeactivate<EditionTitreMenuComponent> {
    canDeactivate(component: EditionTitreMenuComponent) {
        if (component.editionTitreForm.dirty) {
            // tslint:disable-next-line:max-line-length
            return confirm('Êtes-vous sur de vouloir continuer sans sauvegarder les modifications des données du titre ? Tous changements sera alors perdu');
        }
        return true;
    }
}
