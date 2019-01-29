/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InformatiqueWebMainComponent } from './informatique-web-main.component';

describe('InformatiqueWebMainComponent', () => {
  let component: InformatiqueWebMainComponent;
  let fixture: ComponentFixture<InformatiqueWebMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformatiqueWebMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformatiqueWebMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
