import { Component, OnInit, ViewChild } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { SectionService } from 'src/app/_services/section.service';
import { NgForm } from '@angular/forms';
import { Icone } from 'src/app/_models/icone';
import { ActivatedRoute, Router } from '@angular/router';
import { FormError } from '../../../_class/form-error';

@Component({
  selector: 'app-nouveau-section',
  templateUrl: './nouveau-section.component.html',
  styleUrls: ['./nouveau-section.component.scss']
})
export class NouveauSectionComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  model: any = {};
  iconesSelectBox: Icone[];
  formError: any;

  public faSizeProp: SizeProp;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertify: AlertifyService,
    private sectionService: SectionService
) { }

  /**
   * Resolve ici
   **/
  ngOnInit() {
    this.faSizeProp = 'lg';
    this.model.typeSelect = 'none';
    // Initialisation des erreurs de formulaires
    this.formError = new FormError();
    // Resolve
    this.route.data.subscribe(data => {
      // Resolver
      this.iconesSelectBox = data.selectBox.slice();
    });
  }

  /**
   * Envoyer le formulaire
   */
  submitForm() {
    // Initialisation des erreurs précédantes
    this.formError.clear();
    this.sectionService.create(this.model).subscribe(next => {
      this.alertify.success('Section &laquo;' + this.model.nom + '&raquo; crée');
      this.editForm.reset(this.model); // pour @HostListener('window:beforeunload', ['$event'])
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
