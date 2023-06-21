import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsByTypeComponent } from './cards-by-type/cards-by-type.component';
import { CardsByRaceComponent } from './cards-by-race/cards-by-race.component';
import { MyDeckComponent } from './my-deck/my-deck.component';

const routes: Routes = [
  { path: 'cardsByTypes', component: CardsByTypeComponent},
    {path: 'cardsByRace', component: CardsByRaceComponent },
    {path: 'myDeck', component:MyDeckComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
