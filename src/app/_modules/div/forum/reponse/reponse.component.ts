import { Component, OnInit, Input } from '@angular/core';
import { ForumSujet } from 'src/app/_models/Forum/forum-sujet';
import * as moment from 'moment';
import 'moment/locale/fr';
import { FormError } from 'src/app/_class/form-error';

@Component({
  selector: 'app-module-div-forum-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.scss']
})
export class ModuleDivForumReponseComponent implements OnInit {
  @Input() sujet: ForumSujet;
  @Input() contenu?: string;
  model: any = {};
  formError: any;

  constructor() { }

  ngOnInit() {
    this.formError = new FormError();
    moment.locale('fr');
    this.model.contenu = this.contenu;
  }

  dateFormatLL(date: Date){
    return moment(date).format('LL');
  }

  dateFormatLLLL(date: Date){
    return moment(date).format('LLLL');
  }


  submitForm() {
    // Initialisation des erreurs précédantes
    this.formError.clear();
    /*
    this.articleService.update(this.model.id, this.model).subscribe(next => {
      this.alertify.success('Article &laquo;' + this.model.nom + '&raquo; mis à jour');
      this.editForm.reset(this.model);
      this.router.navigate(['/admin']);
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
    });*/
  }

}


