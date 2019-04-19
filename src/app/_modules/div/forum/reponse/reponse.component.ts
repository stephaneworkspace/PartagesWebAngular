import { Component, OnInit, Input } from '@angular/core';
import { ForumSujet } from 'src/app/_models/Forum/forum-sujet';
import * as moment from 'moment';
import 'moment/locale/fr';

@Component({
  selector: 'app-module-div-forum-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.scss']
})
export class ModuleDivForumReponseComponent implements OnInit {
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


