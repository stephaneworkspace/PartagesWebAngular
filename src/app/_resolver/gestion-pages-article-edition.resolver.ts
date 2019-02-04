import {Injectable} from '@angular/core';
import { Article } from '../_models/article';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { ArticleService } from '../_services/article.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class GestionPagesArticleEditionResolver implements Resolve<Article> {
    constructor(private userService: ArticleService, private router: Router,
        private alertify: AlertifyService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Article> {
        return this.userService.getArticle(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('Problème de chargement des données de l\'article');
                this.router.navigate(['/admin']);
                return of(null);
            })
        );
    }
}
