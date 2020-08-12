import { DataState } from "../types/reducer.types";
import { DataActions } from "../types/action.types";

const initialState: DataState = {
  playlists: [],
  currentSong: null,
  isPlaying: false,
};

export default (state = initialState, action: DataActions) => {
  switch (action.type) {
    default:
      return state;
  }
};
