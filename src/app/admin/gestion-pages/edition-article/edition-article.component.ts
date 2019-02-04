import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ArticleService } from 'src/app/_services/article.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Article } from 'src/app/_models/article';

@Component({
  selector: 'app-edition-article',
  templateUrl: './edition-article.component.html',
  styleUrls: ['./edition-article.component.scss']
})
export class EditionArticleComponent implements OnInit {
  // Voir guards, 4 février 2019 je ne l'ai pas testé
  @ViewChild('editionArticleForm') editionArticleForm: NgForm;
  article: Article;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editionArticleForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
      private route: ActivatedRoute,
      private alertify: AlertifyService,
      private articleService: ArticleService,
      private authService: AuthService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.article = data['article'];
    });
  }

  updateArticle() {
    this.articleService.updateArticle(this.authService.decodedToken.nameid, this.article).subscribe(next => {
      this.alertify.success('Article mis à jour');
      this.editionArticleForm.reset(this.article);
    }, error => {
      this.alertify.error(error);
    });
  }
}
