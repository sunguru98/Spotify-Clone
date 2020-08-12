import {
  SetAccessTokenAction,
  LogoutAction,
  GenericThunkAction,
} from "../types/action.types";

import { SET_ACCESS_TOKEN, LOG_OUT } from "../actionTypes";
import { fetchMySpotifyData } from "../../utils/spotifyAuth";

export const setAccessToken = (accessToken: string): SetAccessTokenAction => {
  localStorage.setItem("accessToken", accessToken);
  return {
    type: SET_ACCESS_TOKEN,
    payload: accessToken,
  };
};

export const setSpotifyUser = (
  accessToken: string
): GenericThunkAction => async dispatch => {
  const user = await fetchMySpotifyData(accessToken);
  user && localStorage.setItem("user", JSON.stringify(user));
  dispatch({ type: "SET_USER", payload: user });
};

export const logOut = (): LogoutAction => {
  return {
    type: LOG_OUT,
  };
};
