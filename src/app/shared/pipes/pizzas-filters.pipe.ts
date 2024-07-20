import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { available_categories } from './../available-categories';
import { IFilters } from './../../store/models/filters.interface';
import { Pipe, PipeTransform } from '@angular/core';
import { Pizza } from '../../store/models/pizza.interface';
import { IStore } from 'src/app/store/models/store.interface';

@Pipe({
  name: 'pizzasFilters',
  pure: false
})
export class PizzasFiltersPipe implements PipeTransform {
  filters$: Observable<IFilters>;
  filters: IFilters;

  categories: string[] = available_categories;

  constructor(private store: Store<IStore>){
    this.filters$ = store.select('filters');
  }

  category(pizzas: Pizza[]): Pizza[] {
    if(this.filters.category) return pizzas.filter(p => p.category === this.filters.category);

    return pizzas;
  }

  sort(pizzas: Pizza[]): Pizza[] {
    const sorted: Pizza[] = [...pizzas];
    const type = this.filters.sortBy.type_;
    
    if (type === 'popular') sorted.sort((f, s) => s.rating - f.rating);
    if (type === 'price') sorted.sort((f, s) => f.prices[0] - s.prices[0]);
    if (type === 'alphabet') sorted.sort((f, s) => {
      if (f.name < s.name) return -1;
      if (f.name > s.name) return 1;
      return 0;
    })
    
    return sorted;
  }

  transform(pizzas: Pizza[]) {
    let filtered: Pizza[] = pizzas;
    
    this.filters$.subscribe(f => {
      this.filters = f;
      
      // if(this.filters.category === 0) return;
      filtered = this.category(filtered);
      filtered = this.sort(filtered);
    });
        
    return filtered;
  }
}
