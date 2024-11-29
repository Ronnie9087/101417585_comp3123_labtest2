import React from 'react';

const SearchBar = ({ setCity }) => {
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setCity(e.target.value);
    }
  };

  return (
    <input
      type="text"
      placeholder="Enter city name"
      onKeyDown={handleSearch}
    />
  );
};

export default SearchBar;
