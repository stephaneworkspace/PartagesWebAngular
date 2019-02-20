import { Component, OnInit, Input, OnChanges, SimpleChange, EventEmitter, Output } from '@angular/core';
import { Section } from 'src/app/_models/section';
import { TitreMenu } from 'src/app/_models/titre-menu';

interface DtoSectionTitreMenu {
  section: Section;
  titreMenu: TitreMenu;
}

@Component({
  selector: 'app-module-gestion-pages-table',
  templateUrl: './module-gestion-pages-table.component.html',
  styleUrls: ['./module-gestion-pages-table.component.scss']
})
export class ModuleGestionPagesTableComponent implements OnInit, OnChanges {
  @Input() section: Section[];
  @Output() outputEditSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputDeleteSection: EventEmitter<DtoSectionTitreMenu> = new EventEmitter<DtoSectionTitreMenu>();
  @Output() outputUpSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputDownSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputEditTitreMenu: EventEmitter<DtoSectionTitreMenu> = new EventEmitter<DtoSectionTitreMenu>();
  @Output() outputDeleteTitreMenu: EventEmitter<DtoSectionTitreMenu> = new EventEmitter<DtoSectionTitreMenu>();
  @Output() outputUpTitreMenu: EventEmitter<DtoSectionTitreMenu> = new EventEmitter<DtoSectionTitreMenu>();
  @Output() outputDownTitreMenu: EventEmitter<DtoSectionTitreMenu> = new EventEmitter<DtoSectionTitreMenu>();

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

  private editSection(item: Section) {
    this.outputEditSection.emit(item);
  }

  private deleteSection(item: DtoSectionTitreMenu) {
    this.outputDeleteSection.emit(item);
  }

  private upSection(item: Section) {
    this.outputUpSection.emit(item);
  }

  private downSection(item: Section) {
    this.outputDownSection.emit(item);
  }

  private editTitreMenu(item: DtoSectionTitreMenu) {
    this.outputEditTitreMenu.emit(item);
  }

  private deleteTitreMenu(item: DtoSectionTitreMenu) {
    this.outputDeleteTitreMenu.emit(item);
  }

  private upTitreMenu(item: DtoSectionTitreMenu) {
    this.outputUpTitreMenu.emit(item);
  }

  private downTitreMenu(item: DtoSectionTitreMenu) {
    this.outputDownTitreMenu.emit(item);
  }

  private LoadArray() {
    this.sectionEnLigne = this.section.filter(x => x.swHorsLigne !== true);
    this.sectionHorsLigne = this.section.filter(x => x.swHorsLigne === true);
  }

}
