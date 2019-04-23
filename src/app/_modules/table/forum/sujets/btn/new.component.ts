import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { ForumCategorie } from 'src/app/_models/Forum/forum-categorie';

@Component({
  selector: 'app-module-table-forum-sujets-btn-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class ModuleTableForumSujetsBtnNewComponent implements OnInit, OnChanges {
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
    this.nom = 'Créer un nouveau sujet dans la catégorie «' +  this.forumCategorie.nom + '»';
  }

  click() {
    this.output.emit(this.forumCategorie);
  }
}
