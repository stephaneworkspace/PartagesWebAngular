/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModuleGestionPagesTableCoreComponent } from './module-gestion-pages-table-core.component';

describe('ModuleGestionPagesTableCoreSectionsComponent', () => {
  let component: ModuleGestionPagesTableCoreComponent;
  let fixture: ComponentFixture<ModuleGestionPagesTableCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleGestionPagesTableCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleGestionPagesTableCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
