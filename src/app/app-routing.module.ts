import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './article/article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';

const routes: Routes = [
  {path: '', redirectTo: '/articles', pathMatch: 'full' },
  {path: 'articles', component: ArticleComponent},
  {path: 'article/details/:id', component: ArticleDetailsComponent},
  {path: 'article/update/:id', component: ArticleUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
