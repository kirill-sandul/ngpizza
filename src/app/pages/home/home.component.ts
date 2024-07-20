import { IPizzas } from './../../store/models/pizzas.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DataService } from '../../shared/services/data.service';
import { loadPizzas } from './../../store/actions/pizzas.actions';
import { IStore } from '../../store/models/store.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pizzas$: Observable<IPizzas>;
  
  constructor(
    private store: Store<IStore>
    ) {
    this.pizzas$ = store.select('pizzas');
  }

  ngOnInit() {
    this.store.dispatch(loadPizzas());
  }
}
