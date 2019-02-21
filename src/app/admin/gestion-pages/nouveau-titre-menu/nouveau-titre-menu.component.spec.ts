/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NouveauTitreMenuComponent } from './nouveau-titre-menu.component';
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

describe('NouveauTitreMenuComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NouveauTitreMenuComponent,
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
    const fixture = TestBed.createComponent(NouveauTitreMenuComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a to do in comment', async () => {
    const fixture = TestBed.createComponent(NouveauTitreMenuComponent);
    const app = fixture.debugElement.componentInstance;
    expect(!app).toBeTruthy(); // Sw Hors Ligne à faire
  });
});
