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
import { NouveauArticleComponent } from './admin/gestion-pages/nouveau-article/nouveau-article.component';
import { EditionArticleComponent } from './admin/gestion-pages/edition-article/edition-article.component';
import { GestionPagesArticleEditionResolver } from './_resolver/gestion-pages-article-edition.resolver';
import { GestionPagesArticlePreventUnsavedChangesGuard } from './_guards/gestion-pages-article-prevent-unsaved-changes.guard';
import { GestionPagesSectionEditionResolver } from './_resolver/gestion-pages-section-edition.resolver.ts';
import { GestionPagesSectionPreventUnsavedChangesGuard } from './_guards/gestion-pages-section-prevent-unsaved-change.guard';
import { EditionSectionComponent } from './admin/gestion-pages/edition-section/edition-section.component';
import { EditionTitreMenuComponent } from './admin/gestion-pages/edition-titre-menu/edition-titre-menu.component';
import { GestionPagesTitreMenuEditionResolver } from './_resolver/gestion-pages-titre-menu-edition.resolver';
import { GestionPagesTitreMenuPreventUnsavedChangesGuard } from './_guards/gestion-pages-titre-menu-prevent-unsaved-changes.guard';
import { EditionSousTitreMenuComponent } from './admin/gestion-pages/edition-sous-titre-menu/edition-sous-titre-menu.component';
import { GestionPagesSousTitreMenuEditionResolver } from './_resolver/gestion-pages-sous-titre-menu-edition.resolver';

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
    path: 'admin/gestion-pages-nouveau-article',
    component: NouveauArticleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/gestion-pages-edition-section/:id',
    component: EditionSectionComponent,
    canActivate: [AuthGuard],
    resolve: {user: GestionPagesSectionEditionResolver}, canDeactivate: [GestionPagesSectionPreventUnsavedChangesGuard],
  },
  {
    path: 'admin/gestion-pages-edition-titre/:id',
    component: EditionTitreMenuComponent,
    canActivate: [AuthGuard],
    resolve: {user: GestionPagesTitreMenuEditionResolver}, canDeactivate: [GestionPagesTitreMenuPreventUnsavedChangesGuard],
  },
  {
    path: 'admin/gestion-pages-edition-sous-titre/:id',
    component: EditionSousTitreMenuComponent,
    canActivate: [AuthGuard],
    resolve: {user: GestionPagesSousTitreMenuEditionResolver}, canDeactivate: [GestionPagesTitreMenuPreventUnsavedChangesGuard],
  },
  {
    path: 'admin/gestion-pages-edition-article/:id',
    component: EditionArticleComponent,
    canActivate: [AuthGuard],
    resolve: {user: GestionPagesArticleEditionResolver}, canDeactivate: [GestionPagesArticlePreventUnsavedChangesGuard],
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
