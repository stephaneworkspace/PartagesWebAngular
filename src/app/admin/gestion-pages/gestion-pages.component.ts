import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
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
   * Edite la section
   * https://alligator.io/angular/animating-route-changes/ animation
   */
  editSection(item: Section) {
    this.router.navigate(['/admin/gestion-pages-edition-section/' + item.id]);
  }

  /**
   * Efface la section de la liste
   * Celà de met pas la section hors ligne mais l'efface et rend
   * hors ligne tout son contenu
   */
  deleteSection(item: Section) {
    this.sectionService.deleteSection(item.id).subscribe(next => {
      // 8 février - Faire un message personalisé avec analyse du contenu
      this.alertify.success('Section &laquo;' + item.nom + '&raquo; effacé et contenu rendu hors ligne');
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
  upSection(item: Section) {
    this.sectionService.upSection(item.id).subscribe(next => {
      // 8 février - Faire un message personalisé avec analyse du contenu
      this.alertify.success('Section &laquo;' + item.nom + '&raquo; montée');
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
  downSection(item: Section) {
    this.sectionService.downSection(item.id).subscribe(next => {
      // 8 février - Faire un message personalisé avec analyse du contenu
      this.alertify.success('Section &laquo;' + item.nom + '&raquo; descendue');
      this.getArbreEntier();
      // this.editForm.reset(this.section); // redirection à faire
    }, error => {
      // console.log(error);
      this.alertify.error(error.error);
    });
  }

}
