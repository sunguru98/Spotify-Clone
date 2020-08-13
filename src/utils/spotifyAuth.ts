import { spotify } from "./spotify";

export const fetchMySpotifyData = async () => {
  try {
    const user = await spotify.getMe();
    return user;
  } catch (err) {
    console.error("Something went wrong", err.response);
    return null;
  }
};

export const fetchMyPlaylists = async () => {
  try {
    const playlists = await spotify.getUserPlaylists();
    return playlists;
  } catch (err) {
    console.log(err.response);
    return null;
  }
};

export default spotify;
