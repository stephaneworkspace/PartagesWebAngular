/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModuleGestionPagesTableCoreSectionsComponent } from './module-gestion-pages-table-core-sections.component';

describe('ModuleGestionPagesTableCoreSectionsComponent', () => {
  let component: ModuleGestionPagesTableCoreSectionsComponent;
  let fixture: ComponentFixture<ModuleGestionPagesTableCoreSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleGestionPagesTableCoreSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleGestionPagesTableCoreSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
