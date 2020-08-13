import {
  SET_AUTH_TOKEN,
  LOG_OUT,
  SET_USER,
  REFRESH_AUTH,
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

export type AuthActions = SetAuthTokenAction | RefreshAuthAction | LogoutAction | SetUserAction;
export type DataActions = { type: "" };
export type AppActions = AuthActions | DataActions;
