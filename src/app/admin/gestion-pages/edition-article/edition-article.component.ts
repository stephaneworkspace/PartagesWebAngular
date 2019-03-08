import { Component, OnInit, ViewChild, HostListener, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ArticleService } from 'src/app/_services/article.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Article } from 'src/app/_models/article';
import { Section } from 'src/app/_models/section';
import * as Sugar from 'sugar';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { FormError } from 'src/app/_class/form-error';

declare var require: any;
const myMarked = require('marked');

@Component({
  selector: 'app-edition-article',
  templateUrl: './edition-article.component.html',
  styleUrls: ['./edition-article.component.scss']
})
export class EditionArticleComponent implements OnInit {
  // Voir guards, 4 février 2019 je ne l'ai pas testé
  @ViewChild('editForm') editForm: NgForm;

  model: any = {};
  sousTitreMenu: SousTitreMenu[];
  titreMenu: TitreMenu[] = [];
  section: Section[] = [];
  formError: any;
  markedNom: string;
  markedContenu: string;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private alertify: AlertifyService,
      private articleService: ArticleService,
      private authService: AuthService
  ) { }

  ngOnInit() {
    // Initialisation des erreurs de formulaires
    this.formError = new FormError();
    this.route.data.subscribe(data => {
      this.model = data['article'];
      this.valuechange(null);
      this.valueNomChange(null);
      // Selectbox
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
    });
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
      this.markedContenu = myMarked(this.model.contenu);
    }

  valueNomChange(e: any) {
    myMarked.setOptions({
      renderer: new myMarked.Renderer(),
      highlight: function(code) {
        return require('highlight.js').highlightAuto(code).value;
      },
      // pedantic: false,
      // gfm: true,
      // tables: true,
      breaks: false,
      sanitize: true,
      // smartLists: true,
      // smartypants: false,
      // xhtml: false
    });
    this.markedNom = myMarked('# ' + this.model.nom);
  }

    submitForm() {
      // Initialisation des erreurs précédantes
      this.formError.clear();
      this.articleService.update(this.model.id, this.model).subscribe(next => {
        this.alertify.success('Article &laquo;' + this.model.nom + '&raquo; mis à jour');
        this.editForm.reset(this.model);
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
