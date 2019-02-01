import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau-sous-titre-menu',
  templateUrl: './nouveau-sous-titre-menu.component.html',
  styleUrls: ['./nouveau-sous-titre-menu.component.scss']
})
export class NouveauSousTitreMenuComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit() {
    this.model.sectionSelect = 'Hors-ligne';
    this.model.titreSelect = 'Hors-ligne';
  }
}
