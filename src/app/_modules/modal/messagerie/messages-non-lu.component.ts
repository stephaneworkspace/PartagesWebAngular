import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { DtoAdminGestionPagesTable as Dto } from 'src/app/_dto/admin/gestion-pages/table';

@Component({
  selector: 'app-module-modal-messagerie-messages-non-lu-component',
  templateUrl: './messages-non-lu.component.html',
  styleUrls: ['./messages-non-lu.component.scss']
})
export class ModuleModalMessagerieMessagesNonLuComponent implements OnInit, OnChanges {
  @Input() nombresMessagesNonLu: number;
  // @Output() output: EventEmitter<Dto> = new EventEmitter<Dto>();
  @Output() output: EventEmitter<any> = new EventEmitter<any>();
  private _nombresMessagesNonLu: number;


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this._nombresMessagesNonLu = JSON.parse(localStorage.getItem('messagesNonLu'));;
  }

  // Corriger l'erreur ExpressionChangedAfterItHasBeenCheckedError dans la console du navigateur
  ngOnChanges(changes: SimpleChanges) {
    const nombresMessagesNonLu: SimpleChange = changes.messagesNonLu;
    // console.log('prev value: ', nombresMessagesNonLu.previousValue);
    // console.log('got name: ', nombresMessagesNonLu.currentValue);
    this._nombresMessagesNonLu = nombresMessagesNonLu.currentValue;
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
