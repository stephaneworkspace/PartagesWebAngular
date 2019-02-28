import { Injectable } from '@angular/core';
import { Section } from '../_models/section';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { SectionService } from '../_services/section.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TitreMenuService } from '../_services/titre-menu.service';
import { TitreMenu } from '../_models/titre-menu';

@Injectable()
export class GestionPagesTitreMenuSelectBoxResolver implements Resolve<TitreMenu[]> {
    constructor(
        private titreMenuService: TitreMenuService,
        private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<TitreMenu[]> {
        return this.titreMenuService.getTitreMenus().pipe(
            catchError(error => {
                this.alertify.error('Problème de chargement de la liste de sélection des titres de menus');
                this.router.navigate(['/admin']);
                return of(null);
            })
        );
    }
}
