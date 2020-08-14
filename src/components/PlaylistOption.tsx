import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import StyledPlaylistContainer from "../styles/components/StyledPlaylistContainer";
import { fetchPlaylists } from "../redux/actions/dataActions";
import { RootState } from "../redux/rootReducer";
import { Link } from "react-router-dom";

type PlaylistOptionProps = {} & ReduxProps;

const PlaylistOption: React.FC<PlaylistOptionProps> = ({
  fetchPlaylists,
  playlists,
  accessToken,
}) => {
  useEffect(() => {
    accessToken && setTimeout(fetchPlaylists, 0);
  }, [fetchPlaylists, accessToken]);

  return (
    <StyledPlaylistContainer>
      <h2>Playlists</h2>
      <hr />
      <ul>
        {accessToken ? (
          !playlists ? (
            <li style={{ cursor: "not-allowed", pointerEvents: "none" }}>
              Fetching playlists
            </li>
          ) : (
            playlists.items.map(playlist => (
              <li key={playlist.id}>{playlist.name}</li>
            ))
          )
        ) : (
          <li>
            <Link to='/login'>Login</Link> to view playlists
          </li>
        )}
      </ul>
    </StyledPlaylistContainer>
  );
};

const mapStateToProps = ({
  data: { playlists },
  auth: { accessToken },
}: RootState) => ({ playlists, accessToken });
const connector = connect(mapStateToProps, { fetchPlaylists });
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(PlaylistOption);
