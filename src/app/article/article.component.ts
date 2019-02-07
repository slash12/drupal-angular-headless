import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title }  from '@angular/platform-browser';

import { ArticleService } from '../article.service';
import { Article } from '../article';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json',
    'X-CSRF-Token': 'HkPJyDxAYYs-HRC2MwVppHDUI39JW1LmXPWtSqOipC8',
    'Access-Control-Allow-Origin': '*'
  })
};

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit
 {
  private drupalprivate = 'http://drupal.local/example-node-rest/';

  articles: Article[] = [];
  constructor(private titleService: Title, private articleService: ArticleService, private router: Router, private http: HttpClient) 
  {
    this.setTitle('Articles');
  }

  ngOnInit() 
  {
    this.getArticles();
  }

  getArticles()
  {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }

  selectArticle(id) 
  {
    this.router.navigate(['/article/details', id]);
  }

  onClickSubmit(data)
  {
    var body = '{"type":[{ "target_id":"article" }], "title": [{ "value": "'+ data.title +'" }], "body":[{ "value": "'+ data.body +'"}], "nid":[{ "value": "" }] }';
    var body_json = JSON.parse(body.replace(/\\/g, ""));
    // console.log(body_json);
    this.http.post(this.drupalprivate+'?_format=json', body_json, httpOptions).subscribe((data) => console.log(data));
    window.location.reload();
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
