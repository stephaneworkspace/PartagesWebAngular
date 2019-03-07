import { Component, OnInit, Input } from '@angular/core';
import { SousTitreMenu } from 'src/app/_models/sous-titre-menu';

@Component({
  selector: 'app-module-table-admin-gestion-pages-table-content-titre-menu-for-offline',
  templateUrl: './table-content-titre-menu-for-offline.component.html',
  styleUrls: ['./table-content-titre-menu-for-offline.component.scss']
})
export class ModuleTableAdminGestionPagesModalTableContentTitreMenuForOfflineComponent implements OnInit {
  @Input() sousTitreMenus: SousTitreMenu[];

  constructor() { }

  ngOnInit() {
  }

}
