import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json',
    'X-CSRF-Token': 'HkPJyDxAYYs-HRC2MwVppHDUI39JW1LmXPWtSqOipC8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  private drupalprivate = 'http://drupal.local/example-node-rest/';

  public getArticle(id:string): Observable<any>
  {
    return this.http.get(this.drupalprivate + id + '?_format=json', httpOptions);
  }

  public getArticles(): Observable<any>
  {
    return this.http.get(this.drupalprivate+'article?_format=json', httpOptions);
  }

  public postArticle(body: string)
  {
    return this.http.post(this.drupalprivate+'?_format=json', body, httpOptions);
  }

  public deleteArticle(id: string)
  {
    return this.http.delete(this.drupalprivate + id, httpOptions);
  }

  public updateArticle(body: string, id:string)
  {
    this.http.patch(this.drupalprivate + id +'?_format=hal_json', body, httpOptions).subscribe((data)=>console.log(data));
  }
}
