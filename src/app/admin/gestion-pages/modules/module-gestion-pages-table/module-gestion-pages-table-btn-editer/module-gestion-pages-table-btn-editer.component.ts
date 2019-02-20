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
  selector: 'app-module-gestion-pages-table-btn-editer',
  templateUrl: './module-gestion-pages-table-btn-editer.component.html',
  styleUrls: ['./module-gestion-pages-table-btn-editer.component.scss']
})
export class ModuleGestionPagesTableBtnEditerComponent implements OnInit {
  @Input() disable: boolean;
  @Input() sectionItem: Section;
  @Input() titreMenuItem?: TitreMenu;
  @Output() outputEdit: EventEmitter<Dto> = new EventEmitter<Dto>();
  constructor() { }

  ngOnInit() {
  }

  private btnPush() {
    this.outputEdit.emit({
      section: this.sectionItem,
      titreMenu: this.titreMenuItem
    });
  }

}
