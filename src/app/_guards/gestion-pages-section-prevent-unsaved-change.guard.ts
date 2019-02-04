import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditionSectionComponent } from '../admin/gestion-pages/edition-section/edition-section.component';

@Injectable()
export class GestionPagesSectionPreventUnsavedChangesGuard implements CanDeactivate<EditionSectionComponent> {
    canDeactivate(component: EditionSectionComponent) {
        if (component.editForm.dirty) {
            // tslint:disable-next-line:max-line-length
            return confirm('Êtes-vous sur de vouloir continuer sans sauvegarder les modifications des données de la section ? Tous changements sera alors perdu');
        }
        return true;
    }
}
