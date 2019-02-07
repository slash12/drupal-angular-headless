import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ArticleService } from '../article.service';
import { Article } from '../article';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json',
    'X-CSRF-Token': 'S4EzpMY1nLJTt8oPhf9MTp2TuWcPV2ehAJF_SkbNZ1Y'
  })
};

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css']
})
export class ArticleUpdateComponent implements OnInit {

  article: Article;
  private drupalprivate = 'http://drupal.local/example-node-rest/';

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
    // console.log(body_json);
    this.http.patch(this.drupalprivate + data.hfarticleid +'?_format=hal_json', body_json, httpOptions).subscribe((data) => console.log(data));
    window.location.href = "http://localhost:4200/articles";
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
