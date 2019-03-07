import { Component, OnInit, Input } from '@angular/core';
import { TitreMenu } from 'src/app/_models/titre-menu';

@Component({
  selector: 'app-module-table-admin-gestion-pages-table-content-section-for-offline',
  templateUrl: './table-content-section-for-offline.component.html',
  styleUrls: ['./table-content-section-for-offline.component.scss']
})
export class ModuleTableAdminGestionPagesModalTableContentSectionForOfflineComponent implements OnInit {
  @Input() titreMenus: TitreMenu[];

  constructor() { }

  ngOnInit() {
  }

}
