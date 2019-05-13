import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, OnChanges } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { DtoAdminGestionPagesTable as Dto } from 'src/app/_dto/admin/gestion-pages/table';

@Component({
  selector: 'app-module-modal-messagerie-messages-non-lu-component',
  templateUrl: './messages-non-lu.component.html',
  styleUrls: ['./messages-non-lu.component.scss']
})
export class ModuleModalMessagerieMessagesNonLuComponent implements OnInit {
  @Input() nombresMessagesNonLu: number;
  // @Output() output: EventEmitter<Dto> = new EventEmitter<Dto>();


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  btnYesPush() {
    /*this.output.emit({
      section: this.sectionItem,
      titreMenu: this.titreMenuItem,
      sousTitreMenu: this.sousTitreMenuItem,
      article: this.articleItem
    });*/
  }
}
