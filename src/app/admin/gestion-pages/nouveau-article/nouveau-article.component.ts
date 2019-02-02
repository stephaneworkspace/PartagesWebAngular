import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau-article',
  templateUrl: './nouveau-article.component.html',
  styleUrls: ['./nouveau-article.component.scss']
})
export class NouveauArticleComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit() {
    this.model.sectionSelect = 'Hors-ligne';
    this.model.titreSelect = 'Hors-ligne';
    this.model.sousTitreSelect = 'Hors-ligne';
  }

}
