import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
