import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Callback from "./pages/Callback";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/callback' exact component={Callback} />
      </Switch>
    </div>
  );
};

export default App;
