import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { SectionService } from 'src/app/_services/section.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Section } from 'src/app/_models/section';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { EditionArticleComponent } from './edition-article/edition-article.component';
import { TitreMenuService } from 'src/app/_services/titre-menu.service';

interface Dto {
  section: Section;
  titreMenu?: TitreMenu;
}

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
    private titreMenuService: TitreMenuService,
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

  edit(item: Dto) {
    if (item.titreMenu === undefined) {
      this.editSection(item);
    } else {
      // à faire
    }
  }

  /**
   * Navigation vers edition de Section
   * https://alligator.io/angular/animating-route-changes/ animation
   */
  editSection(item: Dto) {
    this.router.navigate(['/admin/gestion-pages-edition-section/' + item.section.id]);
  }

  editTitreMenu(item: Dto) {
    this.router.navigate(['/admin/gestion-pages-edition-titre-menu/' + item.titreMenu.id]);
  }

  delete(item: Dto) {
    if (item.titreMenu === undefined) {
      this.deleteSection(item);
    } else {
      this.deleteTitreMenu(item);
    }
  }

  deleteSection(item: Dto) {
    this.sectionService.delete(item.section.id).subscribe(next => {
      // 8 février - Faire un message personalisé avec analyse du contenu
      // 15 février si il n'y a pas de contenu dans le else, traîter correctement
      if (item.section.swHorsLigne) {
        this.alertify.success('Section &laquo;' + item.section.nom + '&raquo; effacé');
      } else {
        this.alertify.success('Section &laquo;' + item.section.nom + '&raquo; effacé et contenu rendu hors ligne');
      }
      this.getArbreEntier();
      // this.editForm.reset(this.section); // redirection à faire
    }, error => {
      // console.log(error);
      this.alertify.error(error.error);
    });
  }

  deleteTitreMenu(item: Dto) {
    this.titreMenuService.delete(item.titreMenu.id).subscribe(next => {
      // 8 février - Faire un message personalisé avec analyse du contenu
      // 15 février si il n'y a pas de contenu dans le else, traîter correctement
      if (item.titreMenu.swHorsLigne) {
        this.alertify.success('Titre menu &laquo;' + item.titreMenu.nom + '&raquo; effacé');
      } else {
        this.alertify.success('Titre menu &laquo;' + item.titreMenu.nom + '&raquo; effacé et contenu rendu hors ligne');
      }
      this.getArbreEntier();
    }, error => {
      this.alertify.error(error.error);
    });
  }

  upSection(item: Section) {
    this.sectionService.up(item.id).subscribe(next => {
      // 8 février - Faire un message personalisé avec analyse du contenu
      this.alertify.success('Section &laquo;' + item.nom + '&raquo; montée');
      this.getArbreEntier();
      // this.editForm.reset(this.section); // redirection à faire
    }, error => {
      // console.log(error);
      this.alertify.error(error.error);
    });
  }

  downSection(item: Section) {
    this.sectionService.down(item.id).subscribe(next => {
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
