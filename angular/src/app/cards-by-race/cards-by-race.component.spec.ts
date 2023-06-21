import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsByRaceComponent } from './cards-by-race.component';

describe('CardsByRaceComponent', () => {
  let component: CardsByRaceComponent;
  let fixture: ComponentFixture<CardsByRaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsByRaceComponent]
    });
    fixture = TestBed.createComponent(CardsByRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
