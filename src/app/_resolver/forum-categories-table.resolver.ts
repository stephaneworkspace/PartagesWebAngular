import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ForumCategorie } from '../_models/Forum/forum-categorie';
import { ForumCategorieService } from '../_services/forum/forum-categorie.service';

@Injectable()
export class ForumCategoriesTableResolver implements Resolve<ForumCategorie[]> {
    constructor(
        private forumCategorieService: ForumCategorieService,
        private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ForumCategorie[]> {
        return this.forumCategorieService.getForumCategories().pipe(
            catchError(error => {
                // tslint:disable-next-line:max-line-length
                this.alertify.error('Problème de chargement des catégories du forum');
                this.router.navigate(['/']);
                return of(null);
            })
        );
    }
}
