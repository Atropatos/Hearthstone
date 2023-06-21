import { Component, OnInit } from '@angular/core';
import { HearthstoneService } from './hearthstone.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Hearthstone";
  cards: any[] = [];
  type:string = "";
  constructor(private hearthstoneService: HearthstoneService,
    private router: Router) {}

  async ngOnInit() {

  }
    updateType(): void {
    console.log(this.type);
    this.hearthstoneService.updateType(this.type);
  }


  race:string='';
  updateRace(): void {
    this.hearthstoneService.updateRace(this.race);
  }





}
