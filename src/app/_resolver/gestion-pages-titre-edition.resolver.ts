import { Injectable } from '@angular/core';
import { Article } from '../_models/article';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { TitreService } from '../_services/titre.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class GestionPagesTitreEditionResolver implements Resolve<Article> {
    constructor(private titreService: TitreService, private router: Router,
        private alertify: AlertifyService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Article> {
        return this.titreService.getTitre(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('Problème de chargement des données du titre');
                this.router.navigate(['/admin']);
                return of(null);
            })
        );
    }
}
