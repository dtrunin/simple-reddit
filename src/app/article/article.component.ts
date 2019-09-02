import {Component, Input, OnInit} from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article;

  constructor() {
  }

  ngOnInit() {
  }

  voteUp() {
    this.article.voteUp();
    // don't propagate the event
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }
}
