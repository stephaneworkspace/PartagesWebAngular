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
      NouveauSectionComponent,
      NouveauTitreMenuComponent,
      NouveauSousTitreMenuComponent,
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
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
