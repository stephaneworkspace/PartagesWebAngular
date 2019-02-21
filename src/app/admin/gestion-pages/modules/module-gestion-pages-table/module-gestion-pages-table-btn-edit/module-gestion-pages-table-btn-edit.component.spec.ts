import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleGestionPagesTableBtnEditComponent } from './module-gestion-pages-table-btn-edit.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
library.add(fas, far, fab);

describe('ModuleGestionPagesTableBtnEditerComponent', () => {
  let component: ModuleGestionPagesTableBtnEditComponent;
  let fixture: ComponentFixture<ModuleGestionPagesTableBtnEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleGestionPagesTableBtnEditComponent ],
      imports: [
        FontAwesomeModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleGestionPagesTableBtnEditComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.sectionItem = {
      id: 1,
      nom: 'Test',
      icone: 'cafe',
      type: 'none',
      position: 1,
      swHorsLigne: false
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show tooltip button SectionItem "nom"', () => {
    component.sectionItem = {
      id: 1,
      nom: 'Cafe de la section',
      icone: 'cafe',
      type: 'none',
      position: 1,
      swHorsLigne: false
    };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button')).not.toBe(null);
    expect(fixture.nativeElement.querySelector('button').getAttribute('title')).toEqual('Éditer «Cafe de la section»');
  });

  it('should show tooltip button TitremenuItem "nom"', () => {
    component.sectionItem = {
      id: 1,
      nom: 'Cafe de la section',
      icone: 'cafe',
      type: 'none',
      position: 1,
      swHorsLigne: false
    };
    component.titreMenuItem = {
      id: 1,
      sectionId: 1,
      nom: 'Titre menu cafe',
      position: 1,
      swHorsLigne: false,
    };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button')).not.toBe(null);
    expect(fixture.nativeElement.querySelector('button').getAttribute('title')).toEqual('Éditer «Titre menu cafe»');
  });
});
