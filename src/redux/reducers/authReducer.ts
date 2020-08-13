import { AuthState } from "../types/reducer.types";
import { AuthActions } from "../types/action.types";
import {
  SET_AUTH_TOKEN,
  LOG_OUT,
  SET_USER,
  REFRESH_AUTH,
} from "../actionTypes";

const initialState: AuthState = {
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  expiresIn: localStorage.getItem("expiresIn") || null,
  user: JSON.parse(localStorage.getItem("user")!) || null,
};

export default (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        expiresIn: action.payload.expiresIn,
      };
    case SET_USER:
      return { ...state, user: action.payload };
    case REFRESH_AUTH:
      return { ...state, accessToken: action.payload };
    case LOG_OUT:
      return { ...state, accessToken: null };
    default:
      return state;
  }
};
