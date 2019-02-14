import { Component, OnInit, Input, OnChanges, SimpleChange, EventEmitter, Output } from '@angular/core';
import { Section } from 'src/app/_models/section';

@Component({
  selector: 'app-module-gestion-pages-table',
  templateUrl: './module-gestion-pages-table.component.html',
  styleUrls: ['./module-gestion-pages-table.component.scss']
})
export class ModuleGestionPagesTableComponent implements OnInit, OnChanges {
  @Input() section: Section[];
  @Output() outputDeleteSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputUpSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputDownSection: EventEmitter<Section> = new EventEmitter<Section>();

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

  private deleteSection(item: Section) {
    this.outputDeleteSection.emit(item);
  }

  private upSection(item: Section) {
    this.outputUpSection.emit(item);
  }

  private downSection(item: Section) {
    this.outputDownSection.emit(item);
  }

  private LoadArray() {
    this.sectionEnLigne = this.section.filter(x => x.swHorsLigne !== true);
    this.sectionHorsLigne = this.section.filter(x => x.swHorsLigne === true);
  }

}
