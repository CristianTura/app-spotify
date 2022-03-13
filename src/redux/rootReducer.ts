import { combineReducers } from "redux";
import { trackListReducer } from './HomeList/reducer';
import { seeTrackReducer } from './SeeTrack/reducer';

export const rootReducer = combineReducers({
    tracks: trackListReducer,
    detailTrack: seeTrackReducer,
});

