import { Component, OnInit, SimpleChange, OnChanges } from '@angular/core';
import {
  faEdit,
  faDesktop,
  faMusic,
  faGlobe,
  faPuzzlePiece,
  faSitemap,
  faCaretSquareDown,
  faFileAlt,
  faTrashAlt,
  faLevelUpAlt,
  faLevelDownAlt } from '@fortawesome/free-solid-svg-icons';
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
export class GestionPagesComponent implements OnInit, OnChanges {
  // Chargement de toutes les icones
  faEdit = faEdit;
  faPuzzlePiece = faPuzzlePiece;
  faDesktop = faDesktop;
  faMusic = faMusic;
  faGlobe = faGlobe;
  faSitemap = faSitemap;
  faCaretSquareDown = faCaretSquareDown;
  faFileAlt = faFileAlt;
  faTrashAlt = faTrashAlt;
  faLevelUpAlt = faLevelUpAlt;
  faLevelDownAlt = faLevelDownAlt;

  section: Section[];

  sectionEnLigne: Section[];
  sectionHorsLigne: Section[];

  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private sectionService: SectionService,
    private authService: AuthService
) { }


  ngOnInit() {
    this.route.data.subscribe(data => {
      this.section = data['section'];
      this.LoadArray();
    });
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    console.log('ngOnChanges - section = ' + changes['section'].currentValue);
    this.LoadArray();
  }

  getArbreEntier() {
    this.sectionService.GetArbreCompletSections().subscribe((data: Array<Section>) => {
    this.section = data;
    this.LoadArray();
    }, error => {
      this.alertify.error(error.error);
    });
  }

  private LoadArray() {
    this.sectionEnLigne = this.section.filter(x => x.swHorsLigne !== true);
    this.sectionHorsLigne = this.section.filter(x => x.swHorsLigne === true);
  }

  /**
   * deleteSection()
   *
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

}
