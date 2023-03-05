import React, { useState } from 'react';

const SearchFilter = ({activeFilter, setActiveFilter, searchFilter, setSearchFilter}) => {

  const [selectBoxActive, setSelectBoxActive] = useState(false);

  return (
    <div className='search__wrapper'>
      <form className='search__input'>
        <input onChange={e => setSearchFilter(e.target.value)} value={searchFilter} className='search__input-input' type="text" placeholder='Search for a country...'/>
        <button className='search__btn'><svg className='search__img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Search</title><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg></button>
      </form>
      <div onClick={() => setSelectBoxActive(!selectBoxActive)} className='search__selectbox'>
        <span className='selectbox-title'>{activeFilter} <svg xmlns="http://www.w3.org/2000/svg" className='selectbox__img' viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144"/></svg></span>
        <div className={selectBoxActive ? 'selectbox active' : 'selectbox'}>
          <span onClick={() => setActiveFilter('Filter by region')} className='selectbox__text'>Filter by region</span>
          <span onClick={() => setActiveFilter('Africa')} className='selectbox__text'>Africa</span>
          <span onClick={() => setActiveFilter('Americas')} className='selectbox__text'>Americas</span>
          <span onClick={() => setActiveFilter('Asia')} className='selectbox__text'>Asia</span>
          <span onClick={() => setActiveFilter('Europe')} className='selectbox__text'>Europe</span>
          <span onClick={() => setActiveFilter('Oceania')} className='selectbox__text'>Oceania</span>
        </div>
      </div>
      
    </div>
  );
};

export default SearchFilter;