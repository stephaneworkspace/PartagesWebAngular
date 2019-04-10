import { Component, OnInit, Input } from '@angular/core';
import { ForumPoste } from 'src/app/_models/Forum/forum-poste';
import * as moment from 'moment';
import 'moment/locale/fr';

@Component({
  selector: 'app-module-table-forum-postes',
  templateUrl: './postes.component.html',
  styleUrls: ['./postes.component.scss']
})
export class ModuleTableForumPostesComponent implements OnInit {
  @Input() items: ForumPoste[];

  constructor() { }

  ngOnInit() {
    moment.locale('fr');
    // console.log(moment().format('LLLL'));
  }

  dateFormatLL(date: Date){
    return moment(date).format('LL');
  }

  dateFormatLLLL(date: Date){
    return moment(date).format('LLLL');
  }

}
