import { createReducer, on } from '@ngrx/store';
import { addToCart, removeCartItem, plusCartItem, minusCartItem, clearCart, loadCart } from './../actions/cart.actions';
import { Pizza } from '../models/pizza.interface';

interface CartReducerState {
  items: Pizza[],
  total_price: number,
  total_count: number
}

const initialState: CartReducerState = {
  items: [],
  total_price: 0,
  total_count: 0
}

const get_total_price = (items: Pizza[]) => {
  return items.reduce((acc: number, current: Pizza) => acc + current.selected.price * current.selected.count!, 0);
}

const get_total_count = (items: Pizza[]) => {
  return items.reduce((acc: number, current: Pizza) => acc + current.selected.count!, 0);
}

export const _cartReducer = createReducer(
  initialState,
  on(loadCart, (state) => {
    const saved_items = JSON.parse(localStorage.getItem('saved_cart') || '[]');
    
    if(saved_items){
      return {
        items: saved_items,
        total_price: get_total_price(saved_items),
        total_count: get_total_count(saved_items)
      };
    }

    return {
      ...state,
      items: []
    }
  }),
  on(addToCart, (state, { new_item }) => {
    new_item.selected.count = 1;
    
    let same_item: boolean = false;

    const finded_item: Pizza[] = state.items.filter(it => it.id === new_item.id && 
      it.selected!.type === new_item.selected!.type &&
      it.selected!.size === new_item.selected!.size);
    
    state.items.forEach((it: Pizza) => {
      const if_same_id = new_item.id === it.id;
      const if_same_type = new_item.selected!.type === it.selected!.type;
      const if_same_size = new_item.selected?.size === it.selected!.size;

      if (if_same_id && if_same_type && if_same_size) same_item = true;
    });

    if(same_item){
      const last_item_index: number = state.items.indexOf(finded_item[0]);
      const copied_items = [...state.items];
      
      copied_items[last_item_index].selected.count!++; // last item + 1 same item

      localStorage.setItem('saved_cart', JSON.stringify(copied_items));

      return {
        items: copied_items,
        total_price: get_total_price(copied_items),
        total_count: get_total_count(copied_items)
      }
    }
    
    const new_items = [
      ...state.items,
      new_item
    ]

    localStorage.setItem('saved_cart', JSON.stringify(new_items));

    return {
      items: new_items,
      total_price: get_total_price(new_items),
      total_count: get_total_count(new_items)
    };
  }),
  on(removeCartItem, (state, { item }) => {
    let removed_items = [...state.items];
    const remove_item_index = removed_items.indexOf(item);
    
    if(remove_item_index > -1) removed_items.splice(remove_item_index, 1);
    
    localStorage.setItem('saved_cart', JSON.stringify(removed_items));

    return {
      ...state,
      items: removed_items,
      total_price: get_total_price(removed_items),
      total_count: get_total_count(removed_items)
    };
  }),
  on(plusCartItem, (state, { index }) => {
    state.items[index].selected.count!++;    

    localStorage.setItem('saved_cart', JSON.stringify(state.items));

    return {
      ...state,
      items: state.items,
      total_price: get_total_price(state.items),
      total_count: get_total_count(state.items)
    };
  }),
  on(minusCartItem, (state, { index }) => {
    if (state.items[index].selected.count === 1) { // delete pizza from cart if count will be zero on this click
      let removed_items = [...state.items];

      if (index > -1) removed_items.splice(index, 1);

      localStorage.setItem('saved_cart', JSON.stringify(removed_items));

      return {
        ...state,
        items: removed_items,
        total_price: get_total_price(removed_items),
        total_count: get_total_count(removed_items)
      };
    }

    state.items[index].selected.count!--;

    localStorage.setItem('saved_cart', JSON.stringify(state.items));

    return {
      ...state,
      items: state.items,
      total_price: get_total_price(state.items),
      total_count: get_total_count(state.items)
    };
  }),
  on(clearCart, (state) => {
    localStorage.setItem('saved_cart', JSON.stringify([]));

    return {
      ...state,
      items: [],
      total_count: 0,
      total_price: 0
    }
  })
);
  
export function cartReducer(state: any, action: any){
  return _cartReducer(state, action);
}
