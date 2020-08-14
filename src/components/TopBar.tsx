import React from "react";
import { connect, ConnectedProps } from "react-redux";
import StyledTopBar from "../styles/components/StyledTopBar";
import { RootState } from "../redux/rootReducer";
import UserProfile from "./UserProfile";
import { logOut } from "../redux/actions/authActions";

const TopBar: React.FC<{} & ReduxProps> = ({ user, logOut }) => {
  return (
    <StyledTopBar>
      <div></div>

      {user && <UserProfile user={user} logOut={logOut} />}
    </StyledTopBar>
  );
};

const mapStateToProps = ({ auth: { user } }: RootState) => ({ user });
const connector = connect(mapStateToProps, { logOut });
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(TopBar);
