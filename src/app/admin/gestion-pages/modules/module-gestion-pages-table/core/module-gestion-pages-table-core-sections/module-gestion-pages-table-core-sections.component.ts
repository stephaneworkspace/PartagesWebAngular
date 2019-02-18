import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Section } from 'src/app/_models/section';

@Component({
  selector: 'app-module-gestion-pages-table-core-sections',
  templateUrl: './module-gestion-pages-table-core-sections.component.html',
  styleUrls: ['./module-gestion-pages-table-core-sections.component.scss']
})
export class ModuleGestionPagesTableCoreSectionsComponent implements OnInit {
  @Input() section: Section[];
  @Output() outputEditSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputDeleteSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputUpSection: EventEmitter<Section> = new EventEmitter<Section>();
  @Output() outputDownSection: EventEmitter<Section> = new EventEmitter<Section>();

  constructor() { }

  ngOnInit() {
  }

  private editSection(item: Section) {
    this.outputEditSection.emit(item);
  }

  private deleteSection(item: Section) {
    this.outputDeleteSection.emit(item);
  }

  private upSection(item: Section) {
    this.outputUpSection.emit(item);
  }

  private downSection(item: Section) {
    this.outputDownSection.emit(item);
  }
}
