export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  expiresIn: string | null
  user: SpotifyApi.CurrentUsersProfileResponse | null;
}

export interface DataState {
  playlists: any[];
  currentSong: null;
  isPlaying: boolean;
}
