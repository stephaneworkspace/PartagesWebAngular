import { Injectable, OnInit } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ForumPoste } from '../_models/Forum/forum-poste';
import { ForumPosteService } from '../_services/forum/forum-poste.service';

@Injectable()
export class ForumPosteDivResolver implements Resolve<ForumPoste> {
    constructor(
        private forumPosteService: ForumPosteService,
        private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ForumPoste> {
        return this.forumPosteService.getForumPoste(route.params['forumPosteId']).pipe(
            catchError(error => {
                this.alertify.error('Problème de chargement du poste «' + route.params['forumPosteId'] + '» du forum');
                this.router.navigate(['/']);
                return of(null);
            })
        );
    }
}
