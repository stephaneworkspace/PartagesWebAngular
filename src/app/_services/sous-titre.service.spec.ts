/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SousTitreService } from './sous-titre.service';

describe('Service: SousTitre', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SousTitreService]
    });
  });

  it('should ...', inject([SousTitreService], (service: SousTitreService) => {
    expect(service).toBeTruthy();
  }));
});
