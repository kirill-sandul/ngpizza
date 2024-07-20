import { createAction, props } from '@ngrx/store';
import { Pizza } from '../models/pizza.interface';

export const loadPizzas = createAction('[Pizza Widget Component] Load-pizzas');
export const setPizzas = createAction('[Pizza Widget Component] Set-pizzas', props<{ pizzas: Pizza[] }>());
