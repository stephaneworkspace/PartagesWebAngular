import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformatiqueWebMainComponent } from './informatique-web/informatique-web-main/informatique-web-main.component';
import { CategoriesComponent } from './informatique-web/categories/categories.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';

import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { MembersComponent } from './members/members.component';
import { GestionPagesComponent } from './admin/gestion-pages/gestion-pages.component';
import { NouveauSectionComponent } from './admin/gestion-pages/nouveau-section/nouveau-section.component';
import { NouveauTitreMenuComponent } from './admin/gestion-pages/nouveau-titre-menu/nouveau-titre-menu.component';
import { NouveauSousTitreMenuComponent } from './admin/gestion-pages/nouveau-sous-titre-menu/nouveau-sous-titre-menu.component';
import { NouveauArticleComponent } from './admin/gestion-pages/nouveau-article/nouveau-article.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { ArticleService } from './_services/article.service';
import { GestionPagesArticleEditionResolver } from './_resolver/gestion-pages-article-edition.resolver';
import { EditionArticleComponent } from './admin/gestion-pages/edition-article/edition-article.component';
import { EditionSectionComponent } from './admin/gestion-pages/edition-section/edition-section.component';
import { SectionService } from './_services/section.service';
import { GestionPagesSectionEditionResolver } from './_resolver/gestion-pages-section-edition.resolver.ts';
import { GestionPagesTitreEditionResolver } from './_resolver/gestion-pages-titre-edition.resolver';
import { GestionPagesSousTitreEditionResolver } from './_resolver/gestion-pages-sous-titre-edition.resolver';
import { GestionPagesSectionPreventUnsavedChangesGuard } from './_guards/gestion-pages-section-prevent-unsaved-change.guard';
import { GestionPagesArticlePreventUnsavedChangesGuard } from './_guards/gestion-pages-article-prevent-unsaved-changes.guard';
import { GestionPagesTitrePreventUnsavedChangesGuard } from './_guards/gestion-pages-titre-prevent-unsaved-changes.guard';
import { EditionTitreComponent } from './admin/gestion-pages/edition-titre/edition-titre.component';

library.add(fas, far, fab);

@NgModule({
   declarations: [
      AppComponent,
      InformatiqueWebMainComponent,
      CategoriesComponent,
      NavComponent,
      IndexComponent,
      RegisterComponent,
      MembersComponent,
      GestionPagesComponent,
      AdminSidebarComponent,
      NouveauSectionComponent,
      NouveauTitreMenuComponent,
      NouveauSousTitreMenuComponent,
      NouveauArticleComponent,
      EditionSectionComponent,
      EditionTitreComponent,
      EditionArticleComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FontAwesomeModule,
      NgbModule,
      FormsModule
   ],
   providers: [
      AuthService,
      AlertifyService,
      SectionService,
      ArticleService,
      GestionPagesSectionEditionResolver,
      GestionPagesTitreEditionResolver,
      GestionPagesSousTitreEditionResolver,
      GestionPagesArticleEditionResolver,
      GestionPagesSectionPreventUnsavedChangesGuard,
      GestionPagesTitrePreventUnsavedChangesGuard,
      GestionPagesArticlePreventUnsavedChangesGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
