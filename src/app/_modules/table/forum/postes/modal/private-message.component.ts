import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, OnChanges } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DtoAdminGestionPagesTable as Dto } from 'src/app/_dto/admin/gestion-pages/table';
import { User } from 'src/app/_models/user';
import { FormError } from 'src/app/_class/form-error';

@Component({
  selector: 'app-module-table-forum-postes-modal-private-message-component',
  templateUrl: './private-message.component.html',
  styleUrls: ['./private-message.component.scss']
})
export class ModuleTableForumPostesModalPrivateMessageComponent implements OnInit {
  @Input() item: User;
  @Output() output: EventEmitter<Dto> = new EventEmitter<Dto>();
  model: any = {};
  formError: any;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.formError = new FormError();
  }

  btnEnvoyerPush() {
    this.formError.clear();
    /*this.output.emit({
      // item: this.item A FAIRE DTO
    });*/








/*
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
    });*/



  }
}
