import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Section } from 'src/app/_models/section';
import { TitreMenu } from 'src/app/_models/titre-menu';

interface DtoSectionTitreMenu {
  section: Section;
  titreMenu: TitreMenu;
}

@Component({
  selector: 'app-module-gestion-pages-table-core-sections',
  templateUrl: './module-gestion-pages-table-core-sections.component.html',
  styleUrls: ['./module-gestion-pages-table-core-sections.component.scss']
})
export class ModuleGestionPagesTableCoreSectionsComponent implements OnInit {
  @Input() section: Section[];
  @Output() outputEditSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputDeleteSection: EventEmitter<DtoSectionTitreMenu> = new EventEmitter<DtoSectionTitreMenu>();
  @Output() outputUpSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputDownSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputEditTitreMenu: EventEmitter<DtoSectionTitreMenu> = new EventEmitter<DtoSectionTitreMenu>();
  @Output() outputDeleteTitreMenu: EventEmitter<DtoSectionTitreMenu> = new EventEmitter<DtoSectionTitreMenu>();
  @Output() outputUpTitreMenu: EventEmitter<DtoSectionTitreMenu> = new EventEmitter<DtoSectionTitreMenu>();
  @Output() outputDownTitreMenu: EventEmitter<DtoSectionTitreMenu> = new EventEmitter<DtoSectionTitreMenu>();

  constructor() { }

  ngOnInit() {
  }

  private editSection(item: Section) {
    this.outputEditSection.emit(item);
  }

  private deleteSection(item: DtoSectionTitreMenu) {
    this.outputDeleteSection.emit({
      section: item.section,
      titreMenu: item.titreMenu
    });
  }

  private upSection(item: Section) {
    this.outputUpSection.emit(item);
  }

  private downSection(item: Section) {
    this.outputDownSection.emit(item);
  }

  private editTitreMenu(item: DtoSectionTitreMenu) {
    this.outputEditTitreMenu.emit({
      section: item.section,
      titreMenu: item.titreMenu
    });
  }

  private deleteTitreMenu(item: DtoSectionTitreMenu) {
    this.outputDeleteTitreMenu.emit({
      section: item.section,
      titreMenu: item.titreMenu
    });
  }

  private upTitreMenu(item: DtoSectionTitreMenu) {
    this.outputUpTitreMenu.emit({
      section: item.section,
      titreMenu: item.titreMenu
    });
  }

  private downTitreMenu(item: DtoSectionTitreMenu) {
    this.outputDownTitreMenu.emit({
      section: item.section,
      titreMenu: item.titreMenu
    });
  }
}
