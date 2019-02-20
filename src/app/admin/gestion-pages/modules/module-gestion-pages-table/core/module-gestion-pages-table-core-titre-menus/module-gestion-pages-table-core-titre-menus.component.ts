import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { Section } from 'src/app/_models/section';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';

interface Dto {
  section: Section;
  titreMenu?: TitreMenu;
  sousTitreMenu?: SousTitreMenu;
}

@Component({
  selector: 'app-module-gestion-pages-table-core-titre-menus',
  templateUrl: './module-gestion-pages-table-core-titre-menus.component.html',
  styleUrls: ['./module-gestion-pages-table-core-titre-menus.component.scss']
})
export class ModuleGestionPagesTableCoreTitreMenusComponent implements OnInit {
  @Input() section: Section;
  @Input() titreMenu: TitreMenu[];
  @Output() outputEditTitreMenu: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputDeleteTitreMenu: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputUpTitreMenu: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputDownTitreMenu: EventEmitter<Dto> = new EventEmitter<Dto>();

  dto: any;

  constructor() { }

  ngOnInit() {
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
