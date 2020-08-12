import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import { AuthState, DataState } from "./types/reducer.types";
import dataReducer from "./reducers/dataReducer";

const rootReducer = combineReducers<{ auth: AuthState; data: DataState }>({
  auth: authReducer,
  data: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
