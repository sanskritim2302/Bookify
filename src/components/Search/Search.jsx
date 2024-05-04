
import React, { useRef } from 'react';
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from '../../context';
import "./Search.css";

const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchText = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = searchText.current.value.trim().toLowerCase();
    setSearchTerm(searchTerm);
  };

  return (
    <div className='search-form'>
      {/* <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input
                type="text"
                className='form-control'
                placeholder='Search book title...'
                ref={searchText}
              />
              <button type="submit" className='flex flex-c'>
                <FaSearch className='text-purple' size={32} />
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
}

export default Search;
