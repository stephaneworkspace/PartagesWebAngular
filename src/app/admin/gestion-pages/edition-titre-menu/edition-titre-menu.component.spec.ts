import { async, TestBed } from '@angular/core/testing';

import { EditionTitreMenuComponent } from './edition-titre-menu.component';
import { AdminSidebarComponent } from '../../admin-sidebar/admin-sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ArticleService } from 'src/app/_services/article.service';

describe('EditionTitreMenuComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditionTitreMenuComponent,
        AdminSidebarComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        AuthService,
        AlertifyService,
        ArticleService
      ]
    })
    .compileComponents();
  }));

  it('should create', async () => {
    const fixture = TestBed.createComponent(EditionTitreMenuComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the other component', async () => {
    const fixture = TestBed.createComponent(EditionTitreMenuComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-admin-sidebar')).not.toBe(null);
  });

  it('should have a to do in comment', async () => {
    const fixture = TestBed.createComponent(EditionTitreMenuComponent);
    const app = fixture.debugElement.componentInstance;
    expect(!app).toBeTruthy(); // Sw Hors Ligne à faire
  });
});
