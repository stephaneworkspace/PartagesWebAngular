import { Component, OnInit, Input } from '@angular/core';
import { ForumSujet } from 'src/app/_models/Forum/forum-sujet';
import * as moment from 'moment';
import 'moment/locale/fr';
import { FormError } from 'src/app/_class/form-error';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ForumPosteService } from 'src/app/_services/forum/forum-poste.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-module-div-forum-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.scss']
})
export class ModuleDivForumReponseComponent implements OnInit {
  @Input() forumSujet: ForumSujet;
  @Input() contenu?: string;
  @Input() user?: User;
  model: any = {};
  formError: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertify: AlertifyService,
    private forumPosteService: ForumPosteService) { }

  ngOnInit() {
    this.formError = new FormError();
    moment.locale('fr');
    this.model.forumSujetId = this.forumSujet.id;
    this.model.forumSujet = this.forumSujet;
    // a faire citation correcte
    if (this.contenu) {
      this.model.contenu = this.contenu;
      if (this.user) {
        this.model.contenu = this.user.username + ':\n «' + this.model.contenu + ' »\n';
      }
    } else {
      this.model.contenu = '';
    }
  }

  dateFormatLL(date: Date){
    return moment(date).format('LL');
  }

  dateFormatLLLL(date: Date) {
    return moment(date).format('LLLL');
  }

  btnReply() {
    this.submitForm();
  }

  submitForm() {
    // Initialisation des erreurs précédantes
    this.formError.clear();
    this.forumPosteService.postReponseForumPoste(this.model).subscribe(next => {
      this.alertify.success('Message posté sur le forum');
      this.router.navigate(['/forum/sujet/' + this.model.forumSujet.forumCategorieId , { PageSize: 5, PageNumber: 1 } ]);
    }, error => {
      // https://github.com/laracasts/Vue-Forms/blob/master/public/js/app.js
      // Ensuite trouver moyen de traduire les messages d'erreurs
      if (typeof error.error === 'string') {
        this.alertify.error(error.error);
      } else {
        this.formError.record(error.error.errors);
        Object.keys(this.formError.getAll()).forEach(element => {
          this.alertify.error(this.formError.get(element));
        });
      }
    });
  }

}


