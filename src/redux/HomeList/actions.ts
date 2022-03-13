import { types } from "./types";

export const getListTracks = (track: string) => {
  return async (dispatch: any) => {
    const clientId = "c4c6c2b272334d65b1b8e4439b9588d0";
    const clientSecret = "1d0af046d54d4d7489731d89ed8a5ce9";

    const responseToken = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
      }
    );
    const json = await responseToken.json();
    const token = json.access_token;

    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${track}&type=track`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    // console.log(data.tracks, "data");

    dispatch({
      type: types.listTracks,
      payload: {...data.tracks},
    });
  };
};
