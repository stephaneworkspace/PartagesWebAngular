import { Component, OnInit, Input, OnChanges, SimpleChange, EventEmitter, Output } from '@angular/core';
import { Section } from 'src/app/_models/section';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';

interface Dto {
  section: Section;
  titreMenu?: TitreMenu;
  sousTitreMenu?: SousTitreMenu;
}

@Component({
  selector: 'app-module-gestion-pages-table',
  templateUrl: './module-gestion-pages-table.component.html',
  styleUrls: ['./module-gestion-pages-table.component.scss']
})
export class ModuleGestionPagesTableComponent implements OnInit, OnChanges {
  @Input() section: Section[];
  @Output() outputEdit: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputDelete: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputUpSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputDownSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputUpTitreMenu: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputDownTitreMenu: EventEmitter<Dto> = new EventEmitter<Dto>();

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

  private edit(item: Dto) {
    this.outputEdit.emit(item);
  }

  private delete(item: Dto) {
    this.outputDelete.emit(item);
  }

  private upSection(item: Section) {
    this.outputUpSection.emit(item);
  }

  private downSection(item: Section) {
    this.outputDownSection.emit(item);
  }

  private upTitreMenu(item: Dto) {
    this.outputUpTitreMenu.emit(item);
  }

  private downTitreMenu(item: Dto) {
    this.outputDownTitreMenu.emit(item);
  }

  private LoadArray() {
    this.sectionEnLigne = this.section.filter(x => x.swHorsLigne !== true);
    this.sectionHorsLigne = this.section.filter(x => x.swHorsLigne === true);
  }

}
