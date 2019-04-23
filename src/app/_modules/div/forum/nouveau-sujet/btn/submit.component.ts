import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { ForumCategorie } from 'src/app/_models/Forum/forum-categorie';

@Component({
  selector: 'app-module-div-forum-nouveau-sujet-btn-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class ModuleDivForumNouveauSujetBtnSubmitComponent implements OnInit, OnChanges {
  @Input() disable: boolean;
  @Input() forumCategorie: ForumCategorie;
  @Output() output: EventEmitter<ForumCategorie> = new EventEmitter<ForumCategorie>();

  nom: string;

  constructor() { }

  ngOnInit() {
    this.bind();
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange} ) {
    this.bind();
  }

  bind() {
    this.nom = 'Nouveau sujet dans «' +  this.forumCategorie.nom + '»';
  }

  click() {
    this.output.emit(this.forumCategorie);
  }
}
