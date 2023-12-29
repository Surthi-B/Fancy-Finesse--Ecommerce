import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Fancy } from '../../shared/models/Fancy';
import { CartItem } from '../../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart =  new Cart();

  addToCart(fancy: Fancy): void {
    let cartItem = this.cart.items.find(item => item.fancy.id === fancy.id);
    if (cartItem) {
      this.changeQuantity(fancy.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(fancy));
  }
   removeFromCart(fancyId:number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.fancy.id !== fancyId);
   }

   changeQuantity(fancyId: number, quantity: number){
    let cartItem = this.cart.items.find(item => item.fancy.id === fancyId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
   }

   getCart():Cart{
    return this.cart;
   }
}
