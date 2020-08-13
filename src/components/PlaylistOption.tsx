import React, { useEffect } from "react";
import StyledPlaylistContainer from "../styles/components/StyledPlaylistContainer";
import { fetchMyPlaylists } from "../utils/spotifyAuth";

const PlaylistOption: React.FC = () => {
  useEffect(() => {
    setTimeout(() => fetchMyPlaylists().then(playlists => console.log(playlists)), 1)
  }, []);
  return (
    <StyledPlaylistContainer>
      <h2>Playlists</h2>
      <hr />
      <ul>
        <li>Tamil Top 50</li>
        <li>Varanam Aayiram</li>
        <li>Melodies Mattum</li>
      </ul>
    </StyledPlaylistContainer>
  );
};

export default PlaylistOption;
