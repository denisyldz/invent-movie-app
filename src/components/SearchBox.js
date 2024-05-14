import React from 'react';
const SearchBox = ({ searchText, setSearchText }) => {
  return <>
    <div className='search-box'>
      <input type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search..."></input>
    </div>
  </>
}

export default SearchBox;