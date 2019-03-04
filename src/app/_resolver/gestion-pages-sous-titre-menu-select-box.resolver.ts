import { Injectable } from '@angular/core';
import { Section } from '../_models/section';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { SectionService } from '../_services/section.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SousTitreMenuService } from '../_services/sous-titre-menu.service';
import { SousTitreMenu } from '../_models/sous-titre-menu';

@Injectable()
export class GestionPagesSousTitreMenuSelectBoxResolver implements Resolve<SousTitreMenu[]> {
    constructor(
        private sousTitreMenuService: SousTitreMenuService,
        private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<SousTitreMenu[]> {
        return this.sousTitreMenuService.getSousTitreMenus().pipe(
            catchError(error => {
                this.alertify.error('Problème de chargement de la liste de sélection des titres de menus');
                this.router.navigate(['/admin']);
                return of(null);
            })
        );
    }
}
