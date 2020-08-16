import React from "react";
import { Switch, Route } from "react-router-dom";

import StyledBody from "../styles/components/StyledBody";
import HomeContent from "../pages/HomeContent";
import SearchContent from "../pages/Search";
import PlaylistDetail from "../pages/PlaylistDetail";
import TopBar from "./TopBar";

const PlayerBody = () => {
  return (
    <StyledBody>
      <TopBar />
      <Switch>
        <Route exact path='/' component={HomeContent} />
        <Route exact path='/search' component={SearchContent} />
        <Route path='/playlist/:playlistId' exact component={PlaylistDetail} />
      </Switch>
    </StyledBody>
  );
};

export default PlayerBody;
