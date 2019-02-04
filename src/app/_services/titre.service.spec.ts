/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TitreService } from './titre.service';

describe('Service: Titre', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitreService]
    });
  });

  it('should ...', inject([TitreService], (service: TitreService) => {
    expect(service).toBeTruthy();
  }));
});
