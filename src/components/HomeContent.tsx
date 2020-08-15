import React from "react";
import StyledHomeContent from "../styles/components/StyledHomeContent";
import HomeContentItem from "./HomeContentItem";

const HomeContent = () => {
  return (
    <StyledHomeContent className='home'>
      <HomeContentItem name='Shortcuts' />
      <HomeContentItem name='Shortcuts' />
      <HomeContentItem name='Shortcuts' />
    </StyledHomeContent>
  );
};

export default HomeContent;
