import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KosarService {

  private cartUrl = "https://kosarasweb-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

  constructor(private http: HttpClient) {}

  addToCart(product: any): Observable<any> {
    return this.http.post(this.cartUrl, product);
  }

  getCartItems(): Observable<any> {
    return this.http.get(this.cartUrl);
  }

  removeCartItem(productId: string): Observable<any> {
    return this.http.delete(`https://kosarasweb-default-rtdb.europe-west1.firebasedatabase.app/cart/${productId}.json`);
  }
}
