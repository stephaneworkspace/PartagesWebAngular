import { Component, OnInit, Input } from '@angular/core';
import { ForumPoste } from 'src/app/_models/Forum/forum-poste';
import * as moment from 'moment';
import 'moment/locale/fr';
import { ForumCategorie } from 'src/app/_models/Forum/forum-categorie';
import { ForumSujet } from 'src/app/_models/Forum/forum-sujet';
import { AuthService } from 'src/app/_services/auth.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-module-table-forum-postes',
  templateUrl: './postes.component.html',
  styleUrls: ['./postes.component.scss']
})
export class ModuleTableForumPostesComponent implements OnInit {
  @Input() items: ForumPoste[];
  @Input() categorie: ForumCategorie;
  @Input() sujet: ForumSujet;
  loggedIn: boolean;

  constructor(private authService: AuthService) { }

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

  btnReply(item: ForumSujet) {
    alert('à faire');
    // this.router.navigate(['/admin/gestion-pages-edition-section/' + item.section.id]);
  }

  btnQuoteReply(item: ForumPoste) {
    alert('à faire');
  }

  btnPrivateMessage(item: User) {
    alert('à faire');
  }

}
