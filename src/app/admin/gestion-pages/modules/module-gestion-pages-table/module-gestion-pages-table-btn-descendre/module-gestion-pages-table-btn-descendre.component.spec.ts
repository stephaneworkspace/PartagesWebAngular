/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModuleGestionPagesTableBtnDescendreComponent } from './module-gestion-pages-table-btn-descendre.component';

describe('ModuleGestionPagesTableBtnDescendreComponent', () => {
  let component: ModuleGestionPagesTableBtnDescendreComponent;
  let fixture: ComponentFixture<ModuleGestionPagesTableBtnDescendreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleGestionPagesTableBtnDescendreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleGestionPagesTableBtnDescendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
