import { Component, OnInit, Input, OnChanges, SimpleChange, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Section } from 'src/app/_models/section';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';
import { DtoAdminGestionPagesTable as Dto } from 'src/app/_dto/admin/gestion-pages/table';

@Component({
  selector: 'app-module-table-admin-gestion-pages',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class ModuleTableAdminGestionPagesComponent implements OnInit, OnChanges {
  @Input() section: Section[];
  @Output() outputEdit: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputDelete: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputUp: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() outputDown: EventEmitter<Dto> = new EventEmitter<Dto>();

  sectionEnLigne: Section[];
  sectionHorsLigne: Section[];
  titremenuHorsLigne: Section[];

  constructor() {
  }

  ngOnInit() {
    this.LoadArray();
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    this.LoadArray();
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

  LoadArray() {
    this.sectionEnLigne = this.section.filter(x => x.swHorsLigne !== true);
    this.sectionHorsLigne = this.section.filter(x => x.swHorsLigne === true).filter(x => x.id > 0);
    this.titremenuHorsLigne = this.section.filter(x => x.swHorsLigne === true).filter(x => x.id === 0);
  }
}
