import React from "react";

function Search({setSearchInput}) {

  function handleSearchInput(event){
    setSearchInput(event.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchInput}
      />
    </div>
  );
}

export default Search; 
