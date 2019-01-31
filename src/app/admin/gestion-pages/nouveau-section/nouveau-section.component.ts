import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-nouveau-section',
  templateUrl: './nouveau-section.component.html',
  styleUrls: ['./nouveau-section.component.scss']
})
export class NouveauSectionComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
