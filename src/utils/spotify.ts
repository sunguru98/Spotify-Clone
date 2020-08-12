const spotifyScopes = [
  "ugc-image-upload",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming",
  "app-remote-control",
  "user-read-email",
  "user-top-read",
  "user-read-playback-position",
  "user-read-recently-played",
  "user-follow-read",
  "user-follow-modify",
].join("%20");

export const extractAccessToken = (data: string): string | undefined => {
  const extractedData = data
    .replace("#", "")
    .split("&")
    .reduce((acc: { [key: string]: string }, el: string) => {
      const [key, value] = el.split("=");
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});
  console.log(extractedData);
  if ("access_token" in extractedData) return extractedData.access_token;
  return undefined;
};

export const spotifyURL = new URL("https://accounts.spotify.com/authorize");
spotifyURL.searchParams.append(
  "client_id",
  process.env.REACT_APP_SPOTIFY_CLIENT_ID!
);
spotifyURL.searchParams.append(
  "redirect_uri",
  window.location.origin + "/callback"
);
spotifyURL.searchParams.append("scope", spotifyScopes);
spotifyURL.searchParams.append("response_type", "token");
