import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Callback from "./pages/Callback";

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route
          path='/'
          exact
          render={() => (
            <h1>
              Hi there
            </h1>
          )}
        />
        <Route path="/login" exact component={Login} />
        <Route path="/callback" exact component={Callback} />
      </Switch>
    </div>
  );
};

export default App;
