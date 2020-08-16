import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import StyledSearchBar from "../styles/components/StyledSearchBar";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <StyledSearchBar>
      <SearchIcon />
      <input
        type='text'
        name='searchQuery'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder='Search for Artists, Songs, or Podcasts'
      />
    </StyledSearchBar>
  );
};

export default Search;
