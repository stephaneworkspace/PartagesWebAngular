import { Injectable, OnInit } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ForumSujet } from '../_models/Forum/forum-sujet';
import { ForumSujetService } from '../_services/forum/forum-sujet.service';

@Injectable()
export class ForumSujetDivResolver implements Resolve<ForumSujet> {
    constructor(
        private forumSujetService: ForumSujetService,
        private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ForumSujet> {
        return this.forumSujetService.getForumSujet(route.params['forumSujetId']).pipe(
            catchError(error => {
                this.alertify.error('Problème de chargement du sujet «' + route.params['forumSujetId'] + '» du forum');
                this.router.navigate(['/']);
                return of(null);
            })
        );
    }
}
