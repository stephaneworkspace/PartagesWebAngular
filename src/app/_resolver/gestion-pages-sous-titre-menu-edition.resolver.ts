import { Injectable } from '@angular/core';
import { Article } from '../_models/article';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { SousTitreMenuService } from '../_services/sous-titre-menu.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class GestionPagesSousTitreMenuEditionResolver implements Resolve<Article> {
    constructor(private sousTitreService: SousTitreMenuService, private router: Router,
        private alertify: AlertifyService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Article> {
        return this.sousTitreService.getSousTitreMenu(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('Problème de chargement des données du sous titre du menu');
                this.router.navigate(['/admin']);
                return of(null);
            })
        );
    }
}