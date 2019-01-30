import { Component, OnInit } from '@angular/core';
import { faEdit, faDesktop, faGlobe, faPuzzlePiece, faSitemap, faCaretSquareDown, faFileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gestion-pages',
  templateUrl: './gestion-pages.component.html',
  styleUrls: ['./gestion-pages.component.scss']
})
export class GestionPagesComponent implements OnInit {
  // Chargement de toutes les iconnes
  faEdit = faEdit;
  faPuzzlePiece = faPuzzlePiece;
  faDesktop = faDesktop;
  faSitemap = faSitemap;
  faCaretSquareDown = faCaretSquareDown;
  faFileAlt = faFileAlt;

  constructor() { }

  ngOnInit() {

  }

}
