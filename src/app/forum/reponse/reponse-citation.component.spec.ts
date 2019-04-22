/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ForumReponseCitationComponent } from './reponse-citation.component';

describe('ReponseCitationComponent', () => {
  let component: ForumReponseCitationComponent;
  let fixture: ComponentFixture<ForumReponseCitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumReponseCitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumReponseCitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
