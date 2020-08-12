import { AuthState } from "../types/reducer.types";
import { AuthActions } from "../types/action.types";
import { SET_ACCESS_TOKEN, LOG_OUT, SET_USER } from "../actionTypes";

const initialState: AuthState = {
  accessToken: localStorage.getItem("accessToken") || null,
  user: JSON.parse(localStorage.getItem("user")!) || null,
};

export default (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return { ...state, accessToken: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    case LOG_OUT:
      localStorage.removeItem("accessToken");
      localStorage.removeItem("currentUser");
      return { ...state, accessToken: null };
    default:
      return state;
  }
};
