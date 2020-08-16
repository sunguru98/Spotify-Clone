import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { logOut } from "../redux/actions/authActions";
import { RootState } from "../redux/rootReducer";

import UserProfile from "./UserProfile";
import SearchBar from "./SearchBar";

import StyledTopBar from "../styles/components/StyledTopBar";
import { ReactComponent as ForwardArrowIcon } from "../assets/forwardArrow.svg";
import { ReactComponent as BackArrowIcon } from "../assets/backArrow.svg";

const TopBar: React.FC<{} & ReduxProps & RouteComponentProps> = ({
  user,
  logOut,
  history,
}) => {
  console.log(history);
  return (
    <StyledTopBar>
      <div className='history-buttons'>
        <button>
          <BackArrowIcon />
        </button>
        <button disabled>
          <ForwardArrowIcon />
        </button>
      </div>
      {history.location.pathname === "/search" && <SearchBar />}
      {user && <UserProfile user={user} logOut={logOut} />}
    </StyledTopBar>
  );
};

const mapStateToProps = ({ auth: { user } }: RootState) => ({ user });
const connector = connect(mapStateToProps, { logOut });
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(withRouter(TopBar));
