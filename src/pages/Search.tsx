import React from "react";
import { ReactComponent as PlayIcon } from "../assets/play.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import StyledSearch, {
  StyledSearchListItem,
} from "../styles/pages/StyledSearch";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <StyledSearch>
      <h2>Songs</h2>
      <SearchListItem />
      <SearchListItem />
      <SearchListItem />
      <SearchListItem />
    </StyledSearch>
  );
};

const SearchListItem = () => {
  return (
    <StyledSearchListItem>
      <div className='cover-pic-container'>
        <img
          loading='lazy'
          src='https://i.scdn.co/image/ab67616d00001e02b8afa87d42948ca4765828c8'
          alt='music-cover'
        />

        <div className='button-container'>
          <button title='Play'>
            <PlayIcon />
          </button>
        </div>
      </div>
      <div className='song-detail-container'>
        <Link className='name' to='/track/2gp0OtnltLdrcNhKHVL2qM'>
          <span>Nee Nenacha</span>
        </Link>
        <div>
          <Link to='/artist/7zFBW2JxM4bgTTKxCRcS8Q'>Hiphop Tamizha</Link>,{" "}
          <Link to='/artist/7qjJw7ZM2ekDSahLXPjIlN'>Sid Sriram</Link>
        </div>
      </div>
      <button className='menu-container'>
        <MenuIcon />
      </button>
    </StyledSearchListItem>
  );
};

export default Search;
