import { Injectable } from '@angular/core';
import { Section } from '../_models/section';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { TitreMenuService } from '../_services/titre-menu.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GestionPagesTitreMenuSelectResolver implements Resolve<Section> {
    constructor(private titreMenuService: TitreMenuService, private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Section> {
        // Ici il faut faire de l'ajax avec l'id de section
        return this.titreMenuService.getTitreMenus().pipe(
            catchError(error => {
                this.alertify.error('Problème de chargement de la liste des titres');
                this.router.navigate(['/admin']);
                return of(null);
            })
        );
    }
}
