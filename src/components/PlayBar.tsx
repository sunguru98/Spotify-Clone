import React, { useState, useCallback, MouseEventHandler } from "react";
import StyledPlayBar from "../styles/components/StyledPlaybar";
import { Link } from "react-router-dom";
import StyledSpoticon from "../styles/components/StyledSpoticon";
import ProgressBar from "./ProgressBar";
import VolumeBar from "./VolumeBar";

const PlayBar = () => {
  const [isLiked, setisLiked] = useState(false);
  const handleClick = useCallback(boolVal => setisLiked(boolVal), []);
  return (
    <StyledPlayBar isLiked={isLiked}>
      <LeftPlayBar onClick={handleClick} isLiked={isLiked} />
      <CenterPlayBar />
      <RightPlayBar />
    </StyledPlayBar>
  );
};

interface LeftPlayerProps {
  onClick: (boolVal: boolean) => void;
  isLiked: boolean;
}

const LeftPlayBar: React.FC<LeftPlayerProps> = React.memo(
  ({ onClick, isLiked }) => {
    return (
      <div className='left'>
        <div className='cover-art'>
          <img
            src='https://i.scdn.co/image/ab67616d00004851e0dddbcfbbb48fea2516f2c8'
            alt='current-music'
          />
        </div>
        <div className='music-info'>
          <Link to='/music/un-kadhal-irundhal-podhum' className='music-name'>
            Un Kadhal Irundhal Podhum
          </Link>
          <span className='music-composers'>
            <Link to='/composers/leon'>Leon James</Link>,{" "}
            <Link to='/composers/leon'>Armaan Malik</Link>,{" "}
            <Link to='/composers/leon'>Shashaa Tirupati</Link>
          </span>
        </div>
        <div className='music-like'>
          <StyledSpoticon
            title='Add to favorites'
            className='spoticon'
            icon=''
            activeIcon=''
            activeColor='var(--primary-spotify-color)'
            isActive={isLiked}
            onClick={() => onClick(!isLiked)}
          />
        </div>
      </div>
    );
  }
);

const RightPlayBar = React.memo(() => {
  return (
    <div className='right'>
      <StyledSpoticon title='queue' className='spoticon' icon='' />
      <StyledSpoticon
        title='Connect to a device'
        className='spoticon'
        icon=''
      />
      <VolumeBar />
    </div>
  );
});

const CenterPlayBar = React.memo(() => {
  const [isShuffled, setIsShuffled] = useState<boolean>(false);
  const [isRepeating, setIsRepeating] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isBuffering, setIsBuffering] = useState<boolean>(false);
  const [songDuration, setSongDuration] = useState<number>(0);

  const handlePlayPause: MouseEventHandler = () => {
    let timeout: number | null = null;
    if (!isPlaying) {
      setIsBuffering(true);
      timeout = setTimeout(() => {
        setIsBuffering(false);
        setIsPlaying(true);
        clearTimeout(timeout!);
      }, 2000);
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <div className='center'>
      <div className='player-buttons'>
        <StyledSpoticon
          className='spoticon'
          title='Shuffle Songs'
          icon=''
          activeIcon=''
          isActive={isShuffled}
          onClick={() => setIsShuffled(!isShuffled)}
          activeColor='var(--primary-spotify-color)'
        />

        <StyledSpoticon
          title='Previous song'
          className='spoticon'
          icon=''
          disabled
          onClick={() => console.log("Previous song")}
        />

        <StyledSpoticon
          title='Play/Pause'
          className={`spoticon play ${isBuffering ? "buffering" : ""}`}
          icon={!isPlaying ? "" : ""}
          onClick={handlePlayPause}
        />

        <StyledSpoticon
          title='Next song'
          className='spoticon'
          icon=''
          onClick={() => console.log("Next song")}
        />

        <StyledSpoticon
          className='spoticon'
          title={`${isRepeating ? "Disable" : "Enable"} repeat`}
          icon=''
          activeIcon=''
          isActive={isRepeating}
          onClick={() => setIsRepeating(!isRepeating)}
          activeColor='var(--primary-spotify-color)'
        />
      </div>
      <div className='player-playbar'>
        <span className="current-position">0:00</span>
        <ProgressBar level={songDuration} setLevel={setSongDuration} />
        <span className="end-position">3:56</span>
      </div>
    </div>
  );
});

export default PlayBar;
