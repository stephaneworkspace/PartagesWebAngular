import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Section } from 'src/app/_models/section';

@Component({
  selector: 'app-module-gestion-pages-table-btn-effacer',
  templateUrl: './module-gestion-pages-table-btn-effacer.component.html',
  styleUrls: ['./module-gestion-pages-table-btn-effacer.component.scss']
})
export class ModuleGestionPagesTableBtnEffacerComponent implements OnInit {
  @Input() disable: boolean;
  @Input() sectionItem: Section;
  @Output() outputDeleteSection: EventEmitter<Section> = new EventEmitter<Section>();

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }

  private deleteSection() {
    this.outputDeleteSection.emit(this.sectionItem);
  }

}
