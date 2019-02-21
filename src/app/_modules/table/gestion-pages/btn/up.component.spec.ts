import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTableGestionPagesBtnUpComponent } from './up.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
library.add(fas, far, fab);

describe('ModuleGestionPagesTableBtnMonterComponent', () => {
  let component: ModuleTableGestionPagesBtnUpComponent;
  let fixture: ComponentFixture<ModuleTableGestionPagesBtnUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleTableGestionPagesBtnUpComponent ],
      imports: [
        FontAwesomeModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTableGestionPagesBtnUpComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.disable = true;
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

  it('should show tooltip empty because @Input disable = true', () => {
    component.disable = true;
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
    expect(fixture.nativeElement.querySelector('button').getAttribute('title')).toEqual('');
  });

  it('should show tooltip button SectionItem "nom"', () => {
    component.disable = false;
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
    expect(fixture.nativeElement.querySelector('button').getAttribute('title')).toEqual('Monter «Cafe de la section»');
  });

  it('should show tooltip button TitremenuItem "nom"', () => {
    component.disable = false;
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
    expect(fixture.nativeElement.querySelector('button').getAttribute('title')).toEqual('Monter «Titre menu cafe»');
  });
});
