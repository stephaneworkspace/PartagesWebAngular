import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTableAdminGestionPagesBtnDeleteComponent } from './delete.component';
// tslint:disable-next-line:max-line-length
import { ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent } from '../table-content-section-for-offline/table-content-section-for-offline.component';

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModuleTableAdminGestionPagesBtnDeleteComponent,
        ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent,
        ModuleTableAdminGestionPagesSpanNomComponent
       ],
      imports: [
        FontAwesomeModule
      ],
    })
    .compileComponents();
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
    expect(fixture.nativeElement.querySelector('button').getAttribute('title')).toEqual('Effacer «Cafe de la section»');
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
    expect(fixture.nativeElement.querySelector('button').getAttribute('title')).toEqual('Effacer «Titre menu cafe»');
  });
/*
  it('should', fakeAsync( () => {
    fixture.detectChanges();
    spyOn(componentInstance, 'method name'); //method attached to the click.
    let btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', null);
    tick(); // simulates the passage of time until all pending asynchronous activities finish
    fixture.detectChanges();
    expect(componentInstance.methodName).toHaveBeenCalled();
}));*/
});
