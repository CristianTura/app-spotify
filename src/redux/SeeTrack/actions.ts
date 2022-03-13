import { types } from "./types";

export const seeTrack = (track: object) => {
  return (dispatch: any) => {
    
    dispatch({
      type: types.seeTrack,
      payload: {...track},
    });
  };
};
