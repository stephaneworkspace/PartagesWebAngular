import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './informatique-web/categories/categories.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: 'informatique-web',
    component: CategoriesComponent
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
