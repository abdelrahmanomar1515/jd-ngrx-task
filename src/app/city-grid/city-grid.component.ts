import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../store/state';
import { CitiesSelectors } from '../store';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-city-grid',
  templateUrl: './city-grid.component.html',
  styleUrls: ['./city-grid.component.scss']
})
export class CityGridComponent implements OnInit {

  cities$: Observable<City[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.cities$ = this.store.pipe(select(CitiesSelectors.selectCities));
  }

}
