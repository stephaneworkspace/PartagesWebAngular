/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent } from './table-content-section-for-offline.component';

describe('TableContentSectionForOfflineComponent', () => {
  let component: ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent;
  let fixture: ComponentFixture<ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
