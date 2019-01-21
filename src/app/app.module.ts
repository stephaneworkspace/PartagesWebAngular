import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './informatique-web/categories/categories.component';
import { IndexComponent } from './informatique-web/index/index.component';
import { IndexComponent as IndexComponentRoot } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    IndexComponent,
    IndexComponentRoot
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
