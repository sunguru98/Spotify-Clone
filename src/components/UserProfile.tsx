import React, { useState } from "react";
import { Link } from "react-router-dom";
import StyledUserProfile from "../styles/components/StyledUserProfile";
import genericProfile from "../assets/genericProfile.jpg";
import StyledButton from "../styles/components/StyledButton";
import { LogoutAction } from "../redux/types/action.types";

const UserProfile: React.FC<{
  user: SpotifyApi.CurrentUsersProfileResponse;
  logOut: () => LogoutAction;
}> = ({ user, logOut }) => {
  const [isDropped, setIsDropped] = useState(false);
  return (
    <StyledUserProfile isDropped={isDropped}>
      <button className='dropdown' onClick={() => setIsDropped(!isDropped)}>
        <figure>
          <img
            src={user.images ? user.images[0].url : genericProfile}
            alt='Profile'
          />
        </figure>
        <span className='text'>{user.display_name}</span>
        <span className='arrow' />
      </button>

      {isDropped && (
        <ul onClick={() => setIsDropped(false)}>
          <li>
            <Link to='/account'>Account</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <hr />
          <li>
            <StyledButton onClick={logOut}>Log out</StyledButton>
          </li>
        </ul>
      )}
    </StyledUserProfile>
  );
};

export default UserProfile;
