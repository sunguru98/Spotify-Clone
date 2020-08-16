import React, { useState, useEffect } from "react";
import moment from "moment";
import { connect, ConnectedProps } from "react-redux";
import StyledPlaylistDetail, {
  StyledSongListItem,
} from "../styles/pages/StyledPlaylistDetail";
import PlayListDetailInfo from "../components/PlayListDetailInfo";
import { ReactComponent as PlayIcon } from "../assets/play.svg";
import { ReactComponent as SongPlayIcon } from "../assets/song-play.svg";
import { Link, RouteComponentProps } from "react-router-dom";
import { RootState } from "../redux/rootReducer";
import { Loader } from "../hoc/withLoader";
import { fetchParticularPlaylist } from "../redux/actions/dataActions";
import StyledLoaderContainer from "../styles/components/StyledLoaderContainer";

type PlaylistDetailProps = RouteComponentProps<{
  playlistId: string;
}> &
  ReduxProps;

const PlaylistDetail: React.FC<PlaylistDetailProps> = ({
  match: {
    params: { playlistId },
  },
  currentPlaylist,
  fetchPlaylist,
}) => {
  //const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    setTimeout(() => fetchPlaylist(playlistId), 0);
  }, [fetchPlaylist, playlistId]);

  return currentPlaylist ? (
    <StyledPlaylistDetail>
      <PlayListDetailInfo
        playlist={{
          description: currentPlaylist.description,
          ownerId: currentPlaylist.owner.id,
          ownerName: currentPlaylist.owner.display_name,
          imageURL: currentPlaylist.images[1].url,
          likesCount: currentPlaylist.followers.total,
          name: currentPlaylist.name,
        }}
      />
      <div className='shadow-gradient'></div>
      <div className='playlist-controls'>
        <button className='playlist-controls-play'>
          <PlayIcon />
        </button>
        <button className='spoticon'></button>
      </div>
      <div className='playlist-songs'>
        {currentPlaylist.tracks.items.map(song => {
          const minutes = moment.duration(song.track.duration_ms).minutes();
          const seconds = moment.duration(song.track.duration_ms).seconds();
          return (
            <SongListItem
              key={song.track.id}
              songName={song.track.name}
              artists={(song.track as SpotifyApi.TrackObjectFull).artists}
              mediaName={(song.track as SpotifyApi.TrackObjectFull).album.name}
              songDuration={`${minutes}:${
                seconds >= 10 ? seconds : "0" + seconds
              }`}
              isPlaying={false}
            />
          );
        })}
      </div>
    </StyledPlaylistDetail>
  ) : (
    <StyledLoaderContainer>
      <Loader />
    </StyledLoaderContainer>
  );
};

interface SongListItemProps {
  songName: string;
  artists: SpotifyApi.ArtistObjectSimplified[];
  mediaName: string;
  songDuration: string;
  isPlaying: boolean;
}

const SongListItem: React.FC<SongListItemProps> = ({
  songName,
  artists,
  mediaName,
  songDuration,
  isPlaying,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <StyledSongListItem
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      isPlaying={isPlaying}
    >
      <div className='icon-container'>
        {isHovering ? (
          <div className='play'>
            <SongPlayIcon />
          </div>
        ) : (
          <div className='music'>
            <span className='spoticon' />
          </div>
        )}
      </div>
      <div className='song-detail-container'>
        <p>{songName}</p>
        <span className='artist-media'>
          <span className='all-artists'>
            {artists.map((a, index) => (
              <Link key={a.id} to={`/artist/${a.id}`}>
                {a.name}
                {index === artists.length - 1 ? null : ", "}
              </Link>
            ))}
          </span>
          •
          <Link
            className='media'
            to={`/album/${mediaName.split(" ").join("-").toLowerCase()}`}
          >
            {mediaName}
          </Link>
        </span>
      </div>
      <div className='additional-option-container'>
        <button className='spoticon' />
      </div>
      <div className='duration-container'>
        <span>{songDuration}</span>
      </div>
    </StyledSongListItem>
  );
};

const mapStateToProps = ({ data: { currentPlaylist } }: RootState) => ({
  currentPlaylist,
});

const connector = connect(mapStateToProps, {
  fetchPlaylist: fetchParticularPlaylist,
});
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(PlaylistDetail);
