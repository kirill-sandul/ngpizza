import { createReducer, on } from '@ngrx/store';
import { setSort, setCategory } from './../actions/filters.actions';

interface FiltersReducerState {
  category: number,
  sortBy: {
    type_: string,
    order: string
  }
}

const initialState: FiltersReducerState = {
  category: 0,
  sortBy: {
    type_: '',
    order: 'desc'
  }
}

const _filtersReducer = createReducer(
  initialState,
  on(setSort, (state, props) => state = { ...state, sortBy: props }),
  on(setCategory, (state, { category }) => state = { ...state, category })
)

export function filtersReducer(state: any, action: any) {
  return _filtersReducer(state, action);
}
