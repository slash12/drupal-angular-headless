import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) 
  { 
    
  }

  private drupalprivate = 'http://drupal.local/example-node-rest/';

  public getArticle(id:string): Observable<any>
  {
    return this.http.get(this.drupalprivate + id + '?_format=json', httpOptions);
  }

  public getArticles(): Observable<any>
  {
    return this.http.get(this.drupalprivate+'article?_format=json', httpOptions);
  }
}
