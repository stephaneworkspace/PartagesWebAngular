import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditionTitreComponent } from '../admin/gestion-pages/edition-titre/edition-titre.component';

@Injectable()
export class GestionPagesTitrePreventUnsavedChangesGuard implements CanDeactivate<EditionTitreComponent> {
    canDeactivate(component: EditionTitreComponent) {
        if (component.editionTitreForm.dirty) {
            // tslint:disable-next-line:max-line-length
            return confirm('Êtes-vous sur de vouloir continuer sans sauvegarder les modifications des données du titre ? Tous changements sera alors perdu');
        }
        return true;
    }
}
