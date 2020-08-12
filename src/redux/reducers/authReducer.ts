import { AuthState } from "../types/reducer.types";
import { AuthActions } from "../types/action.types";
import { SET_ACCESS_TOKEN, LOG_OUT } from "../actionTypes";

const initialState: AuthState = {
  accessToken: localStorage.getItem("accessToken") || null,
};

export default (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      localStorage.setItem("accessToken", action.payload);
      return { ...state, accessToken: action.payload };
    case LOG_OUT:
      localStorage.removeItem("accessToken");
      return { ...state, accessToken: null };
    default:
      return state;
  }
};
