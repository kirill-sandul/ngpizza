import { createAction, props } from '@ngrx/store';

export const setSort = createAction('[Home Component] Set-Sort', props<{ type_: string, order: string }>());
export const setCategory = createAction('[Home Component] Set-Category', props<{ category: number  }>());