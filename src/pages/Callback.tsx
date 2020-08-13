import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { setAccessToken } from "../redux/actions/authActions";

import { extractAuthCode } from "../utils/spotify";

type CallbackProps = ReduxProps & RouteComponentProps;

const Callback: React.FC<CallbackProps> = ({
  location: { search },
  history,
  setAccessToken,
}) => {
  useEffect(() => {
    const { authCode, error } = extractAuthCode(search);
    if (error) {
      alert("Something went wrong! Please try again");
      history.push("/login");
    }

    if (authCode) {
      setAccessToken(authCode);
    }
  }, [search, setAccessToken, history]);
  return <div>Please wait while we redirect you!</div>;
};

const connector = connect(null, { setAccessToken });
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Callback);
