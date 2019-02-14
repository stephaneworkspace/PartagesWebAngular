import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Section } from 'src/app/_models/section';

@Component({
  selector: 'app-module-gestion-pages-table-btn-editer',
  templateUrl: './module-gestion-pages-table-btn-editer.component.html',
  styleUrls: ['./module-gestion-pages-table-btn-editer.component.scss']
})
export class ModuleGestionPagesTableBtnEditerComponent implements OnInit {
  @Input() disable: boolean;
  @Input() sectionItem: Section;
  @Output() outputEditSection: EventEmitter<Section> = new EventEmitter<Section>();
  constructor() { }

  ngOnInit() {
  }

  private editSection() {
    this.outputEditSection.emit(this.sectionItem);
  }

}
