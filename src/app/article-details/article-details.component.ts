import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title }  from '@angular/platform-browser';

import { ArticleService } from '../article.service';
import { Article } from '../article';

const httpOptions = {
  headers: new HttpHeaders({
    'X-CSRF-Token': 'xcOkg2WAcA7yOZ71F9hMGe-4s8sKcygnZVKZ-wynAtc'
  })
};

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  article: Article;
  private drupalprivate = 'http://drupal.local/example-node-rest/';

  constructor(private titleService: Title, private http: HttpClient, private articleService: ArticleService, private activeRoute: ActivatedRoute, private route: Router){ }
  id = this.activeRoute.snapshot.paramMap.get("id");

  ngOnInit() 
  {
    this.getArticleSingle();
    this.setTitle('Article details');
  }

  public setTitle( newTitle: string) 
  {
    this.titleService.setTitle( newTitle );
  }

  getArticleSingle()
  {
    this.articleService.getArticle(this.id).subscribe(data => this.article =
      {
        id: data[0]['id'],
        title: data[0]['title'],
        body: data[0]['body']
      });
  }

  updateArticle(id) 
  {
    this.route.navigate(['/article/update', id]);
  }

  goArticle() 
  {
    this.route.navigate(['/articles']);
  }

  deleteArticle(id) 
  {
    return this.http.delete(this.drupalprivate + id, httpOptions).subscribe((data) => this.goArticle());
  }
}
