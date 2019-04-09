import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { ForumPoste } from '../_models/Forum/forum-poste';
import { Pagination, PaginatedResult } from '../_reponse/pagination';
import { ForumPosteService } from '../_services/forum/forum-poste.service';

@Component({
  selector: 'app-forum-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.scss']
})
export class ForumPosteComponent implements OnInit {

  items: ForumPoste[];
//  pageNumber: number;
//  pageSize: number;
  pagination: Pagination;
  sujetId: number;
 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertify: AlertifyService, // Popup pm, notification à faire amélioration
    private service: ForumPosteService
  ) {}

  ngOnInit() {
    /*
    this.route.paramMap.subscribe(params => {
      this.pageNumber = parseInt(params.get('PageNumber'), 10);
      this.pageSize = parseInt(params.get('PageSize'), 10);
    });*/
    this.route.data.subscribe(data => {
      // Tutorial .result Course 14 140
      this.items = data['items'].result;
      this.pagination = data['items'].pagination;
    });
    this.route.params.subscribe(params => {
      this.sujetId = params.id;
    });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadForumPostes();
  }

  loadForumPostes() {
    this.service.getForumPoste(
      this.sujetId,
      this.pagination.currentPage,
      this.pagination.itemsPerPage
    ).subscribe((res: PaginatedResult<ForumPoste[]>) => {
      console.log(res);
      this.items = res.result;
      this.pagination = res.pagination;
    }, error => {
      this.alertify.error(error);
    });
  }

}
