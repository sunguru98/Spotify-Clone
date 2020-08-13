import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Callback from "./pages/Callback";
import Home from "./pages/Home";
import store from "./redux/store";
import { init } from "./utils/spotify";

const App = () => {
  useEffect(() => {
    const token = store.getState().auth.accessToken;
    if (token) init(token);
  }, []);
  return (
    <div className='App'>
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/callback' exact component={Callback} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
};

export default App;
