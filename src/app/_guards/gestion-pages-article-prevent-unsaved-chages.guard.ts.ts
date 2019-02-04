import {Injectable} from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditionArticleComponent } from '../admin/gestion-pages/edition-article/edition-article.component';

@Injectable()
export class GestionPagesArticlePreventUnsavedChanges implements CanDeactivate<EditionArticleComponent> {
    canDeactivate(component: EditionArticleComponent) {
        if (component.editionArticleForm.dirty) {
            return confirm('Are you sure you want to continue?  Any unsaved changes will be lost');
        }
        return true;
    }
}
