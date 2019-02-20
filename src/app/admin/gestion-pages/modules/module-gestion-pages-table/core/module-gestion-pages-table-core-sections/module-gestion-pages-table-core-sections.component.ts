import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Section } from 'src/app/_models/section';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';

interface Dto {
  section: Section;
  titreMenu?: TitreMenu;
  sousTitreMenu?: SousTitreMenu;
}

@Component({
  selector: 'app-module-gestion-pages-table-core-sections',
  templateUrl: './module-gestion-pages-table-core-sections.component.html',
  styleUrls: ['./module-gestion-pages-table-core-sections.component.scss']
})
export class ModuleGestionPagesTableCoreSectionsComponent implements OnInit {
  @Input() section: Section[];
  @Output() outputEditSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputDeleteSection: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputUpSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputDownSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputEditTitreMenu: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputDeleteTitreMenu: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputUpTitreMenu: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputDownTitreMenu: EventEmitter<Dto> = new EventEmitter<Dto>();

  constructor() { }

  ngOnInit() {
  }

  private editSection(item: Section) {
    this.outputEditSection.emit(item);
  }

  private deleteSection(item: Dto) {
    this.outputDeleteSection.emit({
      section: item.section,
      titreMenu: item.titreMenu,
    });
  }

  private upSection(item: Section) {
    this.outputUpSection.emit(item);
  }

  private downSection(item: Section) {
    this.outputDownSection.emit(item);
  }

  private editTitreMenu(item: Dto) {
    this.outputEditTitreMenu.emit({
      section: item.section,
      titreMenu: item.titreMenu
    });
  }

  private deleteTitreMenu(item: Dto) {
    this.outputDeleteTitreMenu.emit({
      section: item.section,
      titreMenu: item.titreMenu
    });
  }

  private upTitreMenu(item: Dto) {
    this.outputUpTitreMenu.emit({
      section: item.section,
      titreMenu: item.titreMenu
    });
  }

  private downTitreMenu(item: Dto) {
    this.outputDownTitreMenu.emit({
      section: item.section,
      titreMenu: item.titreMenu
    });
  }
}
