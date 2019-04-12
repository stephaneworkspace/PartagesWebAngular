import { Component, Input, } from '@angular/core';
import { ForumSujet } from 'src/app/_models/Forum/forum-sujet';

@Component({
  selector: 'app-module-table-forum-sujets-span-nom',
  templateUrl: './nom.component.html',
  styleUrls: ['./nom.component.scss']
})
export class ModuleTableForumSujetsSpanNomComponent {
  @Input() item: ForumSujet;
  @Input() swMouseOver: boolean;

  constructor() { }

}
