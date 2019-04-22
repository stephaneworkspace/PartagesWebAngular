import { Component, OnInit } from '@angular/core';
import { ForumPoste } from 'src/app/_models/Forum/forum-poste';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forum-reponse-citation',
  templateUrl: './reponse-citation.component.html',
  styleUrls: ['./reponse-citation.component.scss']
})
export class ForumReponseCitationComponent implements OnInit {
  forumPoste: ForumPoste;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.forumPoste = data['forumPoste'];
    });
  }

}
