import { setSort } from './../../store/actions/filters.actions';
import { IStore } from './../../store/models/store.interface';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

interface SortItem {
  name: string,
  type: string,
  order: string
}

@Component({
  selector: 'app-sort-select',
  templateUrl: './sort-select.component.html',
  styleUrls: ['./sort-select.component.scss']
})
export class SortSelectComponent implements OnInit {
  sort_items: SortItem[] = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'alphabet', order: 'asc' }
  ]

  constructor(private store: Store<IStore>) {}

  ngOnInit(): void {
  }

  toggle_sort(sort: SortItem){
    this.store.dispatch(setSort({ type_: sort.type, order: sort.order }));
  }
}
