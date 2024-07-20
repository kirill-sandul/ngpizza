// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { ButtonComponent } from './partials/button/button.component';
import { PizzaWidgetComponent } from './partials/pizza-widget/pizza-widget.component';
// pages
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';

// reducers
import { pizzasReducer } from './store/reducers/pizzas.reducer';
import { cartReducer } from './store/reducers/cart.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortSelectComponent } from './partials/sort-select/sort-select.component';
import { CategoriesComponent } from './partials/categories/categories.component';
import { filtersReducer } from './store/reducers/filters.reducer';
import { PizzasFiltersPipe } from './shared/pipes/pizzas-filters.pipe';

// effects
import { PizzasEffects } from './store/effects/pizzas.effects';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    ButtonComponent,
    PizzaWidgetComponent,
    HomeComponent,
    SortSelectComponent,
    CategoriesComponent,
    PizzasFiltersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatSelectModule,
    MatChipsModule,
    StoreModule.forRoot({ pizzas: pizzasReducer, cart: cartReducer, filters: filtersReducer }, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([PizzasEffects]),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
