/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModuleGestionPagesTableBtnMonterComponent } from './module-gestion-pages-table-btn-monter.component';

describe('ModuleGestionPagesTableBtnMonterComponent', () => {
  let component: ModuleGestionPagesTableBtnMonterComponent;
  let fixture: ComponentFixture<ModuleGestionPagesTableBtnMonterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleGestionPagesTableBtnMonterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleGestionPagesTableBtnMonterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
