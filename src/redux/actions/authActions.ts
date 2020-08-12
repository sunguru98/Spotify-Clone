import { SetAccessTokenAction, LogoutAction } from "../types/action.types";
import { SET_ACCESS_TOKEN, LOG_OUT } from "../actionTypes";

export const setAccessToken = (accessToken: string): SetAccessTokenAction => {
  return {
    type: SET_ACCESS_TOKEN,
    payload: accessToken,
  };
};

export const logOut = (): LogoutAction => {
  return {
    type: LOG_OUT,
  };
};
