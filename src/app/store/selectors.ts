import { createSelector } from '@ngrx/store';

export const selectCitiesFeature = (state) => state.citiesFeature;

export const selectCities = createSelector(
    selectCitiesFeature,
    state => state.cities
);

