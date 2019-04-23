import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { ForumSujet } from '../_models/Forum/forum-sujet';
import { Pagination, PaginatedResult } from '../_reponse/pagination';
import { ForumSujetService } from '../_services/forum/forum-sujet.service';
import { ForumCategorie } from '../_models/Forum/forum-categorie';


@Component({
  selector: 'app-forum-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.scss']
})
export class ForumSujetComponent implements OnInit {
  items: ForumSujet[];
  forumCategorie: ForumCategorie;
  pagination: Pagination;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertify: AlertifyService, // Popup pm, notification à faire amélioration
    private service: ForumSujetService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      // Tutorial .result Course 14 140
      this.items = data['items'].result;
      this.pagination = data['items'].pagination;
      if (this.items) {
        this.forumCategorie = this.items[0].forumCategorie;
      }
    });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadForumPostes();
  }

  loadForumPostes() {
    this.service.getForumSujets(
      this.forumCategorie.id,
      this.pagination.currentPage,
      this.pagination.itemsPerPage
    ).subscribe((res: PaginatedResult<ForumSujet[]>) => {
      // console.log(res);
      this.items = res.result;
      this.pagination = res.pagination;
    }, error => {
      this.alertify.error(error);
    });
  }
}
