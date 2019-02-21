import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-module-table-admin-gestion-pages-span-nom',
  templateUrl: './nom.component.html',
  styleUrls: ['./nom.component.scss']
})
export class ModuleTableAdminGestionPagesSpanNomComponent implements OnInit, OnChanges {
  @Input() text: string;
  @Input() icon: string;
  @Input() marginLeft: number;
  @Input() swMouseOver: boolean;

  classStyle: string;

  constructor() { }

  ngOnInit() {
    this.bind();
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange} ) {
    this.bind();
  }

  bind() {
    switch (this.marginLeft) {
      case 0:
        this.classStyle = 'text-margin-0';
        break;
      case 1:
        this.classStyle = 'text-margin-1';
        break;
      case 2:
        this.classStyle = 'text-margin-2';
        break;
      case 3:
        this.classStyle = 'text-margin-3';
        break;
    }
  }
}
