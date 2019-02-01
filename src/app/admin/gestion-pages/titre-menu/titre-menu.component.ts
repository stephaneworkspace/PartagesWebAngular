import { Component, OnInit } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-titre-menu',
  templateUrl: './titre-menu.component.html',
  styleUrls: ['./titre-menu.component.scss']
})
export class TitreMenuComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit() {
    this.model.sectionSelect = 'hors-ligne';
  }

}
