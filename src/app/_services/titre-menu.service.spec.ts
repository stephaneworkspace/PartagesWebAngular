/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TitreMenuService } from './titre-menu.service';

describe('Service: Titre', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitreMenuService]
    });
  });

  it('should ...', inject([TitreMenuService], (service: TitreMenuService) => {
    expect(service).toBeTruthy();
  }));
});
