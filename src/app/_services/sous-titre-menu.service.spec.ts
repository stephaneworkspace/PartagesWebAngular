/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SousTitreMenuService } from './sous-titre-menu.service';

describe('Service: SousTitre', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SousTitreMenuService]
    });
  });

  it('should ...', inject([SousTitreMenuService], (service: SousTitreMenuService) => {
    expect(service).toBeTruthy();
  }));
});
