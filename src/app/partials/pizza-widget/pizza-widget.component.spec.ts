import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaWidgetComponent } from './pizza-widget.component';

describe('PizzaWidgetComponent', () => {
  let component: PizzaWidgetComponent;
  let fixture: ComponentFixture<PizzaWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
