import { Pizza } from './pizza.interface';

export interface ICart {
  items: Pizza[],
  total_price: number,
  total_count: number
}