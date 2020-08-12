import { SET_ACCESS_TOKEN, LOG_OUT } from "../actionTypes";

export interface SetAccessTokenAction {
  type: typeof SET_ACCESS_TOKEN;
  payload: string;
}

export interface LogoutAction {
  type: typeof LOG_OUT
}

export type AuthActions = SetAccessTokenAction | LogoutAction;
export type AppActions = AuthActions;
