import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Section } from 'src/app/_models/section';

@Component({
  selector: 'app-module-gestion-pages-table-btn-descendre',
  templateUrl: './module-gestion-pages-table-btn-descendre.component.html',
  styleUrls: ['./module-gestion-pages-table-btn-descendre.component.scss']
})
export class ModuleGestionPagesTableBtnDescendreComponent implements OnInit {
  @Input() disable: boolean;
  @Input() sectionItem: Section;
  @Output() outputDownSection: EventEmitter<Section> = new EventEmitter<Section>();

  constructor() { }

  ngOnInit() {
  }

  private downSection() {
    this.outputDownSection.emit(this.sectionItem);
  }

}
