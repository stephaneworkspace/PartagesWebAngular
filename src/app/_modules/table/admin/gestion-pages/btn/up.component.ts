import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, OnChanges } from '@angular/core';
import { Section } from 'src/app/_models/section';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';
import { DtoAdminGestionPagesTable as Dto } from 'src/app/_dto/admin/gestion-pages/table';
import { Article } from 'src/app/_models/article';

@Component({
  selector: 'app-module-table-admin-gestion-pages-btn-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.scss']
})
export class ModuleTableAdminGestionPagesBtnUpComponent implements OnInit, OnChanges {
  @Input() disable: boolean;
  @Input() sectionItem: Section;
  @Input() titreMenuItem?: TitreMenu;
  @Input() sousTitreMenuItem?: SousTitreMenu;
  @Input() articleItem?: Article;
  @Output() output: EventEmitter<Dto> = new EventEmitter<Dto>();

  nom: string;

  constructor() { }

  ngOnInit() {
    this.bind();
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange} ) {
    this.bind();
  }

  bind() {
    if (this.disable === true) {
      this.nom = '';
    } else {
      if (this.titreMenuItem === undefined) {
        this.nom = 'Monter «' +  this.sectionItem.nom + '»';
      } else {
        if (this.sousTitreMenuItem === undefined) {
          this.nom = 'Monter «' +  this.titreMenuItem.nom + '»';
        } else {
          if (this.articleItem === undefined) {
            this.nom = 'Monter «' +  this.sousTitreMenuItem.nom + '»';
          } else {
            this.nom = 'Monter «' +  this.articleItem.nom + '»';
          }
        }
      }
    }
  }

  btnPush() {
    this.output.emit({
      section: this.sectionItem,
      titreMenu: this.titreMenuItem,
      sousTitreMenu: this.sousTitreMenuItem,
      article: this.articleItem
    });
  }
}
