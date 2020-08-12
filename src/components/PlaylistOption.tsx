import React from "react";
import StyledPlaylistContainer from "../styles/components/StyledPlaylistContainer";

const PlaylistOption = () => {
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
