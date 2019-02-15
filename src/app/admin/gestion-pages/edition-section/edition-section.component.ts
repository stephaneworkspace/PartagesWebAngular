import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Section } from 'src/app/_models/section';
import { SectionService } from 'src/app/_services/section.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { Icone } from 'src/app/_models/icone';

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
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(
    private route: ActivatedRoute,
    // private routeSnapshot: ActivatedRouteSnapshot,
    private alertify: AlertifyService,
    private sectionService: SectionService,
    private authService: AuthService
) { }

/**
 * Resolve ici
 */
ngOnInit() {
  this.route.data.subscribe(data => {
    // Resolver
    // console.log(data.selectBox.slice());
    // console.log(data.item);
    this.iconesSelectBox = data.selectBox.slice();
    this.model = data.item;
  });
}

submitForm() {
  console.log(this.model);
  this.sectionService.updateSection(this.model.id, this.model).subscribe(next => {
    this.alertify.success('Section mise à jour');
    this.editForm.reset(this.model);
  }, error => {
    this.alertify.error(error);
  });
}

}
