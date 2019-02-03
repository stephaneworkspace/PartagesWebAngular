import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'app-nouveau-article',
  templateUrl: './nouveau-article.component.html',
  styleUrls: ['./nouveau-article.component.scss']
})
export class NouveauArticleComponent implements OnInit, OnChanges {
  model: any = {};
  markedArticle: string;

  constructor() { }

  ngOnInit() {
    this.model.sectionSelect = 'Hors-ligne';
    this.model.titreSelect = 'Hors-ligne';
    this.model.sousTitreSelect = 'Hors-ligne';
  }

  // ngOnChanges ne fonctionne pas
  ngOnChanges(changes: SimpleChanges) {
      alert('passe ici');
    // if (changes['model.article']) {
      // const md = marked.setOptions({});
     //  this.markedArticle = md.parse(this.model.article);
     // this.markedArticle = this.model.article;
    // }
  }

  valuechange(e: any) {
    // const md = marked.setOptions({});
    // this.markedArticle = md.parse(this.model.article);
    this.markedArticle = this.model.article;
  }

}
