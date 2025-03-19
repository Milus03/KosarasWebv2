import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  hatterek: any[] = []
  nbaNews: any[] = []

  constructor(private base: BaseService, private news: NewsService) {
    this.getHatterek()
    this.getNews()
  }

  getHatterek() {
    this.base.getProducts().subscribe((data: any) => {
      this.hatterek = data.hatterek
    })
  }

  getNews() {
    this.news.getNba().subscribe((data) => {
      this.nbaNews = data.articles.slice(0, 5)
      console.log(this.nbaNews)
    })
  }
}
