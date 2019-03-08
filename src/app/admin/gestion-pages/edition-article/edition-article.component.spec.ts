import { async, TestBed } from '@angular/core/testing';

import { EditionArticleComponent } from './edition-article.component';
import { AdminSidebarComponent } from '../../admin-sidebar/admin-sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ArticleService } from 'src/app/_services/article.service';

describe('EditionArticleComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditionArticleComponent,
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
    const fixture = TestBed.createComponent(EditionArticleComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).not.toBeTruthy(); // [disabled]="!editForm.dirty"  dans tout gestion-pages
  });

  it('should have the other component', async () => {
    const fixture = TestBed.createComponent(EditionArticleComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-admin-sidebar')).not.toBe(null);
  });
});
