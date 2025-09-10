import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Search tasks"
      />
      <FontAwesomeIcon icon={faSearch} className="text-gray-500 ml-2" />
    </div>
  );
};

export default SearchBar;
