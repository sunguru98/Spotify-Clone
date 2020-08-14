import {
  SetPlaylistsAction,
  GenericThunkAction,
  SetErrorAction,
} from "../types/action.types";
import { spotify } from "../../utils/spotify";
import { SET_USER_PLAYLIST, SET_ERROR } from "../actionTypes";

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
