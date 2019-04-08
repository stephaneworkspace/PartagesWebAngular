import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { ForumPoste } from '../_models/Forum/forum-poste';

@Component({
  selector: 'app-forum-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.scss']
})
export class ForumPosteComponent implements OnInit {

  items: ForumPoste[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertify: AlertifyService, // Popup pm, notification à faire amélioration
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.items = data['items'];
    });
  }

}
