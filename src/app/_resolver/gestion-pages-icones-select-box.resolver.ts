import { Injectable } from '@angular/core';
import { Section } from '../_models/section';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { IconeService } from '../_services/icone.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';
import { Icone } from '../_models/icone';

@Injectable()
export class GestionPagesIconesSelectBoxResolver implements Resolve<Icone[]> {
    constructor(
        private iconeService: IconeService,
        private router: Router,
        private alertify: AlertifyService,
        private authService: AuthService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Icone[]> {
        return this.iconeService.getIcones().pipe(
                catchError(error => {
                    this.alertify.error('Problème de chargement de la liste des icones');
                    this.router.navigate(['/admin']);
                    return of(null);
            })
        );
    }
}

