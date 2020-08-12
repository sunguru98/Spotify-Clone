export interface AuthState {
  accessToken: string | null;
  user: SpotifyApi.CurrentUsersProfileResponse | null;
}

export interface DataState {
  playlists: any[];
  currentSong: null;
  isPlaying: boolean;
}
