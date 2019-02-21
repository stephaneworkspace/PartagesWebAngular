import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleGestionPagesTableCoreComponent } from './module-gestion-pages-table-core.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
library.add(fas, far, fab);

// tslint:disable-next-line:max-line-length
import { ModuleGestionPagesTableBtnEditComponent } from '../../module-gestion-pages-table-btn-edit/module-gestion-pages-table-btn-edit.component';
// tslint:disable-next-line:max-line-length
import { ModuleGestionPagesTableBtnUpComponent } from '../../module-gestion-pages-table-btn-up/module-gestion-pages-table-btn-up.component';
// tslint:disable-next-line:max-line-length
import { ModuleGestionPagesTableBtnDeleteComponent } from '../../module-gestion-pages-table-btn-delete/module-gestion-pages-table-btn-delete.component';
// tslint:disable-next-line:max-line-length
import { ModuleGestionPagesTableBtnDownComponent } from '../../module-gestion-pages-table-btn-down/module-gestion-pages-table-btn-down.component';


describe('ModuleGestionPagesTableCoreSectionsComponent', () => {
  let component: ModuleGestionPagesTableCoreComponent;
  let fixture: ComponentFixture<ModuleGestionPagesTableCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModuleGestionPagesTableCoreComponent,
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
    fixture = TestBed.createComponent(ModuleGestionPagesTableCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
