import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ArticleService } from 'src/app/_services/article.service';
import { FormError } from 'src/app/_class/form-error';
import * as Sugar from 'sugar';
import { Section } from 'src/app/_models/section';

declare var require: any;
const myMarked = require('marked');

@Component({
  selector: 'app-nouveau-article',
  templateUrl: './nouveau-article.component.html',
  styleUrls: ['./nouveau-article.component.scss']
})
export class NouveauArticleComponent implements OnInit, OnChanges {
  model: any = {};
  sousTitreMenu: SousTitreMenu[];
  titreMenu: TitreMenu[] = [];
  section: Section[] = [];
  formError: any;
  markedArticle: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertify: AlertifyService,
    private articleService: ArticleService) { }

  ngOnInit() {
      // Initialisation des erreurs de formulaires
      this.formError = new FormError();
      // Resolver
      this.route.data.subscribe(data => {
        this.sousTitreMenu = data['sousTitreMenuSelectBox'];
        this.sousTitreMenu.forEach(element => {
          this.titreMenu.push(element.titreMenu);
        });
        let tableTemp = Sugar.Array(this.titreMenu).unique(function(item) {
          return item.id;
        }).clone();
        this.titreMenu = tableTemp['raw'].slice();
        this.titreMenu.forEach(element => {
          this.section.push(element.section);
        });
        tableTemp = Sugar.Array(this.section).unique(function(item) {
          return item.id;
        }).clone();
        this.section = tableTemp['raw'].slice();
        // console.log(this.section);
        // console.log(this.titreMenu);
        // console.log(this.sousTitreMenu);
      });
  }

  // ngOnChanges ne fonctionne pas
  ngOnChanges(changes: SimpleChanges) {
    // if (changes['model.article']) {
      // const md = marked.setOptions({});
     //  this.markedArticle = md.parse(this.model.article);
     // this.markedArticle = this.model.article;
    // }
  }

  valuechange(e: any) {
  myMarked.setOptions({
      renderer: new myMarked.Renderer(),
      highlight: function(code) {
        return require('highlight.js').highlightAuto(code).value;
      },
      // pedantic: false,
      // gfm: true,
      // tables: true,
      breaks: true,
      sanitize: true,
      // smartLists: true,
      // smartypants: false,
      // xhtml: false
    });
    this.markedArticle = myMarked(this.model.article);
  }

  submitForm() {
    // Initialisation des erreurs précédantes
    this.formError.clear();
    this.articleService.create(this.model).subscribe(next => {
      this.alertify.success('Article &laquo;' + this.model.nom + '&raquo; crée');
      // this.editForm.reset(this.titreMenu);
      this.router.navigate(['/admin']);
    }, error => {
      // https://github.com/laracasts/Vue-Forms/blob/master/public/js/app.js
      // Ensuite trouver moyen de traduire les messages d'erreurs
      if (typeof error.error === 'string') {
        this.alertify.error(error.error);
      } else {
        this.formError.record(error.error.errors);
        Object.keys(this.formError.getAll()).forEach(element => {
          this.alertify.error(this.formError.get(element));
        });
      }
    });
  }

  /**
   * Dans le cas ou le formulaire est touché, suppression des erreurs en petit rouge
   */
  setDirtyFlag() {
    this.formError.clear();
  }

}
