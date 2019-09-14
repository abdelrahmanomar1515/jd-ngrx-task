import { createAction, props } from '@ngrx/store';


export const growCity = createAction(
    '[City Card] Grow City',
    props<{ cityName: string }>()
);

export const nukeCity = createAction(
    '[City Card] Nuke City',
    props<{ cityName: string }>()
);
