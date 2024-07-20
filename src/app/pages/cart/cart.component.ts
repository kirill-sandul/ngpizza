import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from 'src/app/store/models/store.interface';
import { Pizza } from 'src/app/store/models/pizza.interface';
import { addToCart, clearCart, minusCartItem, plusCartItem, removeCartItem } from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  pizzas$: Observable<Pizza[]> = this.store.select(state => state.cart.items);

  total_count$: Observable<number> = this.store.select(state => state.cart.total_count);
  total_price$: Observable<number> = this.store.select(state => state.cart.total_price);

  available_types: string[] = ['тонкое', 'традиционное'];

  constructor(private store: Store<IStore>) {}

  ngOnInit(): void {
  }

  add(item: Pizza) {
    this.store.dispatch(addToCart({ new_item: item }));
  }

  remove(item: Pizza) {
    this.store.dispatch(removeCartItem({ item }));
  }

  plus_item(index: number) {
    this.store.dispatch(plusCartItem({ index }));
  }

  minus_item(index: number) {
    this.store.dispatch(minusCartItem({ index }));
  }

  clear() {
    this.store.dispatch(clearCart());
  }
}
