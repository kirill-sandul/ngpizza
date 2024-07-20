import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from '../../store/models/pizza.interface';
import { PizzaWidgetService } from './pizza-widget.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-pizza-widget',
  templateUrl: './pizza-widget.component.html',
  styleUrls: ['./pizza-widget.component.scss'],
  providers: [PizzaWidgetService]
})
export class PizzaWidgetComponent implements OnInit {
  @Input() item: Pizza;
  
  available_types: string[] = ['тонкое', 'традиционное'];

  constructor(public cart_service: CartService, public pizza_service: PizzaWidgetService) {}
  
  ngOnInit() {

  }
}
