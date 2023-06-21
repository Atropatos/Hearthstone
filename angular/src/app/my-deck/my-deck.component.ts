import { Component, OnInit } from '@angular/core';
import {Card} from '../card';
import { CardService } from '../card.service';
@Component({
  selector: 'app-my-deck',
  templateUrl: './my-deck.component.html',
  styleUrls: ['./my-deck.component.css']
})
export class MyDeckComponent implements OnInit {

cards: Card[] = [];

  constructor(private cardService: CardService) {}
  ngOnInit(): void {
    this.getCards();
  }


    getCards(): void {
      this.cardService.getCards()
        .subscribe(cards => this.cards= cards );
    }
    //.subscribe(cards => this.cards = cards.slice(1, 5));

    removeCards(): void {
      // console.log("removedCards");
      // this.cardService.deleteCards();
      // console.log("removedCards");

      this.cardService.deleteCards().subscribe({
        next: (response) => {
          console.log('All cards removed', response);
          this.cards = [];
        },
        error: (error) => {
          console.error('Error removing cards', error);
        }
      });


    }





}
