import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { TitreMenuService } from 'src/app/_services/titre-menu.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { Section } from 'src/app/_models/section';
import { FormError } from 'src/app/_class/form-error';

@Component({
  selector: 'app-edition-titre-menu',
  templateUrl: './edition-titre-menu.component.html',
  styleUrls: ['./edition-titre-menu.component.scss']
})
export class EditionTitreMenuComponent implements OnInit {
  // Voir guards, 4 février 2019 je ne l'ai pas testé
  @ViewChild('editForm') editForm: NgForm;
  model: TitreMenu;
  section: Section[];
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
    private titreMenuService: TitreMenuService,
) { }

ngOnInit() {
  // Initialisation des erreurs de formulaires
  this.formError = new FormError();
  this.route.data.subscribe(data => {
    this.model = data.titreMenu;
    if (this.model.sectionId == null) {
      this.model.sectionId = 0;
    }
    this.section = data.section.slice();
  });
}

submitForm() {
  // Initialisation des erreurs précédantes
  this.formError.clear();
  this.titreMenuService.update(this.model.id, this.model).subscribe(next => {
    this.alertify.success('Titre mis à jour');
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

}
