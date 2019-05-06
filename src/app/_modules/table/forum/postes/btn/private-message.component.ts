import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { ForumPoste } from 'src/app/_models/Forum/forum-poste';
import { User } from 'src/app/_models/user';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-module-table-forum-postes-btn-private-message',
  templateUrl: './private-message.component.html',
  styleUrls: ['./private-message.component.scss']
})
export class ModuleTableForumPostesBtnPrivateMessageComponent implements OnInit, OnChanges {
  @Input() disable: boolean;
  @Input() item: User;
  @Output() output: EventEmitter<User> = new EventEmitter<User>();

  nom: string;
  swAfficherListeQuiVaEtreMisHorsLigne: boolean;

  faSizeProp: SizeProp;

  constructor() { }

  ngOnInit() {
    this.bind();
    this.faSizeProp = 'xs';
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange} ) {
    this.bind();
  }

  bind() {
    this.nom = 'Envoyer un message privé à ' +  this.item.username;
  }

  click() {
    this.output.emit(this.item);
  }
}