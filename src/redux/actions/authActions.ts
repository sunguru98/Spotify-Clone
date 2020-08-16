import {
  SetAuthTokenAction,
  LogoutAction,
  GenericThunkAction,
  SetUserAction,
  AppActions,
} from "../types/action.types";

import { SET_AUTH_TOKEN, LOG_OUT } from "../actionTypes";

import Axios from "axios";
import moment from "moment";
import history from "../../history";
import { init, spotify } from "../../utils/spotify";

interface BaseTokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: string;
}

type AccessTokenResponse = BaseTokenResponse & { refresh_token: string };

const BASE_URL = "https://accounts.spotify.com";

const {
  REACT_APP_SPOTIFY_CLIENT_ID: clientId,
  REACT_APP_SPOTIFY_CLIENT_SECRET: clientSecret,
} = process.env;

const getAuthHeader = () =>
  `Basic ${window.btoa(`${clientId}:${clientSecret}`)}`;

export const setAccessToken = (
  authCode: string
): GenericThunkAction<SetAuthTokenAction> => async dispatch => {
  try {
    const {
      data: { access_token, refresh_token, expires_in },
    } = await Axios.post<AccessTokenResponse>(
      `${BASE_URL}/api/token`,
      `grant_type=authorization_code&code=${authCode}&redirect_uri=${
        window.location.origin + "/callback"
      }`,
      {
        headers: {
          Authorization: getAuthHeader(),
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      }
    );

    const expiresInDate = new Date(
      new Date().getTime() + parseInt(expires_in) * 1000
    ).toString();

    localStorage.setItem("accessToken", access_token);
    localStorage.setItem("refreshToken", refresh_token);
    localStorage.setItem("expiresIn", expiresInDate);

    // Spotify object init
    init(access_token);

    dispatch({
      type: SET_AUTH_TOKEN,
      payload: {
        accessToken: access_token,
        refreshToken: refresh_token,
        expiresIn: expiresInDate,
      },
    });

    history.push("/");
  } catch (err) {
    console.error(err.response.data);
    alert("Something went wrong! Please try again");
    history.push("/login");
  }
};

export const refreshAuthToken = (
  refreshToken: string
): GenericThunkAction<SetAuthTokenAction> => async dispatch => {
  const {
    data: { access_token, expires_in },
  } = await Axios.post<BaseTokenResponse>(
    `${BASE_URL}/api/token`,
    `grant_type=refresh_token&refresh_token=${refreshToken}`,
    {
      headers: {
        Authorization: getAuthHeader(),
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    }
  );

  const expiresInDate = new Date(
    new Date().getTime() + parseInt(expires_in) * 1000
  ).toString();
  init(access_token);
  localStorage.setItem("accessToken", access_token);
  localStorage.setItem("expiresIn", expiresInDate);
  dispatch({
    type: SET_AUTH_TOKEN,
    payload: {
      accessToken: access_token,
      refreshToken,
      expiresIn: expiresInDate,
    },
  });
};

export const checkForTokenExpiry = (): GenericThunkAction<AppActions> => (
  dispatch,
  getState
) => {
  const {
    auth: { accessToken, refreshToken, expiresIn },
  } = getState();

  if (accessToken && expiresIn && refreshToken) {
    const timeDifferenceInMinutes = moment(new Date(expiresIn)).diff(
      moment(),
      "minutes"
    );
    if (timeDifferenceInMinutes > 10) {
      init(accessToken);
      dispatch(setSpotifyUser());
    } else {
      dispatch(refreshAuthToken(refreshToken));
    }
  }
};

export const setSpotifyUser = (): GenericThunkAction<
  SetUserAction
> => async dispatch => {
  try {
    const user = await spotify.getMe();
    user && localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: "SET_USER", payload: user });
  } catch (err) {
    alert("Something went wrong. Please refresh your screen.");
    dispatch({ type: "SET_USER", payload: null });
  }
};

export const logOut = (): LogoutAction => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
  localStorage.removeItem("expiresIn");
  return {
    type: LOG_OUT,
  };
};
