import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HearthstoneService {
  private apiUrl = 'https://omgvamp-hearthstone-v1.p.rapidapi.com';
  private headers = {
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    'x-rapidapi-key': '92b09c0831msh55a92c4554b4147p1dd11djsn7aea5199a933'
  };


  //handling searching by Type
  async getCardsByType(type: string) {
    const response = await axios.get(`${this.apiUrl}/cards/types/${type}`, { headers: this.headers });
    return response.data;
  }
   private type: string = '';
  updateType(type: string): void {
    this.type = type;
  }

   getCardType(): string {
    return this.type;
  }

  //handlig searching by Race
  private race: string='';
  async getCardsByRace(race: string) {
    const response = await axios.get(`${this.apiUrl}/cards/races/${race}`, { headers: this.headers });
    return response.data;
  }
  updateRace(race:string): void {
    this.race =race;
  }

  getCardRace(): string {
    return this.race;
  }
  }

