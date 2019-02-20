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
  selector: 'app-module-gestion-pages-table-btn-descendre',
  templateUrl: './module-gestion-pages-table-btn-descendre.component.html',
  styleUrls: ['./module-gestion-pages-table-btn-descendre.component.scss']
})
export class ModuleGestionPagesTableBtnDescendreComponent implements OnInit {
  @Input() disable: boolean;
  @Input() sectionItem: Section;
  @Input() titreMenuItem?: TitreMenu;
  @Output() outputDown: EventEmitter<Dto> = new EventEmitter<Dto>();

  constructor() { }

  ngOnInit() {
  }

  btnPush() {
    this.outputDown.emit({
      section: this.sectionItem,
      titreMenu: this.titreMenuItem
    });
  }

}
