import React from "react";
import { Switch, Route } from "react-router-dom";

import StyledBody from "../styles/components/StyledBody";
import HomeContent from "./HomeContent";
import SearchContent from "./SearchContent";
import LibraryContent from "./LibraryContent";
import TopBar from "./TopBar";

const PlayerBody = () => {
  return (
    <StyledBody>
      <TopBar />
      <Switch>
        <Route exact path='/' component={HomeContent} />
        <Route exact path='/search' component={SearchContent} />
        <Route exact path='/library' component={LibraryContent} />
      </Switch>
    </StyledBody>
  );
};

export default PlayerBody;
