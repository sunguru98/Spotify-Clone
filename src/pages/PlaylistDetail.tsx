import React, { useState } from "react";
import StyledPlaylistDetail, {
  StyledSongListItem,
} from "../styles/pages/StyledPlaylistDetail";
import PlayListDetailInfo from "../components/PlayListDetailInfo";
import { ReactComponent as PlayIcon } from "../assets/play.svg";
import { ReactComponent as SongPlayIcon } from "../assets/song-play.svg";
import { Link } from "react-router-dom";

const PlaylistDetail = () => {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <StyledPlaylistDetail>
      <PlayListDetailInfo />
      <div className='shadow-gradient'></div>
      <div className='playlist-controls'>
        <button className='playlist-controls-play'>
          <PlayIcon />
        </button>
        <button className='spoticon'></button>
      </div>
      <div className='playlist-songs'>
        <SongListItem
          songName='Bhula Dena'
          artistName='Mustafa Zahid'
          mediaName='Aashiqui 2'
          songDuration='4:00'
          isPlaying={true}
        />
        <SongListItem
          songName='Bhula Dena'
          artistName='Mustafa Zahid'
          mediaName='Aashiqui 2'
          songDuration='4:00'
          isPlaying={false}
        />
      </div>
    </StyledPlaylistDetail>
  );
};

interface SongListItemProps {
  songName: string;
  artistName: string;
  mediaName: string;
  songDuration: string;
  isPlaying: boolean;
}

const SongListItem: React.FC<SongListItemProps> = ({
  songName,
  artistName,
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
          <Link to={`/artist/${artistName.split(" ").join("-").toLowerCase()}`}>
            {artistName}
          </Link>
          •
          <Link to={`/album/${mediaName.split(" ").join("-").toLowerCase()}`}>
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

export default PlaylistDetail;
