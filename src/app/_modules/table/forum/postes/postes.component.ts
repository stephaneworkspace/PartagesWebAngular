import { Component, OnInit, Input } from '@angular/core';
import { ForumPoste } from 'src/app/_models/Forum/forum-poste';

@Component({
  selector: 'app-module-table-forum-postes',
  templateUrl: './postes.component.html',
  styleUrls: ['./postes.component.scss']
})
export class ModuleTableForumPostesComponent implements OnInit {
  @Input() items: ForumPoste[];

  constructor() { }

  ngOnInit() {
  }

}
