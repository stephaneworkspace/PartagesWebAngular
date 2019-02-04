/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditionTitreComponent } from './edition-titre.component';

describe('EditionTitreComponent', () => {
  let component: EditionTitreComponent;
  let fixture: ComponentFixture<EditionTitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionTitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionTitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
