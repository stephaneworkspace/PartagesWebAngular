/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NouveauSousTitreMenuComponent } from './nouveau-sous-titre-menu.component';

describe('NouveauSousTitreMenuComponent', () => {
  let component: NouveauSousTitreMenuComponent;
  let fixture: ComponentFixture<NouveauSousTitreMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauSousTitreMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauSousTitreMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
