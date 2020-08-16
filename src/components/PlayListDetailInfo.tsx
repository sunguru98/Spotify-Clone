import React from "react";
import StyledPlayListDetailInfo from "../styles/components/StyledPlayListDetailInfo";
import { Link } from "react-router-dom";

interface PlaylistDetailInfoProps {
  playlist: {
    description: string | null;
    imageURL: string;
    name: string;
    ownerName: string | undefined;
    ownerId: string;
    likesCount: number;
  };
}

const PlayListDetailInfo: React.FC<PlaylistDetailInfoProps> = ({
  playlist: { description, imageURL, name, ownerName, ownerId, likesCount },
}) => {
  return (
    <StyledPlayListDetailInfo>
      <div className='background-1 cover'></div>
      <div className='background-2 cover'></div>
      <div className='playlist-image'>
        <img src={imageURL} alt='playlist-cover' />
      </div>
      <div className='playlist-meta'>
        <h4>Playlist</h4>
        <h1 className='playlist-meta-name'>{name}</h1>
        {description && (
          <h5 className='playlist-meta-description'>{description}</h5>
        )}
        <span className='playlist-creator'>
          {ownerName && (
            <Link className='playlist-creator-name' to={`/users/${ownerId}`}>
              {ownerName}
            </Link>
          )}
          <span className='playlist-creator-likes bulleted'>
            {likesCount} like{likesCount > 1 ? "s" : ""}
          </span>
          {/* <span className='playlist-creator-duration bulleted'>
            7 hr 36 min
          </span> */}
        </span>
      </div>
    </StyledPlayListDetailInfo>
  );
};

export default PlayListDetailInfo;
