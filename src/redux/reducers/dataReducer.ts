import { DataState } from "../types/reducer.types";
import { DataActions } from "../types/action.types";
import { SET_USER_PLAYLIST } from "../actionTypes";

const initialState: DataState = {
  playlists: null,
  currentSong: null,
  isPlaying: false,
  error: null,
};

export default (state = initialState, action: DataActions) => {
  switch (action.type) {
    case SET_USER_PLAYLIST:
      return { ...state, playlists: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
