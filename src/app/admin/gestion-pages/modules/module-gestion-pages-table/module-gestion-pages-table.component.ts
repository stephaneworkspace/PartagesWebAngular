import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/_models/section';

@Component({
  selector: 'app-module-gestion-pages-table',
  templateUrl: './module-gestion-pages-table.component.html',
  styleUrls: ['./module-gestion-pages-table.component.scss']
})
export class ModuleGestionPagesTableComponent implements OnInit {
  @Input() sectionEnLigne: Section[];
  @Input() sectionHorsLigne: Section[];

  constructor() { }

  ngOnInit() {
  }

}
