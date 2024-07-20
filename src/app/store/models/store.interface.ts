import { IFilters } from './filters.interface';
import { IPizzas } from './pizzas.interface';
import { ICart } from './cart.interface';

export interface IStore {
  pizzas: IPizzas,
  cart: ICart,
  filters: IFilters
}