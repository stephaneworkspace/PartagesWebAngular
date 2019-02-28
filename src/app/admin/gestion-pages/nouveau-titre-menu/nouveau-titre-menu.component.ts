import { Component, OnInit, ViewChild } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { NgForm } from '@angular/forms';
import { Section } from 'src/app/_models/section';
import { AuthService } from 'src/app/_services/auth.service';
import { TitreMenuService } from 'src/app/_services/titre-menu.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { FormError } from 'src/app/_class/form-error';

@Component({
  selector: 'app-nouveau-titre-menu',
  templateUrl: './nouveau-titre-menu.component.html',
  styleUrls: ['./nouveau-titre-menu.component.scss']
})
export class NouveauTitreMenuComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  model: any = {};
  section: Section[];
  formError: any;

  // titreMenu: TitreMenu; pour le post, afin de ne pas envoyer le form... ??? 17 février
  // c'est peut être pas la meilleur methode
  // titreMenu: TitreMenu; // 28 Février *Note* désactivé

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertify: AlertifyService,
    private titreMenuService: TitreMenuService) { }

  ngOnInit() {
    // Initialisation des erreurs de formulaires
    this.formError = new FormError();
    // Resolver
    this.route.data.subscribe(data => {
      this.section = data['sectionSelectBox'];
    });
  }

  submitForm() {
    // Initialisation des erreurs précédantes
    this.formError.clear();
    this.titreMenuService.create(this.model).subscribe(next => {
      this.alertify.success('Titre de menu &laquo;' + this.model.nom + '&raquo; crée');
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
