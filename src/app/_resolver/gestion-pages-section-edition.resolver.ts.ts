import { Injectable } from '@angular/core';
import { Section } from '../_models/section';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { SectionService } from '../_services/section.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class GestionPagesSectionEditionResolver implements Resolve<Section> {
    constructor(private sectionService: SectionService, private router: Router,
        private alertify: AlertifyService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Section> {
        return this.sectionService.getSection(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('Problème de chargement des données de la section');
                this.router.navigate(['/admin']);
                return of(null);
            })
        );
    }
}
