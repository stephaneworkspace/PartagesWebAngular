import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditionArticleComponent } from '../admin/gestion-pages/edition-article/edition-article.component';
import { EditionSectionComponent } from '../admin/gestion-pages/edition-section/edition-section.component';

@Injectable()
export class GestionPagesSectionPreventUnsavedChangesGuard implements CanDeactivate<EditionArticleComponent> {
    canDeactivate(component: EditionSectionComponent) {
        if (component.editionArticleForm.dirty) {
            return confirm('Êtes-vous sur de vouloir continuer sans sauvegarder les modifications des données de la section ? Tous changements sera alors perdu');
        }
        return true;
    }
}
