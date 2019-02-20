import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { Section } from 'src/app/_models/section';

interface DtoSectionTitreMenu {
  section: Section;
  titreMenu: TitreMenu;
}

@Component({
  selector: 'app-module-gestion-pages-table-core-titre-menus',
  templateUrl: './module-gestion-pages-table-core-titre-menus.component.html',
  styleUrls: ['./module-gestion-pages-table-core-titre-menus.component.scss']
})
export class ModuleGestionPagesTableCoreTitreMenusComponent implements OnInit {
  @Input() section: Section;
  @Input() titreMenu: TitreMenu[];
  @Output() outputEditTitreMenu: EventEmitter<DtoSectionTitreMenu> = new EventEmitter<DtoSectionTitreMenu>();
  @Output() outputDeleteTitreMenu: EventEmitter<DtoSectionTitreMenu> = new EventEmitter<DtoSectionTitreMenu>();
  @Output() outputUpTitreMenu: EventEmitter<DtoSectionTitreMenu> = new EventEmitter<DtoSectionTitreMenu>();
  @Output() outputDownTitreMenu: EventEmitter<DtoSectionTitreMenu> = new EventEmitter<DtoSectionTitreMenu>();

  dto: any;

  constructor() { }

  ngOnInit() {
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
