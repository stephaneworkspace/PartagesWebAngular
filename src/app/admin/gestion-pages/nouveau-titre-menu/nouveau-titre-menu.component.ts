import { Component, OnInit, ViewChild } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { NgForm } from '@angular/forms';
import { Section } from 'src/app/_models/section';
import { AuthService } from 'src/app/_services/auth.service';
import { TitreMenuService } from 'src/app/_services/titre-menu.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { TitreMenu } from 'src/app/_models/titre-menu';

@Component({
  selector: 'app-nouveau-titre-menu',
  templateUrl: './nouveau-titre-menu.component.html',
  styleUrls: ['./nouveau-titre-menu.component.scss']
})
export class NouveauTitreMenuComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  model: any = {};
  section: Section[];

  // titreMenu: TitreMenu; pour le post, afin de ne pas envoyer le form... ??? 17 février
  // c'est peut être pas la meilleur methode
  titreMenu: TitreMenu;

  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private titreMenuService: TitreMenuService) { }

  ngOnInit() {
    // inutile 17 février... this.model.sectionSelect = 'hors-ligne';
    // Resolver
    this.route.data.subscribe(data => {
      this.section = data['sectionSelectBox'];
    });
  }

  createTitreMenu() {
    this.titreMenuService.createTitreMenu(this.titreMenu).subscribe(next => {
      this.alertify.success('Titre crée');
      // this.editForm.reset(this.titreMenu);
    }, error => {
      this.alertify.error(error);
    });
  }

}
