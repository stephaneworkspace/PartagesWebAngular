import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './informatique-web/index/index.component';
import { IndexComponent as IndexComponentRoot } from './index/index.component';

const routes: Routes = [
  {
    path: 'informatique-web',
    component: IndexComponent
  },
  {
    path: '**',
    component: IndexComponentRoot
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
