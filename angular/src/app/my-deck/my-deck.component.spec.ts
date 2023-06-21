import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDeckComponent } from './my-deck.component';

describe('MyDeckComponent', () => {
  let component: MyDeckComponent;
  let fixture: ComponentFixture<MyDeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyDeckComponent]
    });
    fixture = TestBed.createComponent(MyDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
