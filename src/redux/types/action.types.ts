import { SET_ACCESS_TOKEN, LOG_OUT, SET_USER } from "../actionTypes";
import { RootState } from "../rootReducer";
import { ThunkAction } from "redux-thunk";

export type GenericThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppActions
>;

export interface SetAccessTokenAction {
  type: typeof SET_ACCESS_TOKEN;
  payload: string;
}

export interface LogoutAction {
  type: typeof LOG_OUT;
}

export interface SetUserAction {
  type: typeof SET_USER;
  payload: SpotifyApi.CurrentUsersProfileResponse | null;
}

export type AuthActions = SetAccessTokenAction | LogoutAction | SetUserAction;
export type AppActions = AuthActions;
