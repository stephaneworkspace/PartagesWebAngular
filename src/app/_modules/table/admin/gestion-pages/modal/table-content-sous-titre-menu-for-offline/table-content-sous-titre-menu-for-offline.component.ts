import { Component, OnInit, Input } from '@angular/core';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';
import { Article } from 'src/app/_models/article';

@Component({
  selector: 'app-module-table-admin-gestion-pages-table-content-sous-titre-menu-for-offline',
  templateUrl: './table-content-sous-titre-menu-for-offline.component.html',
  styleUrls: ['./table-content-sous-titre-menu-for-offline.component.scss']
})
export class ModuleTableAdminGestionPagesModalTableContentSousTitreMenuForOfflineComponent implements OnInit {
  @Input() articles: Article[];

  constructor() { }

  ngOnInit() {
  }

}
