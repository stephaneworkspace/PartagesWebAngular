import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Section } from 'src/app/_models/section';

@Component({
  selector: 'app-module-gestion-pages-table',
  templateUrl: './module-gestion-pages-table.component.html',
  styleUrls: ['./module-gestion-pages-table.component.scss']
})
export class ModuleGestionPagesTableComponent implements OnInit, OnChanges {
  @Input() section: Section[];

  sectionEnLigne: Section[];
  sectionHorsLigne: Section[];

  constructor() { }

  ngOnInit() {
    this.LoadArray();
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    // console.log('ngOnChanges - section = ' + changes['section'].currentValue);
    this.LoadArray();
  }

  private LoadArray() {
    this.sectionEnLigne = this.section.filter(x => x.swHorsLigne !== true);
    this.sectionHorsLigne = this.section.filter(x => x.swHorsLigne === true);
  }

}
