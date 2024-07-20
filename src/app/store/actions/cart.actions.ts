import { createAction, props } from '@ngrx/store';
import { Pizza } from '../models/pizza.interface';

export const loadCart = createAction('[Cart Component] Load-cart');
export const addToCart = createAction('[Cart Component] Add-to-cart', props<{ new_item: Pizza }>());
export const removeCartItem = createAction('[Cart Component] Remove-cart-item', props<{ item: Pizza }>());
export const plusCartItem = createAction('[Cart Component] Plus-cart-item', props<{ index: number }>());
export const minusCartItem = createAction('[Cart Component] Minus-cart-item', props<{ index: number }>());
export const clearCart = createAction('[Cart Component] Clear-cart');