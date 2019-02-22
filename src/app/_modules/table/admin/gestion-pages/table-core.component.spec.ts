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

  it('should have a to do in comment', async () => {
    // tslint:disable-next-line:no-shadowed-variable
    const fixture = TestBed.createComponent(ModuleTableAdminGestionPagesCoreComponent);
    const app = fixture.debugElement.componentInstance;
    expect(!app).toBeTruthy(); // fade in correct, donc traitement de up, down, delete et edit en typescript
  });
});
