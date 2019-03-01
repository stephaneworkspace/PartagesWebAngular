import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { SousTitreMenuService } from 'src/app/_services/sous-titre-menu.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Section } from 'src/app/_models/section';
import { FormError } from 'src/app/_class/form-error';
import { TitreMenu } from 'src/app/_models/titre-menu';
import * as Sugar from 'sugar';

@Component({
  selector: 'app-edition-sous-titre-menu',
  templateUrl: './edition-sous-titre-menu.component.html',
  styleUrls: ['./edition-sous-titre-menu.component.scss']
})
export class EditionSousTitreMenuComponent implements OnInit {
  // Voir guards, 4 février 2019 je ne l'ai pas testé
  @ViewChild('editForm') editForm: NgForm;
  model: SousTitreMenu;
  titreMenu: TitreMenu[];
  sections: Section[] = [];
  formError: any;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertify: AlertifyService,
    private sousTitreMenuService: SousTitreMenuService,
    private authService: AuthService
) { }

ngOnInit() {
  // Initialisation des erreurs de formulaires
  this.formError = new FormError();
  this.route.data.subscribe(data => {
    this.model = data.sousTitreMenu;
    if (this.model.titreMenuId == null) {
      this.model.titreMenuId = 0;
    }
    this.titreMenu = data['titreMenuSelectBox'];
    this.titreMenu.forEach(element => {
      this.sections.push(element.section);
    });
    const tableTemp = Sugar.Array(this.sections).unique(function(item) {
      return item.id;
    }).clone();
    this.sections = tableTemp['raw'].slice();
  });
}

submitForm() {
  // Initialisation des erreurs précédantes
  this.formError.clear();
  this.sousTitreMenuService.update(this.model.id, this.model).subscribe(next => {
    this.alertify.success('Sous titre du &laquo;' + this.model.nom + '&raquo; mis à jour');
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
  });
}

  /**
   * Dans le cas ou le formulaire est touché, suppression des erreurs en petit rouge
   */
  setDirtyFlag() {
    this.formError.clear();
  }

}
