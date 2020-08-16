export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  expiresIn: string | null;
  user: SpotifyApi.CurrentUsersProfileResponse | null;
}

export interface DataState {
  playlists: SpotifyApi.ListOfUsersPlaylistsResponse | null;
  currentSong: null;
  isPlaying: boolean;
  error: string | null;
  currentPlaylist: SpotifyApi.SinglePlaylistResponse | null;
}
