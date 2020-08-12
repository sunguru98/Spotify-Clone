import React, { useEffect } from "react";
import store from "../redux/store";
import { RouteComponentProps } from "react-router-dom";
import { setSpotifyUser } from "../redux/actions/authActions";
import { ConnectedProps, connect } from "react-redux";
import { RootState } from "../redux/rootReducer";

interface HomeProps extends RouteComponentProps, ReduxProps {}

const Home: React.FC<HomeProps> = ({ setSpotifyUser, accessToken, user }) => {
  useEffect(() => {
    console.log('Home page invoked')
    if (!user && accessToken) {
      setSpotifyUser(accessToken);
    }
  }, [setSpotifyUser, accessToken, user]);

  return <div>Home page</div>;
};

const mapStateToProps = (state: RootState) => ({
  user: state.auth.user,
  accessToken: state.auth.accessToken,
});

const connector = connect(mapStateToProps, { setSpotifyUser });
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Home);
