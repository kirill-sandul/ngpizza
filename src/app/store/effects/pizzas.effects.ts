import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { DataService } from 'src/app/shared/services/data.service';

@Injectable()
export class PizzasEffects {

  load_pizzas$ = createEffect(() => this.actions$.pipe(
    ofType('[Pizza Widget Component] Load-pizzas'),
    exhaustMap(() => this.data_service.load_pizzas()
      .pipe(
        map(pizzas => ({ type: '[Pizza Widget Component] Set-pizzas', pizzas })),
        catchError(() => EMPTY)
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private data_service: DataService
  ) { }
}