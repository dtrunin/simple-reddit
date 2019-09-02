import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {

  votes: number;
  title: string;
  link: string;

  constructor() {
    this.votes = 3;
    this.title = 'title';
    this.link = 'link';
  }

  ngOnInit() {
  }

}
