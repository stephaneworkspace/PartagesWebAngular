/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditionSectionComponent } from './edition-section.component';
import { AdminSidebarComponent } from '../../admin-sidebar/admin-sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { SectionService } from 'src/app/_services/section.service';
import { FormsModule } from '@angular/forms';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
library.add(fas, far, fab);

describe('EditionSectionComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditionSectionComponent,
        AdminSidebarComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        FontAwesomeModule
      ],
      providers: [
        AuthService,
        AlertifyService,
        SectionService
      ]
    })
    .compileComponents();
  }));

  it('should create', async () => {
    const fixture = TestBed.createComponent(EditionSectionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the other component', async () => {
    const fixture = TestBed.createComponent(EditionSectionComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-admin-sidebar')).not.toBe(null);
  });
});
