import {
  SetAuthTokenAction,
  LogoutAction,
  GenericThunkAction,
  SetUserAction,
  RefreshAuthAction,
  AppActions,
} from "../types/action.types";

import { SET_AUTH_TOKEN, LOG_OUT, REFRESH_AUTH } from "../actionTypes";
import { fetchMySpotifyData } from "../../utils/spotifyAuth";

import Axios from "axios";
import moment from "moment";
import history from "../../history";
import { init } from "../../utils/spotify";

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
): GenericThunkAction<RefreshAuthAction> => async dispatch => {
  const {
    data: { access_token },
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

  init(access_token);
  localStorage.setItem("accessToken", access_token);
  dispatch({ type: REFRESH_AUTH, payload: access_token });
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
      console.log("Access granted");
      init(accessToken);
      dispatch(setSpotifyUser());
    } else {
      console.log("Refreshing");
      dispatch(refreshAuthToken(refreshToken));
    }
  }
};

export const setSpotifyUser = (): GenericThunkAction<
  SetUserAction
> => async dispatch => {
  const user = await fetchMySpotifyData();
  user && localStorage.setItem("user", JSON.stringify(user));
  dispatch({ type: "SET_USER", payload: user });
};

export const logOut = (): LogoutAction => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("currentUser");
  return {
    type: LOG_OUT,
  };
};
