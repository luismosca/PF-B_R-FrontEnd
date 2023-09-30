import React, { useState } from 'react';

import styles from '../SearchBar/SearchBar.module.css';
import { useDispatch,  } from 'react-redux';
import { onSearch } from '../../Redux/actions';
import Swal from 'sweetalert2';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch()
  

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const termTrimmed = searchTerm.trim()
    dispatch(onSearch(termTrimmed));
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Buscar por nombre o ID"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={()=> {handleSearch(); setSearchTerm("")}} className={styles.buttonsearchbar}>
        Buscar
      </button>
    </div>
  );
};

export { SearchBar };
