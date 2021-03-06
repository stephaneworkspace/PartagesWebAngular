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
import { GestionPagesSectionSelectBoxResolver } from './_resolver/gestion-pages-section-select-box.resolver.ts';
import { GestionPagesSectionTableResolver } from './_resolver/gestion-pages-section-table.resolver';
import { GestionPagesIconesSelectBoxResolver } from './_resolver/gestion-pages-icones-select-box.resolver';
import { GestionPagesTitreMenuSelectBoxResolver } from './_resolver/gestion-pages-titre-menu-select-box.resolver';
import { GestionPagesSousTitreMenuSelectBoxResolver } from './_resolver/gestion-pages-sous-titre-menu-select-box.resolver';
import { ForumIndexComponent } from './forum/index.component';
import { ForumCategoriesTableResolver } from './_resolver/forum-categories-table.resolver';
import { ForumPostesDivResolver } from './_resolver/forum-postes-div.resolver';
import { ForumPosteComponent } from './forum/poste.component';
import { ForumSujetComponent } from './forum/sujet.component';
import { ForumSujetTableResolver } from './_resolver/forum-sujets-table.resolver';
import { ForumReponseDernierPosteComponent } from './forum/reponse/reponse-dernier-poste.component';
import { ForumSujetDivResolver } from './_resolver/forum-sujet-div.resolver';
import { ForumReponseCitationComponent } from './forum/reponse/reponse-citation.component';
import { ForumPosteDivResolver } from './_resolver/forum-poste-div.resolver';
import { ForumNouveauSujetComponent } from './forum/nouveau-sujet/nouveau-sujet.component';
import { ForumCategorieDivResolver } from './_resolver/forum-categorie-div.resolver';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'admin',
    component: GestionPagesComponent,
    canActivate: [AuthGuard],
    resolve: {
      section: GestionPagesSectionTableResolver
    },
  },
  {
    path: 'admin/gestion-pages-nouvelle-section',
    component: NouveauSectionComponent,
    resolve: {
      selectBox: GestionPagesIconesSelectBoxResolver
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/gestion-pages-edition-section/:id',
    component: EditionSectionComponent,
    canActivate: [AuthGuard],
    resolve: {
      item: GestionPagesSectionEditionResolver,
      selectBox: GestionPagesIconesSelectBoxResolver
    },
    canDeactivate: [GestionPagesSectionPreventUnsavedChangesGuard],
  },
  // can desactive a faire
  {
    path: 'admin/gestion-pages-nouveau-titre-menu',
    component: NouveauTitreMenuComponent,
    canActivate: [AuthGuard],
    resolve: {
      sectionSelectBox: GestionPagesSectionSelectBoxResolver
    },
  },
  {
    path: 'admin/gestion-pages-edition-titre-menu/:id',
    component: EditionTitreMenuComponent,
    canActivate: [AuthGuard],
    resolve: {
      titreMenu: GestionPagesTitreMenuEditionResolver,
      section: GestionPagesSectionSelectBoxResolver,
    }, canDeactivate: [GestionPagesTitreMenuPreventUnsavedChangesGuard],
  },
  {
    path: 'admin/gestion-pages-nouveau-sous-titre-menu',
    component: NouveauSousTitreMenuComponent,
    canActivate: [AuthGuard],
    resolve: {
      titreMenuSelectBox: GestionPagesTitreMenuSelectBoxResolver
    },
  },
  {
    path: 'admin/gestion-pages-edition-sous-titre-menu/:id',
    component: EditionSousTitreMenuComponent,
    canActivate: [AuthGuard],
    resolve: {
      sousTitreMenu: GestionPagesSousTitreMenuEditionResolver,
      titreMenuSelectBox: GestionPagesTitreMenuSelectBoxResolver
    }, canDeactivate: [GestionPagesTitreMenuPreventUnsavedChangesGuard],
  },
  {
    path: 'admin/gestion-pages-nouveau-article',
    component: NouveauArticleComponent,
    canActivate: [AuthGuard],
    resolve: {
      sousTitreMenuSelectBox: GestionPagesSousTitreMenuSelectBoxResolver
    },
  },
  {
    path: 'admin/gestion-pages-edition-article/:id',
    component: EditionArticleComponent,
    canActivate: [AuthGuard],
    resolve: {
      article: GestionPagesArticleEditionResolver,
      sousTitreMenuSelectBox: GestionPagesSousTitreMenuSelectBoxResolver
    }, canDeactivate: [GestionPagesArticlePreventUnsavedChangesGuard],
  },
  {
    path: 'forum',
    component: ForumIndexComponent,
    // canActivate: [AuthGuard],
    resolve: {
      items: ForumCategoriesTableResolver
    },
  },
  {
    path: 'forum/poste/:id',
    component: ForumPosteComponent,
    // canActivate: [AuthGuard],
    resolve: {
      items: ForumPostesDivResolver
    },
  },
  {
    path: 'forum/sujet/:id',
    component: ForumSujetComponent,
    // canActivate: [AuthGuard],
    resolve: {
      items: ForumSujetTableResolver
    },
  },
  // En cas de dernier poste sans citation
  {
    path: 'forum/poste/reponse/dernier-poste/:forumSujetId',
    component: ForumReponseDernierPosteComponent,
    resolve: {
      forumSujet: ForumSujetDivResolver
    }
  },
  // Reponse a un poste precis cité
  {
    path: 'forum/poste/reponse/:forumPosteId',
    component: ForumReponseCitationComponent,
    resolve: {
      forumPoste: ForumPosteDivResolver
    }
  },
  // Nouveau sujet
  {
    path: 'forum/sujet/nouveau/:forumCategorieId',
    component: ForumNouveauSujetComponent,
    resolve: {
      forumCategorie: ForumCategorieDivResolver
    }
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
