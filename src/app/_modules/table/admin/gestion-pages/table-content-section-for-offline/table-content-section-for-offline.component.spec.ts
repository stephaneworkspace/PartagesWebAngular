/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableAdminGestionPagesTableContentSectionForOfflineComponent } from './table-content-section-for-offline.component';

describe('TableContentSectionForOfflineComponent', () => {
  let component: TableAdminGestionPagesTableContentSectionForOfflineComponent;
  let fixture: ComponentFixture<TableAdminGestionPagesTableContentSectionForOfflineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAdminGestionPagesTableContentSectionForOfflineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAdminGestionPagesTableContentSectionForOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
