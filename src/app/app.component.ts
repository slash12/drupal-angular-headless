import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Article Editor';

  constructor(private titleService: Title, private route: Router)
  {
    this.setTitle('Home');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
