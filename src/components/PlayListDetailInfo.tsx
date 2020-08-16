import React from "react";
import StyledPlayListDetailInfo from "../styles/components/StyledPlayListDetailInfo";
import { Link } from "react-router-dom";

const PlayListDetailInfo = () => {
  return (
    <StyledPlayListDetailInfo>
      <div className='background-1 cover'></div>
      <div className='background-2 cover'></div>
      <div className='playlist-image'>
        <img
          src='https://mosaic.scdn.co/300/ab67616d0000b273348468c203278d510f0cbc5aab67616d0000b2737ddc3742af79136a517a773bab67616d0000b273a2ef89ae0f8d1848081c1449ab67616d0000b273a4046d959070d48136bc5b71'
          alt='playlist-cover'
        />
      </div>
      <div className='playlist-meta'>
        <h4>Playlist</h4>
        <h1 className='playlist-meta-name'>Melodies Mattum</h1>
        <h5 className='playlist-meta-description'>
          Handpicked melodies from random timelines.
        </h5>
        <span className='playlist-creator'>
          <Link
            className='playlist-creator-name'
            to='/users/sundeep-charan-ramkumar'
          >
            Sundeep Charan Ramkumar
          </Link>
          <span className='playlist-creator-likes bulleted'>
            1 like{[1].length > 1 ? "s" : ""}
          </span>
          <span className='playlist-creator-duration bulleted'>
            7 hr 36 min
          </span>
        </span>
      </div>
    </StyledPlayListDetailInfo>
  );
};

export default PlayListDetailInfo;
