import { Component, OnInit } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-nouveau-titre-menu',
  templateUrl: './nouveau-titre-menu.component.html',
  styleUrls: ['./nouveau-titre-menu.component.scss']
})
export class NouveauTitreMenuComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit() {
    this.model.sectionSelect = 'hors-ligne';
  }

}
