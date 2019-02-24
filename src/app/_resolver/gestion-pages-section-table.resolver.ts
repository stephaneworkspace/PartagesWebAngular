import { Injectable } from '@angular/core';
import { Section } from '../_models/section';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { SectionService } from '../_services/section.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GestionPagesSectionTableResolver implements Resolve<Section[]> {
    constructor(
        private sectionService: SectionService,
        private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Section[]> {
        return this.sectionService.getSections().pipe(
            catchError(error => {
                // tslint:disable-next-line:max-line-length
                this.alertify.error('Problème de chargement de l\'arbre "sections - titres menus - sous titre menus - articles" de gestion pages');
                this.router.navigate(['/']);
                return of(null);
            })
        );
    }
}
