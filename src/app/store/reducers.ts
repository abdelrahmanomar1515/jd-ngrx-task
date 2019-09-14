import { Action, createReducer, on } from '@ngrx/store';
import { State, initialState, } from './state';
import { CitiesActions } from '.';


/**
 * I made the choice of making the CityName to be the unique identifier of each city.
 * In a real world scenario there would be an ID for that.
 */
const citiesReducer = createReducer(
    initialState,
    on(CitiesActions.growCity, (state, { cityName }) => {
        const newCities = [...state.cities];
        const newCityIndex = newCities.findIndex(city => city.CityName === cityName);
        const newCity = { ...newCities[newCityIndex] };
        const oldPopulation = newCities[newCityIndex].Population;
        newCity.Population = oldPopulation + 1e6;
        newCities[newCityIndex] = newCity;
        return {
            ...state,
            cities: [...newCities]
        };
    }),
    on(CitiesActions.nukeCity, (state, { cityName }) => {
        const newCities = [...state.cities];
        const newCityIndex = newCities.findIndex(city => city.CityName === cityName);
        const newCity = { ...newCities[newCityIndex] };
        const oldPopulation = newCities[newCityIndex].Population;
        newCity.Population = oldPopulation - 5e6;
        newCities[newCityIndex] = newCity;
        return {
            ...state,
            cities: [...newCities]
        };
    })
);

export function reducer(state: State, action: Action) {
    return citiesReducer(state, action);
}
