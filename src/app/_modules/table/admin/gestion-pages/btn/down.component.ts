import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, OnChanges } from '@angular/core';
import { Section } from 'src/app/_models/section';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';

interface Dto {
  section: Section;
  titreMenu?: TitreMenu;
  sousTitreMenu?: SousTitreMenu;
}

@Component({
  selector: 'app-module-table-admin-gestion-pages-btn-down',
  templateUrl: './down.component.html',
  styleUrls: ['./down.component.scss']
})
export class ModuleTableAdminGestionPagesBtnDownComponent implements OnInit, OnChanges {
  @Input() disable: boolean;
  @Input() sectionItem: Section;
  @Input() titreMenuItem?: TitreMenu;
  @Output() outputDown: EventEmitter<Dto> = new EventEmitter<Dto>();

  nom: string;

  constructor() { }

  ngOnInit() {
    this.bind();
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange} ) {
    this.bind();
  }

  btnPush() {
    this.outputDown.emit({
      section: this.sectionItem,
      titreMenu: this.titreMenuItem
    });
  }

  bind() {
    if (this.disable === true) {
      this.nom = '';
    } else {
      if (this.titreMenuItem === undefined) {
        this.nom = 'Descendre «' +  this.sectionItem.nom + '»';
      } else {
        this.nom = 'Descendre «' +  this.titreMenuItem.nom + '»';
      }
    }
  }
}
