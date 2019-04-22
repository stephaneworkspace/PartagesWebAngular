import { Component, OnInit } from '@angular/core';
import { ForumSujet } from 'src/app/_models/Forum/forum-sujet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forum-reponse-dernier-poste',
  templateUrl: './reponse-dernier-poste.component.html',
  styleUrls: ['./reponse-dernier-poste.component.scss']
})
export class ForumReponseDernierPosteComponent implements OnInit {
  forumSujet: ForumSujet;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.forumSujet = data['forumSujet'];
    });
  }
}
