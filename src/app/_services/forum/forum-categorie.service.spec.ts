/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ForumCategorieService } from './forum-categorie.service';

describe('Service: ForumCategorie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForumCategorieService]
    });
  });

  it('should ...', inject([ForumCategorieService], (service: ForumCategorieService) => {
    expect(service).toBeTruthy();
  }));
});
