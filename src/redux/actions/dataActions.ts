import {
  SetPlaylistsAction,
  GenericThunkAction,
  SetErrorAction,
  SetCurrentPlaylistAction,
} from "../types/action.types";
import { spotify } from "../../utils/spotify";
import {
  SET_USER_PLAYLIST,
  SET_ERROR,
  SET_CURRENT_PLAYLIST,
} from "../actionTypes";

export const fetchPlaylists = (): GenericThunkAction<
  SetPlaylistsAction | SetErrorAction
> => async dispatch => {
  try {
    const playlists = await spotify.getUserPlaylists();
    dispatch({ type: SET_USER_PLAYLIST, payload: playlists });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err.message });
  }
};

export const fetchParticularPlaylist = (
  playlistId: string,
  offset: number = 0
): GenericThunkAction<
  SetCurrentPlaylistAction | SetErrorAction
> => async dispatch => {
  try {
    const playlist = await spotify.getPlaylist(playlistId, {
      limit: 150,
      offset,
    });
    dispatch({ type: SET_CURRENT_PLAYLIST, payload: playlist });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err.message });
  }
};
