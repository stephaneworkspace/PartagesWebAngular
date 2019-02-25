import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { TitreMenuService } from 'src/app/_services/titre-menu.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { Section } from 'src/app/_models/section';

@Component({
  selector: 'app-edition-titre-menu',
  templateUrl: './edition-titre-menu.component.html',
  styleUrls: ['./edition-titre-menu.component.scss']
})
export class EditionTitreMenuComponent implements OnInit {
  // Voir guards, 4 février 2019 je ne l'ai pas testé
  @ViewChild('editForm') editForm: NgForm;
  titreMenu: TitreMenu;
  section: Section[];
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private titreMenuService: TitreMenuService,
) { }

ngOnInit() {
  this.route.data.subscribe(data => {
    this.titreMenu = data['titre-menu'];
    this.section = data['section'];
  });
}

submitForm() {
  // 7 fevrier , le token était envoyé ici ???
  this.titreMenuService.update(this.titreMenu.id, this.titreMenu).subscribe(next => {
    this.alertify.success('Titre mis à jour');
    this.editForm.reset(this.titreMenu);
  }, error => {
    this.alertify.error(error);
  });
}

}
