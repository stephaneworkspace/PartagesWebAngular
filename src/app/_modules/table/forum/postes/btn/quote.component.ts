import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { ForumPoste } from 'src/app/_models/Forum/forum-poste';

@Component({
  selector: 'app-module-table-postes-btn-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class ModuleTablePostesBtnQuoteComponent implements OnInit, OnChanges {
  @Input() disable: boolean;
  @Input() item: ForumPoste;
  @Output() output: EventEmitter<ForumPoste> = new EventEmitter<ForumPoste>();

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
    this.nom = 'Répondre à «' +  this.item.forumSujet.nom + '»';
  }

  click() {
    this.output.emit(this.item);
  }
}
