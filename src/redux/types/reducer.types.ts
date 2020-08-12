export interface AuthState {
  accessToken: string | null;
  user: SpotifyApi.CurrentUsersProfileResponse | null;
}
