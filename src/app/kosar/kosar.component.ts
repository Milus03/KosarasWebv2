import { Component } from '@angular/core';
import { KosarService } from '../kosar.service';

@Component({
  selector: 'app-kosar',
  standalone: false,
  templateUrl: './kosar.component.html',
  styleUrl: './kosar.component.css'
})
export class KosarComponent {
  cartItems: any[] = [];

  constructor(private cartService: KosarService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.getCartItems().subscribe((data: any) => {
      this.cartItems = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
    });
  }

  removeFromCart(productId: string): void {
    this.cartService.removeCartItem(productId).subscribe(() => {
      this.loadCart();
    });
  }
}
