/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent } from './table-content-section-for-offline.component';
import { ModuleTableAdminGestionPagesSpanNomComponent } from '../span/nom.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
library.add(fas, far, fab);

describe('TableContentSectionForOfflineComponent', () => {
  let component: ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent;
  let fixture: ComponentFixture<ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent,
        ModuleTableAdminGestionPagesSpanNomComponent
      ],
      imports: [
        FontAwesomeModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
