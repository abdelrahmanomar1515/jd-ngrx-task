import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/state';
import { CitiesActions } from 'src/app/store';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent {

  @Input() city: City;
  @Input() canNuke: boolean;

  constructor(private store: Store<State>) { }

  onNuke() {
    this.store.dispatch(CitiesActions.nukeCity({ cityName: this.city.CityName }));
  }
  onGrow() {
    this.store.dispatch(CitiesActions.growCity({ cityName: this.city.CityName }));
  }

}
