import { Component, OnInit, Input } from '@angular/core';
import { ForumCategorie } from 'src/app/_models/Forum/forum-categorie';

@Component({
  selector: 'app-module-table-forum-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class ModuleTableForumCategoriesComponent implements OnInit {
  @Input() items: ForumCategorie[];

  constructor() { }

  ngOnInit() {
  }

}
