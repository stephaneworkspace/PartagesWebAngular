import { Component, OnInit, Input, OnChanges, SimpleChange, EventEmitter, Output } from '@angular/core';
import { Section } from 'src/app/_models/section';

@Component({
  selector: 'app-module-gestion-pages-table',
  templateUrl: './module-gestion-pages-table.component.html',
  styleUrls: ['./module-gestion-pages-table.component.scss']
})
export class ModuleGestionPagesTableComponent implements OnInit, OnChanges {
  @Input() section: Section[];
  @Output() outputDeleteSection: EventEmitter<number> = new EventEmitter<number>();
  @Output() outputUpSection: EventEmitter<number> = new EventEmitter<number>();
  @Output() outputDownSection: EventEmitter<number> = new EventEmitter<number>();

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

  private deleteSection(id: number) {
    this.outputDeleteSection.emit(id);
  }

  private upSection(id: number) {
    this.outputUpSection.emit(id);
  }

  private downSection(id: number) {
    this.outputDownSection.emit(id);
  }

  private LoadArray() {
    this.sectionEnLigne = this.section.filter(x => x.swHorsLigne !== true);
    this.sectionHorsLigne = this.section.filter(x => x.swHorsLigne === true);
  }

}
