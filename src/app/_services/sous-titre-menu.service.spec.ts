/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SousTitreMenuService } from './sous-titre-menu.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: SousTitreMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SousTitreMenuService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should ...', inject([SousTitreMenuService], (service: SousTitreMenuService) => {
    expect(service).toBeTruthy();
  }));
});
