/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModuleGestionPagesTableCoreTitreMenusComponent } from './module-gestion-pages-table-core-titre-menus.component';

describe('ModuleGestionPagesTableCoreTitreMenusComponent', () => {
  let component: ModuleGestionPagesTableCoreTitreMenusComponent;
  let fixture: ComponentFixture<ModuleGestionPagesTableCoreTitreMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleGestionPagesTableCoreTitreMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleGestionPagesTableCoreTitreMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
