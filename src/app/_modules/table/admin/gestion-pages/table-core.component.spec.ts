import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTableAdminGestionPagesCoreComponent } from './table-core.component';
import { ModuleGestionPagesTableBtnEditComponent } from './btn/edit.component';
import { ModuleGestionPagesTableBtnUpComponent } from './btn/up.component';
import { ModuleGestionPagesTableBtnDeleteComponent } from './btn/delete.component';
import { ModuleGestionPagesTableBtnDownComponent } from './btn/down.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
library.add(fas, far, fab);

describe('ModuleGestionPagesTableCoreSectionsComponent', () => {
  let component: ModuleTableAdminGestionPagesCoreComponent;
  let fixture: ComponentFixture<ModuleTableAdminGestionPagesCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModuleTableAdminGestionPagesCoreComponent,
        ModuleGestionPagesTableBtnEditComponent,
        ModuleGestionPagesTableBtnDeleteComponent,
        ModuleGestionPagesTableBtnUpComponent,
        ModuleGestionPagesTableBtnDownComponent
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
