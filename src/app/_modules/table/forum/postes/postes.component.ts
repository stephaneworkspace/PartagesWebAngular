import { Component, OnInit, Input } from '@angular/core';
import { ForumPoste } from 'src/app/_models/Forum/forum-poste';
import * as moment from 'moment';
import 'moment/locale/fr';
import { ForumCategorie } from 'src/app/_models/Forum/forum-categorie';
import { ForumSujet } from 'src/app/_models/Forum/forum-sujet';

@Component({
  selector: 'app-module-table-forum-postes',
  templateUrl: './postes.component.html',
  styleUrls: ['./postes.component.scss']
})
export class ModuleTableForumPostesComponent implements OnInit {
  @Input() items: ForumPoste[];
  @Input() categorie: ForumCategorie;
  @Input() sujet: ForumSujet;

  constructor() { }

  ngOnInit() {
    moment.locale('fr');
  }

  dateFormatLL(date: Date){
    return moment(date).format('LL');
  }

  dateFormatLLLL(date: Date){
    return moment(date).format('LLLL');
  }

}
