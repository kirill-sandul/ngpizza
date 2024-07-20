import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from '../../store/models/pizza.interface';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient){}

  load_pizzas(){
    return this.http.get<Pizza[]>('http://localhost:3000/pizzas');
  }
}