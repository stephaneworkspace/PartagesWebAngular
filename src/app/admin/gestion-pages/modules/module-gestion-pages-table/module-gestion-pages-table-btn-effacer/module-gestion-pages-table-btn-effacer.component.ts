import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Section } from 'src/app/_models/section';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';
import { Article } from 'src/app/_models/article';

interface Dto {
  section: Section;
  titreMenu?: TitreMenu;
  sousTitreMenu?: SousTitreMenu;
}

@Component({
  selector: 'app-module-gestion-pages-table-btn-effacer',
  templateUrl: './module-gestion-pages-table-btn-effacer.component.html',
  styleUrls: ['./module-gestion-pages-table-btn-effacer.component.scss']
})
export class ModuleGestionPagesTableBtnEffacerComponent implements OnInit {
  @Input() disable: boolean;
  @Input() sectionItem: Section;
  @Input() titreMenuItem?: TitreMenu;
  @Output() outputDelete: EventEmitter<Dto> = new EventEmitter<Dto>();

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }

  private btnYesPush() {
    this.outputDelete.emit({
      section: this.sectionItem,
      titreMenu: this.titreMenuItem
    });
  }

}
