import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  private url = "https://kosarasweb-default-rtdb.europe-west1.firebasedatabase.app/termekek/"

  getTermekek(kategoria: string): Observable<any> {
    return this.http.get(`${this.url}/${kategoria}.json`);
  }

  getTermek(kategoria: string, id: number): Observable<any> {
    return this.http.get(`${this.url}/${kategoria}/${id}.json`);
  }

  createTermek(kategoria: string, termek: any): Observable<any> {
    return this.http.post(`${this.url}/${kategoria}.json`, termek);
  }

  updateTermek(kategoria: string, id: number, termek: any): Observable<any> {
    return this.http.put(`${this.url}/${kategoria}/${id}.json`, termek);
  }

  deleteTermek(kategoria: string, id: number): Observable<any> {
    return this.http.delete(`${this.url}/${kategoria}/${id}.json`);
  }
}
