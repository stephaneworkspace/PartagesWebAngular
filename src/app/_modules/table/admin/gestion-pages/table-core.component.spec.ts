import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTableAdminGestionPagesCoreComponent } from './table-core.component';
import { ModuleTableAdminGestionPagesBtnEditComponent } from './btn/edit.component';
import { ModuleTableAdminGestionPagesBtnUpComponent } from './btn/up.component';
import { ModuleTableAdminGestionPagesBtnDeleteComponent } from './btn/delete.component';
import { ModuleTableAdminGestionPagesBtnDownComponent } from './btn/down.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModuleTableAdminGestionPagesSpanNomComponent } from './span/nom.component';
library.add(fas, far, fab);

describe('ModuleGestionPagesTableCoreSectionsComponent', () => {
  let component: ModuleTableAdminGestionPagesCoreComponent;
  let fixture: ComponentFixture<ModuleTableAdminGestionPagesCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModuleTableAdminGestionPagesCoreComponent,
        ModuleTableAdminGestionPagesSpanNomComponent,
        ModuleTableAdminGestionPagesBtnEditComponent,
        ModuleTableAdminGestionPagesBtnDeleteComponent,
        ModuleTableAdminGestionPagesBtnUpComponent,
        ModuleTableAdminGestionPagesBtnDownComponent
      ],
      imports: [
        FontAwesomeModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTableAdminGestionPagesCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
