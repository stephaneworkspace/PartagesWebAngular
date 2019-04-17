import { Component, Input } from '@angular/core';
import { ForumCategorie } from 'src/app/_models/Forum/forum-categorie';

@Component({
  selector: 'app-module-table-forum-categories-span-nom',
  templateUrl: './nom.component.html',
  styleUrls: ['./nom.component.scss']
})
export class ModuleTableForumCategoriesSpanNomComponent {
  @Input() item: ForumCategorie;
  @Input() swMouseOver: boolean;

  constructor() { }
}
