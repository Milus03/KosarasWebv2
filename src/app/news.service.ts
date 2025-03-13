import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiKey = '526536b2e28a400485ae865be13bb6f3'
  private apiUrl = "https://newsapi.org/v2/everything?q=nba&apiKey="

  constructor(private http:HttpClient) { }

  getNba(): Observable<any> {
    return this.http.get(`${this.apiUrl}${this.apiKey}`)
  }
}
