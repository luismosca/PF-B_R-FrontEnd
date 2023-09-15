import React, { useState } from 'react';
import style from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={style.searchBar}>
      <input
        type="text"
        placeholder="Buscar por nombre o ID"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch} className={style.buttonsearchbar}>Buscar</button>
    </div>
  );
};

export { SearchBar }