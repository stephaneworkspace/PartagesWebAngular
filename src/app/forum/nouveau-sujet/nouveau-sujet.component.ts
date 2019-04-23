import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumCategorie } from 'src/app/_models/Forum/forum-categorie';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { FormError } from 'src/app/_class/form-error';
import { ForumSujetService } from 'src/app/_services/forum/forum-sujet.service';
import * as moment from 'moment';
import 'moment/locale/fr';

@Component({
  selector: 'app-forum-nouveau-sujet',
  templateUrl: './nouveau-sujet.component.html',
  styleUrls: ['./nouveau-sujet.component.scss']
})
export class ForumNouveauSujetComponent implements OnInit {
  forumCategorie: ForumCategorie;
  model: any = {};
  formError: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertify: AlertifyService,
    private forumSujetService: ForumSujetService) { }

  ngOnInit() {
    this.formError = new FormError();
    moment.locale('fr');
    this.route.data.subscribe(data => {
      this.forumCategorie = data['forumCategorie'];
      this.model.forumCategorieId = this.forumCategorie.id;
    });
  }

  dateFormatLL(date: Date){
    return moment(date).format('LL');
  }

  dateFormatLLLL(date: Date) {
    return moment(date).format('LLLL');
  }

  btnSubmit() {
    this.submitForm();
  }

  submitForm() {
    // Initialisation des erreurs précédantes
    this.formError.clear();
    this.forumSujetService.postForumSujet(this.model).subscribe(next => {
      this.alertify.success('Sujet envoyé sur le forum');
      this.router.navigate(['/forum/sujet/' + this.model.forumCategorieId , { PageSize: 5, PageNumber: 1 } ]);
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
