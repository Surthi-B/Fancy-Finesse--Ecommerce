import { Component,OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartservice: CartService) {
    this.setCart()
  }
  ngOnInit(): void {
    
  }
 removeFromCart(cartItem: CartItem) {
    this.cartservice.removeFromCart(cartItem.fancy.id);
    this.setCart();
   }

   changeQuantity(cartItem: CartItem, quantityInString:string) {
    const quantity = parseInt(quantityInString);
    this.cartservice.changeQuantity(cartItem.fancy.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartservice.getCart();
  }
}

