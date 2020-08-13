import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { ConnectedProps, connect } from "react-redux";

import { RootState } from "../redux/rootReducer";
import { checkForTokenExpiry } from "../redux/actions/authActions";
import StyledPlayerContainer from "../styles/pages/StyledPlayerContainer";
import PlayerSidebar from "../components/PlayerSidebar";
import PlayerBody from "../components/PlayerBody";
import PlayerFooter from "../components/PlayerFooter";

type HomeProps = RouteComponentProps & ReduxProps;

const Home: React.FC<HomeProps> = ({ checkForTokenExpiry }) => {
  useEffect(() => {
    checkForTokenExpiry();
  }, [checkForTokenExpiry]);

  return (
    <StyledPlayerContainer>
      <section>
        <PlayerSidebar />
        <PlayerBody />
      </section>
      <PlayerFooter />
    </StyledPlayerContainer>
  );
};

const mapStateToProps = ({
  auth: { accessToken, refreshToken, expiresIn },
}: RootState) => ({
  accessToken: accessToken,
  expiresIn: expiresIn,
  refreshToken: refreshToken,
});

const connector = connect(mapStateToProps, { checkForTokenExpiry });
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Home);
