import React from "react";
import { connect, ConnectedProps } from "react-redux";

import StyledLoginContainer from "../styles/pages/StyledLoginContainer";
import StyledButton from "../styles/components/StyledButton";
import { spotifyURL } from "../utils/spotify";
import spotifyLogo from "../assets/spotify-logo.png";
import { RootState } from "../redux/rootReducer";
import { RouteComponentProps, Redirect } from "react-router-dom";

interface LoginProps extends RouteComponentProps, ReduxProps {}

const Login: React.FC<LoginProps> = ({ accessToken }) => {
  console.log(accessToken);
  return !accessToken ? (
    <StyledLoginContainer>
      <header>
        <div>
          <img src={spotifyLogo} alt='' />
        </div>
      </header>
      <StyledButton>
        <a href={spotifyURL.href}>Log in with Spotify</a>
      </StyledButton>
    </StyledLoginContainer>
  ) : (
    <Redirect to='/' />
  );
};

const mapStateToProps = (state: RootState) => ({
  accessToken: state.auth.accessToken,
});

const connector = connect(mapStateToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Login);
