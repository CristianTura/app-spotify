import { types } from './types';

interface ITrack{
    externalUrl: string,
    name: string,
    albumName: string,
    albumDate: string,
    albumImg: string,
    artistName: string,
    duration: number,
    previewUrl: string,
}

const initialState: ITrack = {
    externalUrl: "",
    name: "",
    albumName: "",
    albumDate: "",
    albumImg: "",
    artistName: "",
    duration: 0,
    previewUrl: "",
}



export const seeTrackReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.seeTrack:
            return {...state, ...action.payload};

        default:
            return state;
    }
}