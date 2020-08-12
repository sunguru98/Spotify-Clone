import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

export const fetchMySpotifyData = async (accessToken: string) => {
  try {
    spotify.setAccessToken(accessToken);
    const user = await spotify.getMe();
    return user;
  } catch (err) {
    console.error("Something went wrong", err.response);
    return null;
  }
};

export default spotify;
