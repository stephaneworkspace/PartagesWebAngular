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
import { ModuleTableAdminGestionPagesModalTableContentSectionForOfflineComponent } from './_modules/table/admin/gestion-pages/modal/table-content-section-for-offline/table-content-section-for-offline.component';
// tslint:disable-next-line:max-line-length
import { ModuleTableAdminGestionPagesModalConfirmDeleteComponent } from './_modules/table/admin/gestion-pages/modal/confirm-delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionPagesTitreMenuSelectBoxResolver } from './_resolver/gestion-pages-titre-menu-select-box.resolver';
import { GestionPagesSousTitreMenuSelectBoxResolver } from './_resolver/gestion-pages-sous-titre-menu-select-box.resolver';
// tslint:disable-next-line: max-line-length
import { ModuleTableAdminGestionPagesModalTableContentTitreMenuForOfflineComponent } from './_modules/table/admin/gestion-pages/modal/table-content-titre-menu-for-offline/table-content-titre-menu-for-offline.component';
// tslint:disable-next-line: max-line-length
import { ModuleTableAdminGestionPagesModalTableContentSousTitreMenuForOfflineComponent } from './_modules/table/admin/gestion-pages/modal/table-content-sous-titre-menu-for-offline/table-content-sous-titre-menu-for-offline.component';
import { ModuleTableForumCategoriesComponent } from './_modules/table/forum/categories/categories.component';
import { ModuleTableForumCategoriesSpanNomComponent } from './_modules/table/forum/categories/span/nom.component';
import { ForumIndexComponent } from './forum/index.component';
import { ForumCategoriesTableResolver } from './_resolver/forum-categories-table.resolver';
import { ForumPosteComponent } from './forum/poste.component';
import { ModuleTableForumPostesComponent } from './_modules/table/forum/postes/postes.component';
import { ForumPosteDivResolver } from './_resolver/forum-postes-div.resolver';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModuleTablePostesBtnQuoteComponent } from './_modules/table/forum/postes/btn/quote.component';
import { ModuleTablePostesBtnReplyComponent } from './_modules/table/forum/postes/btn/reply.component';
import { ModuleTablePostesBtnPrivateMessageComponent } from './_modules/table/forum/postes/btn/private-message.component';
import { ModuleTableForumSujetsComponent } from './_modules/table/forum/sujets/sujets.component';
import { ModuleTableForumSujetsSpanNomComponent } from './_modules/table/forum/sujets/span/nom.component';
import { ForumCategorieService } from './_services/forum/forum-categorie.service';
import { ForumSujetService } from './_services/forum/forum-sujet.service';
import { ForumPosteService } from './_services/forum/forum-poste.service';
import { ForumSujetTableResolver } from './_resolver/forum-sujets-table.resolver';
import { ForumSujetComponent } from './forum/sujet.component';

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
      ForumIndexComponent,
      ForumPosteComponent,
      ForumSujetComponent,
      ModuleTableAdminGestionPagesComponent,
      ModuleTableAdminGestionPagesCoreComponent,
      ModuleTableAdminGestionPagesModalTableContentSectionForOfflineComponent,
      ModuleTableAdminGestionPagesModalTableContentTitreMenuForOfflineComponent,
      ModuleTableAdminGestionPagesModalTableContentSousTitreMenuForOfflineComponent,
      ModuleTableAdminGestionPagesSpanNomComponent,
      ModuleTableAdminGestionPagesBtnEditComponent,
      ModuleTableAdminGestionPagesBtnDeleteComponent,
      ModuleTableAdminGestionPagesBtnUpComponent,
      ModuleTableAdminGestionPagesBtnDownComponent,
      ModuleTableAdminGestionPagesModalConfirmDeleteComponent,
      ModuleTableForumCategoriesSpanNomComponent,
      ModuleTableForumCategoriesComponent,
      ModuleTableForumPostesComponent,
      ModuleTablePostesBtnQuoteComponent,
      ModuleTablePostesBtnReplyComponent,
      ModuleTablePostesBtnPrivateMessageComponent,
      ModuleTableForumSujetsComponent,
      ModuleTableForumSujetsSpanNomComponent,
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
      NgbModule, // .forRoot(),
      PaginationModule.forRoot(),
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
      ForumCategorieService,
      ForumSujetService,
      ForumPosteService,
      GestionPagesIconesSelectBoxResolver,
      GestionPagesSectionTableResolver,
      GestionPagesSectionSelectBoxResolver,
      GestionPagesTitreMenuSelectBoxResolver,
      GestionPagesSousTitreMenuSelectBoxResolver,
      GestionPagesSectionEditionResolver,
      GestionPagesTitreMenuEditionResolver,
      GestionPagesSousTitreMenuEditionResolver,
      GestionPagesArticleEditionResolver,
      GestionPagesSectionPreventUnsavedChangesGuard,
      GestionPagesTitreMenuPreventUnsavedChangesGuard,
      GestionPagesSousTitreMenuPreventUnsavedChangesGuard,
      GestionPagesArticlePreventUnsavedChangesGuard,
      ForumCategoriesTableResolver,
      ForumPosteDivResolver,
      ForumSujetTableResolver,
   ],
   entryComponents: [
      ModuleTableAdminGestionPagesModalConfirmDeleteComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
