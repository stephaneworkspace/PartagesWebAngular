import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Section } from 'src/app/_models/section';

@Component({
  selector: 'app-module-gestion-pages-table-btn-monter',
  templateUrl: './module-gestion-pages-table-btn-monter.component.html',
  styleUrls: ['./module-gestion-pages-table-btn-monter.component.scss']
})
export class ModuleGestionPagesTableBtnMonterComponent implements OnInit {
  @Input() disable: boolean;
  @Input() sectionItem: Section;
  @Output() outputUpSection: EventEmitter<Section> = new EventEmitter<Section>();

  constructor() { }

  ngOnInit() {
  }

  private upSection() {
    this.outputUpSection.emit(this.sectionItem);
  }

}
