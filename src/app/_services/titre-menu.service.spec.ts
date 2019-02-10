/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TitreMenuService } from './titre-menu.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Titre', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitreMenuService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should ...', inject([TitreMenuService], (service: TitreMenuService) => {
    expect(service).toBeTruthy();
  }));
});
