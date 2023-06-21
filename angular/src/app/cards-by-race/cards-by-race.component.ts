import { Component, OnInit } from '@angular/core';
import { HearthstoneService } from '../hearthstone.service';
@Component({
  selector: 'app-cards-by-race',
  templateUrl: './cards-by-race.component.html',
  styleUrls: ['./cards-by-race.component.css']
})
export class CardsByRaceComponent implements OnInit{


  constructor(private hearthstoneService: HearthstoneService) {}
  cards: any[] = [];
  race:string='';

async ngOnInit() {
    this.race =  this.hearthstoneService.getCardRace();
    this.fetchData();
}


async fetchData(){
  const allCards = await this.hearthstoneService.getCardsByRace(this.race);
  this.cards = allCards.filter((card: { img: any; }) => card.img).slice(0, 100);
}

}
