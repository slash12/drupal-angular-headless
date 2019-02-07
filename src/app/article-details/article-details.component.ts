import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpHeaders } from '@angular/common/http';
import { Title }  from '@angular/platform-browser';

import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  article: Article;

  constructor(private titleService: Title, private articleService: ArticleService, private activeRoute: ActivatedRoute, private route: Router){ }
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
    return this.articleService.deleteArticle(id).subscribe(data => this.goArticle());
  }
}
