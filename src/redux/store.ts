import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware, ThunkDispatch } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { RootState } from "./rootReducer";
import { AppActions } from "./types/action.types";

const store = createStore<
  RootState,
  AppActions,
  { dispatch: ThunkDispatch<RootState, null, AppActions> },
  any
>(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<RootState, AppActions>)
  )
);

export default store;
