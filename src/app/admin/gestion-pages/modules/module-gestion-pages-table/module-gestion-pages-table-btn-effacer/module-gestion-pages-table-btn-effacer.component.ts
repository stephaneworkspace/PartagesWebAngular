import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Section } from 'src/app/_models/section';
import { TitreMenu } from 'src/app/_models/titre-menu';

interface DtoSectionTitreMenu {
  section: Section;
  titreMenu: TitreMenu;
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
  @Output() outputDeleteSection: EventEmitter<DtoSectionTitreMenu> = new EventEmitter<DtoSectionTitreMenu>();

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }

  private btnPush() {
    this.outputDeleteSection.emit({
      section: this.sectionItem,
      titreMenu: this.titreMenuItem
    });
  }

}
