import { Injectable } from '@angular/core';
import { TitreMenu } from '../_models/titre-menu';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { TitreMenuService } from '../_services/titre-menu.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class GestionPagesTitreMenuEditionResolver implements Resolve<TitreMenu> {
    constructor(private titreMenuService: TitreMenuService, private router: Router,
        private alertify: AlertifyService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<TitreMenu> {
        return this.titreMenuService.getTitreMenu(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Problème de chargement des données du titre du menu');
                this.router.navigate(['/admin']);
                return of(null);
            })
        );
    }
}
