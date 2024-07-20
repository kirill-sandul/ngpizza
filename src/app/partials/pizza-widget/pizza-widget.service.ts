import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPizzaSelected, Pizza } from '../../store/models/pizza.interface';
import { addToCart } from 'src/app/store/actions/cart.actions';

@Injectable()
export class PizzaWidgetService {
  selected: IPizzaSelected = {
    type: 0,
    size: 25,
    price: 0
  }

  constructor(private store: Store){}
  
  select_size(size: number, item: Pizza) {
    this.selected.size = size;
    this.selected.price = item.prices[this.selected.size];
  }

  select_type(type: number) {
    this.selected.type = type;
  }
  add_to_cart(orig_item: Pizza) {
    this.store.dispatch(
      addToCart({
        new_item: {
          ...orig_item,
          selected: { ...this.selected, price: this.selected.price || orig_item.prices['25'] }
        }
      })
    );
  }
}