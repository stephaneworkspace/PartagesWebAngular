/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

// tslint:disable-next-line: max-line-length
import { ModuleTableAdminGestionPagesModalTableContentTitreMenuForOfflineComponent } from './table-content-titre-menu-for-offline.component';

describe('ModuleTableAdminGestionPagesModalTableContentTitreMenuForOfflineComponent', () => {
  let component: ModuleTableAdminGestionPagesModalTableContentTitreMenuForOfflineComponent;
  let fixture: ComponentFixture<ModuleTableAdminGestionPagesModalTableContentTitreMenuForOfflineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleTableAdminGestionPagesModalTableContentTitreMenuForOfflineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTableAdminGestionPagesModalTableContentTitreMenuForOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
