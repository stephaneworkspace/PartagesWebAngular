import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuleTableAdminGestionPagesBtnDeleteComponent } from './delete.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
library.add(fas, far, fab);

describe('ModuleGestionPagesTableBtnDeleteComponent', () => {
  let component: ModuleTableAdminGestionPagesBtnDeleteComponent;
  let fixture: ComponentFixture<ModuleTableAdminGestionPagesBtnDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleTableAdminGestionPagesBtnDeleteComponent ],
      imports: [
        FontAwesomeModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTableAdminGestionPagesBtnDeleteComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges(); *Note*
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a to do in comment', async () => {
    // tslint:disable-next-line:no-shadowed-variable
    const fixture = TestBed.createComponent(ModuleTableAdminGestionPagesBtnDeleteComponent);
    const app = fixture.debugElement.componentInstance;
    expect(!app).toBeTruthy(); // Composant avec liste en cas de switch pour afficher le contenu offline
  });
});
