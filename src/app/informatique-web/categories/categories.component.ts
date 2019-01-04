import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
      // this.http.get('http://www.partages-web.net:81/api/categories').subscribe(response => {
      this.http.get('http://vps631991.ovh.net:81/api/categories').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

}

/*
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PriceService {

  private currentPriceUrl = 'http://api.coindesk.com/v1/bpi/currentprice.json';

  constructor(private http: Http) { }

  async getPrice(currency: string): Promise<number> {
    const response = await this.http.get(this.currentPriceUrl).toPromise();
    return response.json().bpi[currency].rate;
  }

}
*/