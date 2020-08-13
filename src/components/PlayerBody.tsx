import React from "react";
import StyledBody from "../styles/components/StyledBody";
import { Switch, Route } from "react-router-dom";
import HomeContent from "../styles/components/HomeContent";
import SearchContent from "../styles/components/SearchContent";
import LibraryContent from "../styles/components/LibraryContent";

const PlayerBody = () => {
  return (
    <StyledBody>
      <Switch>
        <Route exact path='/' component={HomeContent} />
        <Route exact path='/search' component={SearchContent} />
        <Route exact path='/library' component={LibraryContent} />
      </Switch>
    </StyledBody>
  );
};

export default PlayerBody;
