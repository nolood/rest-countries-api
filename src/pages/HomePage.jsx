import React, { useState } from 'react';
import CardList from '../components/CardList';
import SearchFilter from '../components/SearchFilter';

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState('Filter by region');
  const [searchFilter, setSearchFilter] = useState('');
  return (
    <div className='section main__wrap'>
      <div className='container main'>
        <SearchFilter searchFilter={searchFilter} setSearchFilter={setSearchFilter} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
        <CardList searchFilter={searchFilter} activeFilter={activeFilter} />
      </div>
    </div>
  );
};

export default HomePage;