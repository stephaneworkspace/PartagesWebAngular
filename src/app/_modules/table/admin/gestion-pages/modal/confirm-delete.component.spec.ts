/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModuleTableAdminGestionPagesModalConfirmDeleteComponent } from './confirm-delete.component';
// tslint:disable-next-line:max-line-length
import { ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent } from '../table-content-section-for-offline/table-content-section-for-offline.component';
import { ModuleTableAdminGestionPagesSpanNomComponent } from '../span/nom.component';

import { NgbModalModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
library.add(fas, far, fab);

describe('ModuleTableAdminGestionPagesModalConfirmDeleteComponent', () => {
  let component: ModuleTableAdminGestionPagesModalConfirmDeleteComponent;
  let fixture: ComponentFixture<ModuleTableAdminGestionPagesModalConfirmDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModuleTableAdminGestionPagesModalConfirmDeleteComponent,
        ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent,
        ModuleTableAdminGestionPagesSpanNomComponent
      ],
      imports: [
        FontAwesomeModule,
        NgbModalModule,
      ],
      providers: [
        NgbActiveModal
      ]
    })
    .overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ ModuleTableAdminGestionPagesModalConfirmDeleteComponent ],
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTableAdminGestionPagesModalConfirmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a to do in comment', async () => {
    // tslint:disable-next-line:no-shadowed-variable
    const fixture = TestBed.createComponent(ModuleTableAdminGestionPagesModalConfirmDeleteComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show text id="etes-vous-sur" with TitremenuItem "nom"', () => {
    component.nom = 'Titre menu cafe';
    component.swAfficherListeQuiVaEtreMisHorsLigne = false;
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
    const etesVousSur = fixture.debugElement.query(By.css('#etes-vous-sur')).nativeElement;
    console.log(etesVousSur);
    expect(etesVousSur.textContent).toContain('Êtes-vous sur de vouloir effacer «Titre menu cafe» ?')
  });

});
