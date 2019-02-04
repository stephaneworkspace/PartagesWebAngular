import {Injectable} from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditionArticleComponent } from '../admin/gestion-pages/edition-article/edition-article.component';

@Injectable()
export class GestionPagesArticlePreventUnsavedChangesGuard implements CanDeactivate<EditionArticleComponent> {
    canDeactivate(component: EditionArticleComponent) {
        if (component.editionArticleForm.dirty) {
            // tslint:disable-next-line:max-line-length
            return confirm('Êtes-vous sur de vouloir continuer sans sauvegarder les modifications des données de l\'article ? Tous changements sera alors perdu');
        }
        return true;
    }
}
