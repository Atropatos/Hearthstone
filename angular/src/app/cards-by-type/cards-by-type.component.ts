import { Component, OnInit } from '@angular/core';
import { HearthstoneService } from '../hearthstone.service';
import { CardService } from '../card.service';
import { Card } from '../card';

@Component({
  selector: 'app-cards-by-type',
  templateUrl: './cards-by-type.component.html',
  styleUrls: ['./cards-by-type.component.css']
})



export class CardsByTypeComponent implements OnInit {
  title = "Hearthstone";
  cards: any[] = [];
  maxItems:number=200;
  constructor(private hearthstoneService: HearthstoneService,
    private cardService: CardService){}
  type:string='';
  async ngOnInit() {

    this.type = this.hearthstoneService.getCardType();
    this.fetchItems();


}

  addCardToDeck(name: String): void {
    name = name.trim();
    if (!name) { return; }
   this.cardService.postCardByName({name} as Card).subscribe();
   console.log("card added");
  }


  async fetchItems() {

     const allCards = await this.hearthstoneService.getCardsByType(this.type);
     this.cards = allCards.filter((card: { img: any; }) => card.img).slice(0, 100);

  }

  //async fetchPokemons() {
//
 // }
}

