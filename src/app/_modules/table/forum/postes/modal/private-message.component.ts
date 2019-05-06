import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, OnChanges } from '@angular/core';
import { Section } from 'src/app/_models/section';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Article } from 'src/app/_models/article';
import { DtoAdminGestionPagesTable as Dto } from 'src/app/_dto/admin/gestion-pages/table';

@Component({
  selector: 'app-module-table-forum-postes-modal-private-message-component',
  templateUrl: './private-message.component.html',
  styleUrls: ['./private-message.component.scss']
})
export class ModuleTableForumPostesModalPrivateMessageComponent implements OnInit {
  @Input() nom: string;
  @Input() swAfficherListeQuiVaEtreMisHorsLigne: boolean;
  @Input() sectionItem: Section;
  @Input() titreMenuItem?: TitreMenu;
  @Input() sousTitreMenuItem?: SousTitreMenu;
  @Input() articleItem?: Article;
  @Output() output: EventEmitter<Dto> = new EventEmitter<Dto>();


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  btnEnvoyerPush() {
    this.output.emit({
      // EMIT DIFFERANT C'EST ITEM A TRANSMETTRE
      section: this.sectionItem,
      titreMenu: this.titreMenuItem,
      sousTitreMenu: this.sousTitreMenuItem,
      article: this.articleItem
    });
  }
}
