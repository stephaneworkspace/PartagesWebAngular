import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { ForumSujet } from 'src/app/_models/Forum/forum-sujet';

@Component({
  selector: 'app-module-table-postes-btn-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ModuleTablePostesBtnReplyComponent implements OnInit, OnChanges {
  @Input() disable: boolean;
  @Input() sujet: ForumSujet;
  @Output() output: EventEmitter<ForumSujet> = new EventEmitter<ForumSujet>();

  nom: string;
  swAfficherListeQuiVaEtreMisHorsLigne: boolean;

  constructor() { }

  ngOnInit() {
    this.bind();
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange} ) {
    this.bind();
  }

  bind() {
    this.nom = 'Répondre à «' +  this.sujet.nom + '»';
  }

  click() {
    this.output.emit(this.sujet);
  }
}
