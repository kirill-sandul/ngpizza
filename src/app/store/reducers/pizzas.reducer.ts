import { createReducer, on } from "@ngrx/store"
import { loadPizzas, setPizzas } from './../actions/pizzas.actions';
import { Pizza } from '../models/pizza.interface';

export const initialState: { items: Pizza[], loading: boolean } = {
  items: [],
  loading: false
}

const _pizzasReducer = createReducer(
  initialState,
  on(loadPizzas, (state) => state = { ...state, loading: true }),
  on(setPizzas, (state, { pizzas }) => {
    return state = {
      ...state,
      items: pizzas.map(p => p = {
        ...p, selected: { price: 0, size: 0, type: 0 }
      }),
      loading: false
    }
  })
);

export function pizzasReducer(state: any, action: any){
  return _pizzasReducer(state, action);
}