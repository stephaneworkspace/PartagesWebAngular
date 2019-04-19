/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ForumReponseDernierPosteComponent } from './reponse-dernier-poste.component';

describe('ReponsePosteComponent', () => {
  let component: ForumReponseDernierPosteComponent;
  let fixture: ComponentFixture<ForumReponseDernierPosteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumReponseDernierPosteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumReponseDernierPosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
