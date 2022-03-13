import { types } from './types';

interface IList{
    tracks: object,
    search: boolean
}

const initialState: IList = {
    tracks: {},
    search: false
}


export const trackListReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.listTracks:
            return {...state, tracks: {...action.payload}, search: true};

        default:
            return state;
    }
}