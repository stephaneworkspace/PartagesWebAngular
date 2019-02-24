import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Section } from 'src/app/_models/section';
import { TitreMenu } from 'src/app/_models/titre-menu';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';
import { ModuleTableAdminGestionPagesModalConfirmDeleteComponent } from '../modal/confirm-delete.component';

interface Dto {
  section: Section;
  titreMenu?: TitreMenu;
  sousTitreMenu?: SousTitreMenu;
}

@Component({
  selector: 'app-module-table-admin-gestion-pages-btn-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class ModuleTableAdminGestionPagesBtnDeleteComponent implements OnInit, OnChanges {
  @Input() disable: boolean;
  @Input() sectionItem: Section;
  @Input() titreMenuItem?: TitreMenu;
  @Output() output: EventEmitter<Dto> = new EventEmitter<Dto>();

  nom: string;
  swAfficherListeQuiVaEtreMisHorsLigne: boolean;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.bind();
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange} ) {
    this.bind();
  }

  bind() {
    if (this.disable === true) {
      this.nom = '';
    } else {
      if (this.titreMenuItem === undefined) {
        this.nom = 'Supprimer «' +  this.sectionItem.nom + '»';
      } else {
        this.nom = 'Supprimer «' +  this.titreMenuItem.nom + '»';
      }
    }
    if (this.sectionItem.titreMenus.length === 0) {
      this.swAfficherListeQuiVaEtreMisHorsLigne = false;
    } else {
      if (this.titreMenuItem === undefined) {
        this.swAfficherListeQuiVaEtreMisHorsLigne = true;
      } else {
        this.swAfficherListeQuiVaEtreMisHorsLigne = false;
      }
    }
  }

  openModal() {
    const modalRef = this.modalService.open(ModuleTableAdminGestionPagesModalConfirmDeleteComponent, { centered: true });
    modalRef.componentInstance.nom = this.nom;
    modalRef.componentInstance.swAfficherListeQuiVaEtreMisHorsLigne = this.swAfficherListeQuiVaEtreMisHorsLigne;
    modalRef.componentInstance.sectionItem = this.sectionItem;
    modalRef.componentInstance.titreMenuItem = this.titreMenuItem;
    modalRef.componentInstance.output.subscribe((result) => {
      this.output.emit(result);
    });
  }

  btnYesPush() {
    this.output.emit({
      section: this.sectionItem,
      titreMenu: this.titreMenuItem
    });
  }
}
