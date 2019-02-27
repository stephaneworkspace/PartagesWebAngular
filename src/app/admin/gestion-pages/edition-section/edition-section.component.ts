import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Section } from 'src/app/_models/section';
import { SectionService } from 'src/app/_services/section.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { Icone } from 'src/app/_models/icone';
import { FormError } from 'src/app/_class/form-error';

@Component({
  selector: 'app-edition-section',
  templateUrl: './edition-section.component.html',
  styleUrls: ['./edition-section.component.scss']
})
export class EditionSectionComponent implements OnInit {
  // Voir guards, 4 février 2019 je ne l'ai pas testé
  @ViewChild('editForm') editForm: NgForm;
  model: Section;
  iconesSelectBox: Icone[];
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
    private sectionService: SectionService,
    private authService: AuthService
) { }

/**
 * Resolve ici
 */
ngOnInit() {
  // Initialisation des erreurs de formulaires
  this.formError = new FormError();
  this.route.data.subscribe(data => {
    // Resolver
    this.iconesSelectBox = data.selectBox.slice();
    this.model = data.item;
  });
}

submitForm() {
    // Initialisation des erreurs précédantes
    this.formError.clear();
    this.sectionService.update(this.model.id, this.model).subscribe(next => {
      this.alertify.success('Section &laquo;' + this.model.nom + '&raquo; mise à jour');
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
