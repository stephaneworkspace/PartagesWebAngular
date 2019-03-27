import { Component, OnInit } from '@angular/core';
import { ForumCategorie } from '../_models/Forum/forum-categorie';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class ForumIndexComponent implements OnInit {
  items: ForumCategorie[];
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
