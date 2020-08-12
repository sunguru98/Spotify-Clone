import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import { AuthState } from "./types/reducer.types";

const rootReducer = combineReducers<{ auth: AuthState }>({ auth: authReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
