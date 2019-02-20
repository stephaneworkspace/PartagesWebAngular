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
  selector: 'app-module-gestion-pages-table-core',
  templateUrl: './module-gestion-pages-table-core.component.html',
  styleUrls: ['./module-gestion-pages-table-core.component.scss']
})
export class ModuleGestionPagesTableCoreComponent implements OnInit {
  @Input() section: Section[];
  @Output() outputEdit: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputDelete: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputUpSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputDownSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputUpTitreMenu: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputDownTitreMenu: EventEmitter<Dto> = new EventEmitter<Dto>();

  constructor() { }

  ngOnInit() {
  }

  private edit(item: Dto) {
    this.outputEdit.emit({
      section: item.section,
      titreMenu: item.titreMenu,
    });
  }

  private delete(item: Dto) {
    this.outputDelete.emit({
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
