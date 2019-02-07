import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleComponent } from './article/article.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailsComponent,
    ArticleComponent,
    ArticleUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
