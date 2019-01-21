import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './informatique-web/nav/nav.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: 'informatique-web',
    component: NavComponent
  },
  {
    path: '**',
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
