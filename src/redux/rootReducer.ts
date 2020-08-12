import { combineReducers } from "redux";

const rootReducer = combineReducers({ some: () => [] });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
