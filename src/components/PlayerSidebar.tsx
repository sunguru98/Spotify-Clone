import React from "react";
import { Link } from "react-router-dom";
import StyledSidebar from "../styles/components/StyledSidebar";
import SidebarOption from "./SidebarOption";
import PlaylistOption from "./PlaylistOption";

import spotifyLogoWhite from "../assets/spotify-logo-white.png";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as ActiveHomeIcon } from "../assets/activeHome.svg";
import { ReactComponent as LibraryIcon } from "../assets/library.svg";
import { ReactComponent as ActiveLibraryIcon } from "../assets/activeLibrary.svg";
import { ReactComponent as CopyIcon } from "../assets/copy.svg";
import { ReactComponent as ActiveCopyIcon } from "../assets/activeCopy.svg";

const PlayerSidebar = () => {
  return (
    <StyledSidebar>
      <Link className='logo' to='/'>
        <img src={spotifyLogoWhite} alt='Logo-white' />
      </Link>
      <ul>
        <SidebarOption
          to='/'
          title='Home'
          icon={HomeIcon}
          activeIcon={ActiveHomeIcon}
          activeClassName='active'
        />
        <SidebarOption
          to='/search'
          title='Search'
          icon={CopyIcon}
          activeIcon={ActiveCopyIcon}
          activeClassName='active'
        />
        <SidebarOption
          to='/library'
          title='Your Library'
          icon={LibraryIcon}
          activeIcon={ActiveLibraryIcon}
          activeClassName='active'
        />
      </ul>
      <PlaylistOption />
    </StyledSidebar>
  );
};

export default PlayerSidebar;
