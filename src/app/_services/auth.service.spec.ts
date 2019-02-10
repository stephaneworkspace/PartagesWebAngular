/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ExpectedConditions } from 'protractor';
// https://medium.com/spektrakel-blog/angular-testing-snippets-httpclient-d1dc2f035eb8
describe('Service: Auth', () => {
  const testLogin = { Username: 'reba', Password: 'password'};
  // let service: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('#getPromiseValue should return value from a promise',
  inject([AuthService],
    (httpMock: HttpTestingController, service: AuthService) => {
      expect(service).toBeTruthy();
    })
  );
});
