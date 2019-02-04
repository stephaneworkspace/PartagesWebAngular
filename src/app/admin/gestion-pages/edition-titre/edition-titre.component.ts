import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Titre } from 'src/app/_models/titre';
import { TitreService } from 'src/app/_services/titre.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-edition-titre',
  templateUrl: './edition-titre.component.html',
  styleUrls: ['./edition-titre.component.scss']
})
export class EditionTitreComponent implements OnInit {
  // Voir guards, 4 février 2019 je ne l'ai pas testé
  @ViewChild('editionTitreForm') editionTitreForm: NgForm;
  titre: Titre;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editionTitreForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private titreService: TitreService,
    private authService: AuthService
) { }

ngOnInit() {
  this.route.data.subscribe(data => {
    this.titre = data['titre'];
  });
}

updateTitre() {
  this.titreService.updateTitre(this.authService.decodedToken.nameid, this.titre).subscribe(next => {
    this.alertify.success('Titre mis à jour');
    this.editionTitreForm.reset(this.titre);
  }, error => {
    this.alertify.error(error);
  });
}

}
