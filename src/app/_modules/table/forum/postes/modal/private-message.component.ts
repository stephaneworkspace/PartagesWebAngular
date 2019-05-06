import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, OnChanges } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DtoAdminGestionPagesTable as Dto } from 'src/app/_dto/admin/gestion-pages/table';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-module-table-forum-postes-modal-private-message-component',
  templateUrl: './private-message.component.html',
  styleUrls: ['./private-message.component.scss']
})
export class ModuleTableForumPostesModalPrivateMessageComponent implements OnInit {
  @Input() item: User;
  @Output() output: EventEmitter<Dto> = new EventEmitter<Dto>();


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  btnEnvoyerPush() {
    /*this.output.emit({
      // item: this.item A FAIRE DTO
    });*/
  }
}
