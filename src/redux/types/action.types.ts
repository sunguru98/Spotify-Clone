import {
  SET_AUTH_TOKEN,
  SET_USER_PLAYLIST,
  LOG_OUT,
  SET_USER,
  REFRESH_AUTH,
  SET_ERROR,
} from "../actionTypes";

import { RootState } from "../rootReducer";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

export type GenericThunkAction<
  DispatchType extends Action,
  ReturnType = void
> = ThunkAction<ReturnType, RootState, unknown, DispatchType>;

export interface SetAuthTokenAction {
  type: typeof SET_AUTH_TOKEN;
  payload: {
    accessToken: string;
    refreshToken: string;
    expiresIn: string;
  };
}

export interface RefreshAuthAction {
  type: typeof REFRESH_AUTH;
  payload: string;
}

export interface LogoutAction {
  type: typeof LOG_OUT;
}

export interface SetUserAction {
  type: typeof SET_USER;
  payload: SpotifyApi.CurrentUsersProfileResponse | null;
}

export interface SetPlaylistsAction {
  type: typeof SET_USER_PLAYLIST;
  payload: SpotifyApi.ListOfUsersPlaylistsResponse;
}

export interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type AuthActions =
  | SetAuthTokenAction
  | RefreshAuthAction
  | LogoutAction
  | SetUserAction;
export type DataActions = SetPlaylistsAction | SetErrorAction;

export type AppActions = AuthActions | DataActions;
