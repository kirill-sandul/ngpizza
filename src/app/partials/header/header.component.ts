import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '../../store/models/store.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { loadCart } from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total_count$: Observable<number> = this.store.select(state => state.cart.total_count);
  total_price$: Observable<number> = this.store.select(state => state.cart.total_price);

  constructor(private store: Store<IStore>, public cart_service: CartService) {}

  ngOnInit() {
    this.store.dispatch(loadCart());
  }
}
