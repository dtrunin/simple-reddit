export class Article {
  constructor(public title: string, public link: string, public votes: number = 0) {

  }

  voteUp() {
    this.votes++;
  }

  voteDown() {
    this.votes--;
  }
}
