import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { SectionService } from 'src/app/_services/section.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Section } from 'src/app/_models/section';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { EditionArticleComponent } from './edition-article/edition-article.component';
import { TitreMenuService } from 'src/app/_services/titre-menu.service';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';
import { SousTitreMenuService } from 'src/app/_services/sous-titre-menu.service';

interface Dto {
  section: Section;
  titreMenu?: TitreMenu;
  sousTitreMenu?: SousTitreMenu;
}

@Component({
  selector: 'app-gestion-pages',
  templateUrl: './gestion-pages.component.html',
  styleUrls: ['./gestion-pages.component.scss']
})
export class GestionPagesComponent implements OnInit {
  section: Section[];

  sectionsTemp: Section[];
  titreMenusTemp: TitreMenu[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private sectionService: SectionService,
    private titreMenuService: TitreMenuService,
    private sousTitreMenuService: SousTitreMenuService,
    private authService: AuthService,
    private zone: NgZone
) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.section = data['section'];
    });
  }

  getSections() {
    this.sectionService.getSections().subscribe((data: Array<Section>) => {
    this.section = data;
    }, error => {
      this.alertify.error(error.error);
    });
  }
  /*
   * *Note* 20 février à faire
   * -------------------------------
   * https://alligator.io/angular/animating-route-changes/
   */

  /**
   * Edition
   */

  edit(item: Dto) {
    if (item.titreMenu === undefined) {
      this.editSection(item);
    } else {
      if (item.sousTitreMenu === undefined) {
        this.editTitreMenu(item);
      } else {
        this.editSousTitreMenu(item);
      }
    }
  }

  editSection(item: Dto) {
    this.router.navigate(['/admin/gestion-pages-edition-section/' + item.section.id]);
  }

  editTitreMenu(item: Dto) {
    this.router.navigate(['/admin/gestion-pages-edition-titre-menu/' + item.section.id + '/' + item.titreMenu.id]);
  }

  editSousTitreMenu(item: Dto) {
    this.router.navigate(['/admin/gestion-pages-edition-sous-titre-menu/'
    + item.section.id + '/' + item.titreMenu.id + '/' + item.sousTitreMenu.id]);
  }

  /**
   * Delete
   */

  delete(item: Dto) {
    if (item.titreMenu === undefined) {
      this.deleteSection(item);
    } else {
      if (item.sousTitreMenu === undefined) {
        this.deleteTitreMenu(item);
      } else {
        this.deleteSousTitreMenu(item);
      }
    }
  }

  deleteSection(item: Dto) {
    this.sectionService.delete(item.section.id).subscribe(next => {
      // 25 février à faire titreMenu message sectionId
      if (item.section.swHorsLigne) {
        this.alertify.success('Section &laquo;' + item.section.nom + '&raquo; effacé');
      } else {
        this.alertify.success('Section &laquo;' + item.section.nom + '&raquo; effacé et contenu rendu hors ligne');
      }
      /*
      const _this = this;
      // this.section.forEach((itemArr, index) => {
      //  if (itemArr === item.section) { _this.section.splice(index, 1); }
      // });
      let pos0 = 0;
      _this.sectionsTemp = [];
      this.section.forEach((itemArr, index) => {
        if (itemArr !== item.section) {
          pos0++;
          _this.sectionsTemp.push({
            id: itemArr.id !== undefined ? itemArr.id : undefined,
            nom: itemArr.nom,
            icone: itemArr.icone,
            type: itemArr.type,
            position: pos0,
            swHorsLigne: itemArr.swHorsLigne,
            titreMenus: itemArr.titreMenus !== undefined ? itemArr.titreMenus.slice() : undefined,
            swMouseOver: itemArr.swMouseOver !== undefined ? itemArr.swMouseOver : undefined,
          });
        }
      });
      this.zone.run(() => {
        this.section = _this.sectionsTemp.slice();
      });*/
      this.getSections();
      // this.editForm.reset(this.section); // *Note* 20 février, je garde ça en place au cas ou ça peux me servir
    }, error => {
      this.alertify.error(error.error);
    });
  }


  deleteTitreMenu(item: Dto) {
    this.titreMenuService.delete(item.titreMenu.id).subscribe(next => {
      // 25 février, à faire :if (item.titreMenu.sectionId) {
        this.alertify.success('Titre du menu &laquo;' + item.titreMenu.nom + '&raquo; effacé');
      // } else {
      //  this.alertify.success('Titre menu &laquo;' + item.titreMenu.nom + '&raquo; effacé et contenu rendu hors ligne');
      // }
      /*
      const _this = this;
      _this.sectionsTemp = [];
      let pos0 = 0;
      let pos1 = 0;
      this.section.forEach((itemArr, index) => {
        pos0++;
        pos1 = 0;
        _this.titreMenusTemp = [];
        itemArr.titreMenus.forEach((sousItemArr, indexSousitem) => {
          if (sousItemArr !== item.titreMenu) {
            pos1++;
            _this.titreMenusTemp.push({
              id: sousItemArr.id,
              sectionId: sousItemArr.sectionId !== undefined ? sousItemArr.sectionId : undefined,
              nom: sousItemArr.nom,
              position: pos1,
              swHorsLigne: sousItemArr.swHorsLigne,
              swMouseOver: sousItemArr.swMouseOver !== undefined ? sousItemArr.swMouseOver : undefined
            });
          }
        });
        _this.sectionsTemp.push({
          id: itemArr.id !== undefined ? itemArr.id : undefined,
          nom: itemArr.nom,
          icone: itemArr.icone,
          type: itemArr.type,
          position: pos0,
          swHorsLigne: itemArr.swHorsLigne,
          titreMenus: _this.titreMenusTemp.slice(),
          swMouseOver: itemArr.swMouseOver !== undefined ? itemArr.swMouseOver : undefined,
        });
      });
      this.zone.run(() => {
        this.section = _this.sectionsTemp.slice();
      });*/
      this.getSections();
    }, error => {
      this.alertify.error(error.error);
    });
  }

  deleteSousTitreMenu(item: Dto) {
    this.sousTitreMenuService.delete(item.sousTitreMenu.id).subscribe(next => {
      this.alertify.success('Sous titre du menu &laquo;' + item.sousTitreMenu.nom + '&raquo; effacé');
      this.getSections();
    }, error => {
      this.alertify.error(error.error);
    });
  }

  /**
   * Up
   */

  up(item: Dto) {
    if (item.titreMenu === undefined) {
      this.upSection(item);
    } else {
      if (item.sousTitreMenu === undefined) {
        this.upTitreMenu(item);
      } else {
        this.upSousTitreMenu(item);
      }
    }
  }

  upSection(item: Dto) {
    this.sectionService.up(item.section.id).subscribe(next => {
      this.alertify.success('Section &laquo;' + item.section.nom + '&raquo; montée');
      this.getSections();
    }, error => {
      this.alertify.error(error.error);
    });
  }

  upTitreMenu(item: Dto) {
    this.titreMenuService.up(item.titreMenu.id).subscribe(next => {
      this.alertify.success('Titre du menu &laquo;' + item.titreMenu.nom + '&raquo; monté');
      this.getSections();
    }, error => {
      this.alertify.error(error.error);
    });
  }

  upSousTitreMenu(item: Dto) {
    this.sousTitreMenuService.up(item.sousTitreMenu.id).subscribe(next => {
      this.alertify.success('Sous titre du menu &laquo;' + item.sousTitreMenu.nom + '&raquo; monté');
      this.getSections();
    }, error => {
      this.alertify.error(error.error);
    });
  }

  /**
   * Down
   */

  down(item: Dto) {
    if (item.titreMenu === undefined) {
      this.downSection(item);
    } else {
      if (item.sousTitreMenu === undefined) {
        this.downTitreMenu(item);
      } else {
        this.downSousTitreMenu(item);
      }
    }
  }

  downSection(item: Dto) {
    this.sectionService.down(item.section.id).subscribe(next => {
      this.alertify.success('Section &laquo;' + item.section.nom + '&raquo; descendue');
      this.getSections();
    }, error => {
      this.alertify.error(error.error);
    });
  }

  downTitreMenu(item: Dto) {
    this.titreMenuService.down(item.titreMenu.id).subscribe(next => {
      this.alertify.success('Titre du menu &laquo;' + item.titreMenu.nom + '&raquo; descendu');
      this.getSections();
    }, error => {
      this.alertify.error(error.error);
    });
  }

  downSousTitreMenu(item: Dto) {
    this.sousTitreMenuService.down(item.sousTitreMenu.id).subscribe(next => {
      this.alertify.success('Sous titre du menu &laquo;' + item.sousTitreMenu.nom + '&raquo; descendu');
      this.getSections();
    }, error => {
      this.alertify.error(error.error);
    });
  }
}
