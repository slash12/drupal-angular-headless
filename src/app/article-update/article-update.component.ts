import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css']
})
export class ArticleUpdateComponent implements OnInit {

  article: Article;

  constructor(private router: Router, private articleService: ArticleService, private route: ActivatedRoute, private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get("id");

  ngOnInit() 
  {
    this.getArticleSingle();
  }

  onSub(data)
  {
    var body = '{"type":[{ "target_id":"article" }], "title": [{ "value": "'+ data.title +'" }], "body":[{ "value": "'+ data.body +'"}] }';
    var body_json = JSON.parse(body.replace(/\\/g, ""));
    this.articleService.updateArticle(body_json, data.hfarticleid);
    window.location.href = window.location.hostname;
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
}
