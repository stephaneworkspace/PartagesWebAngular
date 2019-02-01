import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformatiqueWebMainComponent } from './informatique-web/informatique-web-main/informatique-web-main.component';
import { IndexComponent } from './index/index.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './_guards/auth.guard';
import { GestionPagesComponent } from './admin/gestion-pages/gestion-pages.component';
import { NouveauSectionComponent } from './admin/gestion-pages/nouveau-section/nouveau-section.component';
import { NouveauTitreMenuComponent } from './admin/gestion-pages/nouveau-titre-menu/nouveau-titre-menu.component';
import { NouveauSousTitreMenuComponent } from './admin/gestion-pages/nouveau-sous-titre-menu/nouveau-sous-titre-menu.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'admin',
    component: GestionPagesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/gestion-pages-nouvelle-section',
    component: NouveauSectionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/gestion-pages-nouveau-titre',
    component: NouveauTitreMenuComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/gestion-pages-nouveau-sous-titre',
    component: NouveauSousTitreMenuComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'informatique-web',
    component: InformatiqueWebMainComponent
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        {path: 'members', component: MembersComponent},
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
