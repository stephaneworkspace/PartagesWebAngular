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
import { GestionPagesTitreMenuEditionResolver } from './_resolver/gestion-pages-titre-menu-edition.resolver';
import { GestionPagesSousTitreMenuEditionResolver } from './_resolver/gestion-pages-sous-titre-menu-edition.resolver';
import { GestionPagesSectionPreventUnsavedChangesGuard } from './_guards/gestion-pages-section-prevent-unsaved-change.guard';
import { GestionPagesArticlePreventUnsavedChangesGuard } from './_guards/gestion-pages-article-prevent-unsaved-changes.guard';
import { GestionPagesTitreMenuPreventUnsavedChangesGuard } from './_guards/gestion-pages-titre-menu-prevent-unsaved-changes.guard';
import { EditionTitreMenuComponent } from './admin/gestion-pages/edition-titre-menu/edition-titre-menu.component';
// tslint:disable-next-line:max-line-length
import { GestionPagesSousTitreMenuPreventUnsavedChangesGuard } from './_guards/gestion-pages-sous-titre-menu-prevent-unsaved-changes.guard.ts';
import { EditionSousTitreMenuComponent } from './admin/gestion-pages/edition-sous-titre-menu/edition-sous-titre-menu.component';
import { GestionPagesSectionSelectBoxResolver } from './_resolver/gestion-pages-section-select-box.resolver.ts';
import { TitreMenuService } from './_services/titre-menu.service';
import { SousTitreMenuService } from './_services/sous-titre-menu.service';
import { GestionPagesSectionTableResolver } from './_resolver/gestion-pages-section-table.resolver';
import { ModuleTableAdminGestionPagesComponent } from './_modules/table/admin/gestion-pages/table.component';
import { ModuleTableAdminGestionPagesCoreComponent } from './_modules/table/admin/gestion-pages/table-core.component';
import { ModuleTableAdminGestionPagesSpanNomComponent } from './_modules/table/admin/gestion-pages/span/nom.component';
import { ModuleTableAdminGestionPagesBtnEditComponent } from './_modules/table/admin/gestion-pages/btn/edit.component';
import { ModuleTableAdminGestionPagesBtnDeleteComponent } from './_modules/table/admin/gestion-pages/btn/delete.component';
import { ModuleTableAdminGestionPagesBtnUpComponent } from './_modules/table/admin/gestion-pages/btn/up.component';
import { ModuleTableAdminGestionPagesBtnDownComponent } from './_modules/table/admin/gestion-pages/btn/down.component';
import { GestionPagesIconesSelectBoxResolver } from './_resolver/gestion-pages-icones-select-box.resolver';
// tslint:disable-next-line:max-line-length
import { ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent } from './_modules/table/admin/gestion-pages/table-content-section-for-offline/table-content-section-for-offline.component';
// tslint:disable-next-line:max-line-length
import { ModuleTableAdminGestionPagesModalConfirmDeleteComponent } from './_modules/table/admin/gestion-pages/modal/confirm-delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
      ModuleTableAdminGestionPagesComponent,
      ModuleTableAdminGestionPagesCoreComponent,
      ModuleTableAdminGestionPagesTableContentSectionForOfflineComponent,
      ModuleTableAdminGestionPagesSpanNomComponent,
      ModuleTableAdminGestionPagesBtnEditComponent,
      ModuleTableAdminGestionPagesBtnDeleteComponent,
      ModuleTableAdminGestionPagesBtnUpComponent,
      ModuleTableAdminGestionPagesBtnDownComponent,
      ModuleTableAdminGestionPagesModalConfirmDeleteComponent,
      AdminSidebarComponent,
      NouveauSectionComponent,
      EditionSectionComponent,
      NouveauTitreMenuComponent,
      NouveauSousTitreMenuComponent,
      NouveauArticleComponent,
      EditionTitreMenuComponent,
      EditionSousTitreMenuComponent,
      EditionArticleComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FontAwesomeModule,
      NgbModule.forRoot(),
      FormsModule,
      BrowserAnimationsModule // pour les animations
   ],
   providers: [
      AuthService,
      AlertifyService,
      SectionService,
      TitreMenuService,
      SousTitreMenuService,
      ArticleService,
      GestionPagesIconesSelectBoxResolver,
      GestionPagesSectionTableResolver,
      GestionPagesSectionSelectBoxResolver,
      GestionPagesSectionEditionResolver,
      GestionPagesTitreMenuEditionResolver,
      GestionPagesSousTitreMenuEditionResolver,
      GestionPagesArticleEditionResolver,
      GestionPagesSectionPreventUnsavedChangesGuard,
      GestionPagesTitreMenuPreventUnsavedChangesGuard,
      GestionPagesSousTitreMenuPreventUnsavedChangesGuard,
      GestionPagesArticlePreventUnsavedChangesGuard,
   ],
   entryComponents: [
      ModuleTableAdminGestionPagesModalConfirmDeleteComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
