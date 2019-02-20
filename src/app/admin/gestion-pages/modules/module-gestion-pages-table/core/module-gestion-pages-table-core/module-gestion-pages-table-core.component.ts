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
  @Output() outputUp: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputDown: EventEmitter<Dto> = new EventEmitter<Dto>();

  constructor() { }

  ngOnInit() {
  }

  edit(item: Dto) {
    this.outputEdit.emit(item);
  }

  delete(item: Dto) {
    this.outputDelete.emit(item);
  }

  up(item: Dto) {
    this.outputUp.emit(item);
  }

  down(item: Dto) {
    this.outputDown.emit(item);
  }
}
