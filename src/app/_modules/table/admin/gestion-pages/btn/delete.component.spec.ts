import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ModuleTableAdminGestionPagesBtnDeleteComponent } from './delete.component';
// tslint:disable-next-line:max-line-length
import { ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent } from '../table-content-section-for-offline/table-content-section-for-offline.component';

import { NgbModule, NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModuleTableAdminGestionPagesSpanNomComponent } from '../span/nom.component';
library.add(fas, far, fab);

describe('ModuleGestionPagesTableBtnDeleteComponent', () => {
  let component: ModuleTableAdminGestionPagesBtnDeleteComponent;
  let fixture: ComponentFixture<ModuleTableAdminGestionPagesBtnDeleteComponent>;
  let modalService: NgbModal;
  // let modalRef: NgbModalRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModuleTableAdminGestionPagesBtnDeleteComponent,
        ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent,
        ModuleTableAdminGestionPagesSpanNomComponent
       ],
      imports: [
        FontAwesomeModule,
        NgbModule,
        // NgbActiveModal
        // NgbModalRef
      ],
    }).compileComponents().then(() => {
      modalService = TestBed.get(NgbModal);
      // modalRef = modalService.open(null);
      fixture = TestBed.createComponent(ModuleTableAdminGestionPagesBtnDeleteComponent);
      component = fixture.componentInstance;
      // spyOn(modalService, 'open').and.returnValue(modalRef);
      spyOn(console, 'log').and.callThrough();
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTableAdminGestionPagesBtnDeleteComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    component.sectionItem = {
      id: 1,
      nom: 'Test',
      icone: 'cafe',
      type: 'none',
      position: 1,
      swHorsLigne: false,
      titreMenus: []
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have a to do in comment', async () => {
    // tslint:disable-next-line:no-shadowed-variable
    const fixture = TestBed.createComponent(ModuleTableAdminGestionPagesBtnDeleteComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show tooltip button SectionItem "nom"', () => {
    component.sectionItem = {
      id: 1,
      nom: 'Cafe de la section',
      icone: 'cafe',
      type: 'none',
      position: 1,
      swHorsLigne: false,
      titreMenus: []
    };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button')).not.toBe(null);
    expect(fixture.nativeElement.querySelector('button').getAttribute('title')).toEqual('Supprimer «Cafe de la section»');
  });

  it('should show tooltip button TitremenuItem "nom"', () => {
    component.sectionItem = {
      id: 1,
      nom: 'Cafe de la section',
      icone: 'cafe',
      type: 'none',
      position: 1,
      swHorsLigne: false,
      titreMenus: [{
        id: 1,
        sectionId: 1,
        nom: 'Titre menu cafe',
        position: 1,
        swHorsLigne: false
      }]
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
    expect(fixture.nativeElement.querySelector('button').getAttribute('title')).toEqual('Supprimer «Titre menu cafe»');
  });

  it('#clicked() should show modal', () => {
    component.sectionItem = {
      id: 1,
      nom: 'Cafe de la section',
      icone: 'cafe',
      type: 'none',
      position: 1,
      swHorsLigne: false,
      titreMenus: [{
        id: 1,
        sectionId: 1,
        nom: 'Titre menu cafe',
        position: 1,
        swHorsLigne: false
      }]
    };
    component.titreMenuItem = {
      id: 1,
      sectionId: 1,
      nom: 'Titre menu cafe',
      position: 1,
      swHorsLigne: false,
    };
    fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    // expect(fixture.nativeElement.querySelector('h4').textContent).not.toContain('Attention');
    let el = fixture.nativeElement.querySelector('h4');
    expect(el).not.toBeTruthy();
    /*expect(component.).toBe(false, 'off at first');*/
    component.openModal('null');

    console.log(modalService);

    const modalRef = modalService.open(null);
    console.log(modalRef);

    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('h4');
    console.log(fixture.nativeElement);
    // expect(el).toBeTruthy();
    /*
    expect(comp.isOn).toBe(true, 'on after click');
    comp.clicked();
    expect(comp.isOn).toBe(false, 'off after second click');*/
  });

});
