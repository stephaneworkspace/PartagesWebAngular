import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { SousTitreMenuService } from 'src/app/_services/sous-titre-menu.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-edition-sous-titre-menu',
  templateUrl: './edition-sous-titre-menu.component.html',
  styleUrls: ['./edition-sous-titre-menu.component.scss']
})
export class EditionSousTitreMenuComponent implements OnInit {
  // Voir guards, 4 février 2019 je ne l'ai pas testé
  @ViewChild('editionSousTitreMenuForm') editionSousTitreMenuForm: NgForm;
  sousTitreMenu: SousTitreMenu;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editionSousTitreMenuForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private sousTitreMenuService: SousTitreMenuService,
    private authService: AuthService
) { }

ngOnInit() {
  this.route.data.subscribe(data => {
    this.sousTitreMenu = data['sous-titre-menu'];
  });
}

updateTitreMenu() {
  this.sousTitreMenuService.updateSousTitreMenu(this.authService.decodedToken.nameid, this.sousTitreMenu).subscribe(next => {
    this.alertify.success('Sous titre mis à jour');
    this.editionSousTitreMenuForm.reset(this.sousTitreMenu);
  }, error => {
    this.alertify.error(error);
  });
}

}
