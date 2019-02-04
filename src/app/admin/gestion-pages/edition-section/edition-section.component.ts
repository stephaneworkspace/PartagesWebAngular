import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Section } from 'src/app/_models/section';
import { SectionService } from 'src/app/_services/section.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-edition-section',
  templateUrl: './edition-section.component.html',
  styleUrls: ['./edition-section.component.scss']
})
export class EditionSectionComponent implements OnInit {
  // Voir guards, 4 février 2019 je ne l'ai pas testé
  @ViewChild('editForm') editForm: NgForm;
  section: Section;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private sectionService: SectionService,
    private authService: AuthService
) { }

ngOnInit() {
  this.route.data.subscribe(data => {
    this.section = data['article'];
  });
}

updateArticle() {
  this.sectionService.updateSection(this.authService.decodedToken.nameid, this.section).subscribe(next => {
    this.alertify.success('Section mise à jour');
    this.editForm.reset(this.section);
  }, error => {
    this.alertify.error(error);
  });
}

}
