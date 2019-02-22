/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModuleTableAdminGestionPagesModalConfirmDeleteComponent } from './confirm-delete.component';

describe('ModalComponent', () => {
  let component: ModuleTableAdminGestionPagesModalConfirmDeleteComponent;
  let fixture: ComponentFixture<ModuleTableAdminGestionPagesModalConfirmDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleTableAdminGestionPagesModalConfirmDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTableAdminGestionPagesModalConfirmDeleteComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
