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
  selector: 'app-module-gestion-pages-table-btn-monter',
  templateUrl: './module-gestion-pages-table-btn-monter.component.html',
  styleUrls: ['./module-gestion-pages-table-btn-monter.component.scss']
})
export class ModuleGestionPagesTableBtnMonterComponent implements OnInit {
  @Input() disable: boolean;
  @Input() sectionItem: Section;
  @Input() titreMenuItem?: TitreMenu;
  @Output() outputUp: EventEmitter<Dto> = new EventEmitter<Dto>();

  constructor() { }

  ngOnInit() {
  }

  btnPush() {
    this.outputUp.emit({
      section: this.sectionItem,
      titreMenu: this.titreMenuItem
    });
  }

}
