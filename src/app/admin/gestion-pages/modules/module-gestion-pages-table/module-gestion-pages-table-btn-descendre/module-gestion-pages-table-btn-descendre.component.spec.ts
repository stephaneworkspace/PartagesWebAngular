/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModuleGestionPagesTableBtnDescendreComponent } from './module-gestion-pages-table-btn-descendre.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
library.add(fas, far, fab);

describe('ModuleGestionPagesTableBtnDescendreComponent', () => {
  let component: ModuleGestionPagesTableBtnDescendreComponent;
  let fixture: ComponentFixture<ModuleGestionPagesTableBtnDescendreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleGestionPagesTableBtnDescendreComponent ],
      imports: [
        FontAwesomeModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleGestionPagesTableBtnDescendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
// *Note* Mock ici le nom et tout les autres should create
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
