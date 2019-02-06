import { Injectable } from '@angular/core';
import { Section } from '../_models/section';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { SectionService } from '../_services/section.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GestionPagesSectionSelectResolver implements Resolve<Section> {
    constructor(private sectionService: SectionService, private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Section> {
        return this.sectionService.getSections().pipe(
            catchError(error => {
                this.alertify.error('Problème de chargement de la liste de sélection des sections');
                this.router.navigate(['/admin']);
                return of(null);
            })
        );
    }
}
