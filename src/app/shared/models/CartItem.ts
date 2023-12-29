import { Fancy } from "./Fancy"

export class CartItem{
    static fancy: any;
    constructor(fancy:Fancy){
        this.fancy = fancy;
    }
    fancy:Fancy;
    quantity:number = 1;


    get price():number{
        return this.fancy.price * this.quantity;
    }


}