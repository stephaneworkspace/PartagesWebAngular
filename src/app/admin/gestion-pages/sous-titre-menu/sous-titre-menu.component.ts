import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sous-titre-menu',
  templateUrl: './sous-titre-menu.component.html',
  styleUrls: ['./sous-titre-menu.component.scss']
})
export class SousTitreMenuComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit() {
    this.model.sectionSelect = 'Hors-ligne';
    this.model.titreSelect = 'Hors-ligne';
  }
}
