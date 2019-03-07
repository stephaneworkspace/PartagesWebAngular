/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

// tslint:disable-next-line: max-line-length
import { ModuleTableAdminGestionPagesModalTableContentSousTitreMenuForOfflineComponent } from './table-content-sous-titre-menu-for-offline.component';

describe('ModuleTableAdminGestionPagesModalTableContentTitreMenuForOfflineComponent', () => {
  let component: ModuleTableAdminGestionPagesModalTableContentSousTitreMenuForOfflineComponent;
  let fixture: ComponentFixture<ModuleTableAdminGestionPagesModalTableContentSousTitreMenuForOfflineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleTableAdminGestionPagesModalTableContentSousTitreMenuForOfflineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTableAdminGestionPagesModalTableContentSousTitreMenuForOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
