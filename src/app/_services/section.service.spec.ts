/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed  } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { SectionService } from './section.service';
import { Section } from '../_models/section';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ExpectedConditions } from 'protractor';
// https://medium.com/spektrakel-blog/angular-testing-snippets-httpclient-d1dc2f035eb8
describe('Service: Section', () => {
  const testLogin = { Username: 'reba', Password: 'password'};

  let injector: TestBed;
  let service: SectionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            AuthService,
            SectionService
        ],
        imports: [
            HttpClientTestingModule
        ]
    });
    injector = getTestBed();
    service = injector.get(SectionService);
    httpMock = injector.get(HttpTestingController);
    // TestBed.compileComponents(); // https://chariotsolutions.com/blog/post/testing-angular-2-0-x-services-http-jasmine-karma/
  });


  it(
    'should be initialized',
    inject([AuthService, SectionService], (service: SectionService, authService: AuthService) => {
      expect(authService).toBeTruthy();
      expect(service).toBeTruthy();
    })
  );


  it(
    'should post a new section',
    inject(
      [AuthService, SectionService, HttpTestingController],
      (service: SectionService, authService: AuthService, backend: HttpTestingController) => {
        const section: Section = {
            nom: 'Test',
            icone: 'cafe',
            type: 'defaut',
            swHorsLigne: true,
            titreMenus: []
        };
        /*
        service.createSection(section).subscribe(
          (data: any) => {
            expect(data.success).toBe(true);
            expect(data.message).toBe('Ok');
          },
          (error: any) => {}
        );*/
/*
        backend
          .expectOne({
            url: 'https://example.com/login'
          })
          .flush({
            success: true,
            message: 'login was successful'
          });*/
      }
    )
  );

  describe('#getUsers', () => {
    it('should return an Observable<Section[]>', () => {
      const dummyUsers = [
        { login: 'John' },
        { login: 'Doe' }
      ];
      const section: Section = {
        nom: 'Test2',
        icone: 'cafe',
        type: 'defaut',
        swHorsLigne: true,
        titreMenus: []
    };

      service.create(section).subscribe(res => {
        // expect(users.length).toBe(2);
        // expect(users).toEqual(dummyUsers);
      });

      const mockUrl = ('http://localhost:5000/api/Sections');
/*
      const req = httpMock.expectOne(mockUrl);
      expect(req.request.urlWithParams).toBe(mockUrl);
      expect(req.request.method).toBe('POST');

      req.flush({});*/

    });
  });

  it('# Ajout d\'une section',
  inject([AuthService, SectionService],
    (httpMock: HttpTestingController, service: SectionService, authService: AuthService) => {
      // expect(service).toBeTruthy();
    })
  );
});
