import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

enum marginLeft {
  _0px,
  _15px,
  _30px,
  _45px,
}

@Component({
  selector: 'app-module-table-admin-gestion-pages-span-nom',
  templateUrl: './nom.component.html',
  styleUrls: ['./nom.component.scss']
})
export class ModuleTableAdminGestionPagesSpanNomComponent implements OnInit, OnChanges {
  @Input() text: string;
  @Input() icon: string;
  @Input() marginLeft: marginLeft;
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
      case marginLeft._0px:
        this.classStyle = 'textMargin0';
        break;
      case marginLeft._15px:
        this.classStyle = 'textMargin1';
        break;
    }
  }
}
