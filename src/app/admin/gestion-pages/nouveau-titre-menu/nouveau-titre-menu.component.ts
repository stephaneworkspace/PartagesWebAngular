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
  section: Section[] = [
    {
      id: 1,
      nom: 'Developpement web',
      icone: 'web',
      type: 'type01',
      position: 1,
      swHorsLigne: false
    },
    {
      id: 1,
      nom: 'Thème astral',
      icone: 'globe',
      type: 'type01',
      position: 2,
      swHorsLigne: false
    },
    {
      id: 1,
      nom: 'MAO',
      icone: 'globe',
      type: 'type01',
      position: 3,
      swHorsLigne: false
    },
    {
      id: 0,
      nom: 'Hors ligne',
      icone: 'web',
      type: 'type01',
      position: 4,
      swHorsLigne: false
    },
  ];

  // titreMenu: TitreMenu; pour le post, afin de ne pas envoyer le form... 
  // c'est peut être pas la meilleur methode
  titreMenu: TitreMenu;

  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private titreMenuService: TitreMenuService) { }

  ngOnInit() {
    this.model.sectionSelect = 'hors-ligne';
    this.route.data.subscribe(data => {
      // this.titreMenu = data['titre-menu'];
      // A FAIRE 7 fevrier this.section = data['section'];
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
