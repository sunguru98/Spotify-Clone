import React, { useEffect } from "react";
import { RouteComponentProps, Switch, Route } from "react-router-dom";
import { ConnectedProps, connect } from "react-redux";

import { RootState } from "../redux/rootReducer";
import { setSpotifyUser } from "../redux/actions/authActions";
import StyledPlayerContainer from "../styles/pages/StyledPlayerContainer";
import PlayerSidebar from "../components/PlayerSidebar";
import PlayerBody from "../components/PlayerBody";
import PlayerFooter from "../components/PlayerFooter";
import HomeContent from "../styles/components/HomeContent";
import SearchContent from "../styles/components/SearchContent";
import LibraryContent from "../styles/components/LibraryContent";

type HomeProps = RouteComponentProps & ReduxProps;

const Home: React.FC<HomeProps> = ({ setSpotifyUser, accessToken, user }) => {
  useEffect(() => {
    console.log("Home page invoked");
    if (!user && accessToken) {
      setSpotifyUser(accessToken);
    }
  }, [setSpotifyUser, accessToken, user]);

  return (
    <StyledPlayerContainer>
      <section>
        <PlayerSidebar />
        <Switch>
          <Route exact path='/' component={HomeContent} />
          <Route exact path='/search' component={SearchContent} />
          <Route exact path='/library' component={LibraryContent} />
        </Switch>
      </section>
      <PlayerFooter />
    </StyledPlayerContainer>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.auth.user,
  accessToken: state.auth.accessToken,
});

const connector = connect(mapStateToProps, { setSpotifyUser });
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Home);
