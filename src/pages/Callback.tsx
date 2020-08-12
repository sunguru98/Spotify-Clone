import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { setAccessToken } from "../redux/actions/authActions";

import { extractAccessToken } from "../utils/spotify";

interface CallbackProps extends ReduxProps, RouteComponentProps {}

const Callback: React.FC<CallbackProps> = ({
  location: { hash },
  history,
  setAccessToken,
}) => {
  useEffect(() => {
    const accessToken = extractAccessToken(hash);
    if (accessToken) setAccessToken(accessToken);
    history.push("/");
  }, [hash, setAccessToken, history]);
  return null;
};

const connector = connect(null, { setAccessToken });
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Callback);
