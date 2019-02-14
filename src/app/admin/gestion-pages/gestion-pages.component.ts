import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { SectionService } from 'src/app/_services/section.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Section } from 'src/app/_models/section';

@Component({
  selector: 'app-gestion-pages',
  templateUrl: './gestion-pages.component.html',
  styleUrls: ['./gestion-pages.component.scss']
})
export class GestionPagesComponent implements OnInit {
  section: Section[];

  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private sectionService: SectionService,
    private authService: AuthService
) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.section = data['section'];
    });
  }

  getArbreEntier() {
    this.sectionService.GetArbreCompletSections().subscribe((data: Array<Section>) => {
    this.section = data;
    }, error => {
      this.alertify.error(error.error);
    });
  }

  /**
   * Efface la section de la liste
   * Celà de met pas la section hors ligne mais l'efface et rend
   * hors ligne tout son contenu
   */
  deleteSection(id: number) {
    this.sectionService.deleteSection(id).subscribe(next => {
      // 8 février - Faire un message personalisé avec analyse du contenu
      this.alertify.success('Section effacé et contenu rendu hors ligne');
      this.getArbreEntier();
      // this.editForm.reset(this.section); // redirection à faire
    }, error => {
      // console.log(error);
      this.alertify.error(error.error);
    });
  }

  /**
   * Efface la section de la liste
   * Celà de met pas la section hors ligne mais l'efface et rend
   * hors ligne tout son contenu
   */
  upSection(id: number) {
    this.sectionService.upSection(id).subscribe(next => {
      // 8 février - Faire un message personalisé avec analyse du contenu
      this.alertify.success('Section montée');
      this.getArbreEntier();
      // this.editForm.reset(this.section); // redirection à faire
    }, error => {
      // console.log(error);
      this.alertify.error(error.error);
    });
  }

  /**
   * Efface la section de la liste
   * Celà de met pas la section hors ligne mais l'efface et rend
   * hors ligne tout son contenu
   */
  downSection(id: number) {
    this.sectionService.downSection(id).subscribe(next => {
      // 8 février - Faire un message personalisé avec analyse du contenu
      this.alertify.success('Section descendue');
      this.getArbreEntier();
      // this.editForm.reset(this.section); // redirection à faire
    }, error => {
      // console.log(error);
      this.alertify.error(error.error);
    });
  }

}
