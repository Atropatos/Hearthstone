import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsByTypeComponent } from './cards-by-type.component';

describe('CardsByTypeComponent', () => {
  let component: CardsByTypeComponent;
  let fixture: ComponentFixture<CardsByTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsByTypeComponent]
    });
    fixture = TestBed.createComponent(CardsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
