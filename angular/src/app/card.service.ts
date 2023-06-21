import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from './card';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
  ) { }

  private cardURL = 'http://localhost:8080/api/cards';
  getCards(): Observable<Card[]> {

    return this.http.get<Card[]>(this.cardURL)

  }

  postCardByName(card: Card): Observable<Card>{
    return this.http.post<Card>(this.cardURL,card,this.httpOptions);

  }
  deleteCards(): Observable<any>  {
    return  this.http.delete(this.cardURL)
  }


}
