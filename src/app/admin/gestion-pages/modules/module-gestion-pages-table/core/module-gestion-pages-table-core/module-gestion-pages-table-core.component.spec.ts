/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModuleGestionPagesTableCoreComponent } from './module-gestion-pages-table-core.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
library.add(fas, far, fab);

// tslint:disable-next-line:max-line-length
import { ModuleGestionPagesTableBtnEditerComponent } from '../../module-gestion-pages-table-btn-editer/module-gestion-pages-table-btn-editer.component';
// tslint:disable-next-line:max-line-length
import { ModuleGestionPagesTableBtnMonterComponent } from '../../module-gestion-pages-table-btn-monter/module-gestion-pages-table-btn-monter.component';
// tslint:disable-next-line:max-line-length
import { ModuleGestionPagesTableBtnEffacerComponent } from '../../module-gestion-pages-table-btn-effacer/module-gestion-pages-table-btn-effacer.component';
// tslint:disable-next-line:max-line-length
import { ModuleGestionPagesTableBtnDescendreComponent } from '../../module-gestion-pages-table-btn-descendre/module-gestion-pages-table-btn-descendre.component';


describe('ModuleGestionPagesTableCoreSectionsComponent', () => {
  let component: ModuleGestionPagesTableCoreComponent;
  let fixture: ComponentFixture<ModuleGestionPagesTableCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModuleGestionPagesTableCoreComponent,
        ModuleGestionPagesTableBtnEditerComponent,
        ModuleGestionPagesTableBtnEffacerComponent,
        ModuleGestionPagesTableBtnMonterComponent,
        ModuleGestionPagesTableBtnDescendreComponent
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
