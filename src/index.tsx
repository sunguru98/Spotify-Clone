import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import App from "./App";
import GlobalStyles from "./styles/globalStyles";
import store from "./redux/store";
import history from "./history";

import "./styles/circular.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
