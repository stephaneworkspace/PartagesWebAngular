import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTableGestionPagesBtnDeleteComponent } from './delete.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
library.add(fas, far, fab);

describe('ModuleGestionPagesTableBtnDeleteComponent', () => {
  let component: ModuleTableGestionPagesBtnDeleteComponent;
  let fixture: ComponentFixture<ModuleTableGestionPagesBtnDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleTableGestionPagesBtnDeleteComponent ],
      imports: [
        FontAwesomeModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTableGestionPagesBtnDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
