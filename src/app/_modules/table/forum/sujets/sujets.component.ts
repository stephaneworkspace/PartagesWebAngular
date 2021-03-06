import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/fr';
import { ForumCategorie } from 'src/app/_models/Forum/forum-categorie';
import { ForumSujet } from 'src/app/_models/Forum/forum-sujet';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-table-forum-sujets',
  templateUrl: './sujets.component.html',
  styleUrls: ['./sujets.component.scss']
})
export class ModuleTableForumSujetsComponent implements OnInit {
  @Input() items: ForumSujet[];
  @Input() forumCategorie: ForumCategorie;
  loggedIn: boolean;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    moment.locale('fr');
    this.loggedIn = this.authService.loggedIn();
  }

  dateFormatLL(date: Date){
    return moment(date).format('LL');
  }

  dateFormatLLLL(date: Date){
    return moment(date).format('LLLL');
  }

  btnNewTopic(item: ForumCategorie) {
    this.router.navigate(['/forum/sujet/nouveau/' + item.id]);
  }
}
