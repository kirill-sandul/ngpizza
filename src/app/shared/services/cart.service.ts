import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from "src/app/store/models/store.interface";
import { ICart } from '../../store/models/cart.interface';
import { Pizza } from '../../store/models/pizza.interface';
import { addToCart } from "../../store/actions/cart.actions";
import { removeCartItem, plusCartItem, minusCartItem, clearCart } from '../../store/actions/cart.actions';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private store: Store<IStore>){}

  
  
}