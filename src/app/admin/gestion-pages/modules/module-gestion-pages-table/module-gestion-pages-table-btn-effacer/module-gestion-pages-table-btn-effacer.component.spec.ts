/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModuleGestionPagesTableBtnEffacerComponent } from './module-gestion-pages-table-btn-effacer.component';

describe('ModuleGestionPagesTableBtnEffacerComponent', () => {
  let component: ModuleGestionPagesTableBtnEffacerComponent;
  let fixture: ComponentFixture<ModuleGestionPagesTableBtnEffacerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleGestionPagesTableBtnEffacerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleGestionPagesTableBtnEffacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
