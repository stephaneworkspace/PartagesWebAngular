import { Injectable, OnInit } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ForumPoste } from '../_models/Forum/forum-poste';
import { ForumCategorie } from '../_models/Forum/forum-categorie';
import { ForumCategorieService } from '../_services/forum/forum-categorie.service';

@Injectable()
export class ForumCategorieDivResolver implements Resolve<ForumCategorie> {
    constructor(
        private forumCategorieService: ForumCategorieService,
        private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ForumCategorie> {
        return this.forumCategorieService.getForumCategorie(route.params['forumCategorieId']).pipe(
            catchError(error => {
                this.alertify.error('Problème de chargement de la catégorie «' + route.params['forumCategorieId'] + '» du forum');
                this.router.navigate(['/']);
                return of(null);
            })
        );
    }
}
