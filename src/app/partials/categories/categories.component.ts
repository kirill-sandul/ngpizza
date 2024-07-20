import { available_categories } from './../../shared/available-categories';
import { setCategory } from './../../store/actions/filters.actions';
import { IStore } from './../../store/models/store.interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatChip } from '@angular/material/chips';
import { IFilters } from '../../store/models/filters.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: string[] = available_categories;
  selected_string: string = available_categories[0];

  filters$: Observable<IFilters>;
  filters: IFilters;
  
  constructor(private store: Store<IStore>) {
    this.filters$ = store.select('filters');
  }
  
  ngOnInit(): void {
    this.filters$.subscribe(v => this.filters = v);
  }
  
  toggle_selection(chip: MatChip){
    chip.toggleSelected();
    this.selected_string = chip.value;
        
    this.store.dispatch(setCategory({ category: available_categories.indexOf(chip.value) }));
  }
}
