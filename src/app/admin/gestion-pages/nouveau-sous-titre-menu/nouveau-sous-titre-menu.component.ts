import { Component, OnInit } from '@angular/core';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { SousTitreMenuService } from 'src/app/_services/sous-titre-menu.service';
import { FormError } from 'src/app/_class/form-error';
import { Section } from 'src/app/_models/section';
import * as Sugar from 'sugar';

@Component({
  selector: 'app-nouveau-sous-titre-menu',
  templateUrl: './nouveau-sous-titre-menu.component.html',
  styleUrls: ['./nouveau-sous-titre-menu.component.scss']
})
export class NouveauSousTitreMenuComponent implements OnInit {
  model: any = {};
  titreMenu: TitreMenu[];
  sections: Section[] = [];
  formError: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertify: AlertifyService,
    private sousTitreMenuService: SousTitreMenuService) { }

    ngOnInit() {
      // Initialisation des erreurs de formulaires
      this.formError = new FormError();
      // Resolver
      this.route.data.subscribe(data => {
        this.titreMenu = data['titreMenuSelectBox'];
        this.titreMenu.forEach(element => {
          this.sections.push(element.section);
        });
        const tableTemp = Sugar.Array(this.sections).unique(function(item) {
          return item.id;
        }).clone();
        this.sections = tableTemp['raw'].slice();
        console.log(this.sections);
      });
    }
    submitForm() {
      // Initialisation des erreurs précédantes
      this.formError.clear();
      this.sousTitreMenuService.create(this.model).subscribe(next => {
        this.alertify.success('Sous titre de menu &laquo;' + this.model.nom + '&raquo; crée');
        // this.editForm.reset(this.titreMenu);
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
