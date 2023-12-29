import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FancyService } from '../services/fancy/fancy.service';
import { Fancy } from '../shared/models/Fancy';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-fancy-page',
  templateUrl: './fancy-page.component.html',
  styleUrls: ['./fancy-page.component.css']
})
export class FancyPageComponent implements OnInit {

  fancy!: Fancy;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fancyService: FancyService,
    private cartService: CartService,
    private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.fancy = fancyService.getFancyById(params.id);
      }
    });
  }

  ngOnInit(): void {
    
  }

  addToCart() {
    this.cartService.addToCart(this.fancy);
    this.router.navigateByUrl('cart-page');
  }
}


  

