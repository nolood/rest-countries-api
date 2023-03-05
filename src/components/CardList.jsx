import React from 'react';
import Card from './Card';

const CardList = ({activeFilter, searchFilter}) => {
  const data = require('./../data.json')
  return (
    <div className='cardlist'>
      {
        searchFilter === '' ?
          activeFilter === 'Filter by region' ?
            data.map((item) => <Card key={item.name} item={item}/>)
          :
            data.map((item) => item.region === activeFilter ? <Card key={item.name} item={item}/> : <></>)
        :
          activeFilter === 'Filter by region' ?
            data.map((item) => item.name.toLowerCase().includes(searchFilter.toLowerCase()) ? <Card key={item.name} item={item}/> : <></>)
          :
            data.map((item) => item.region === activeFilter ? item.name.includes(searchFilter) ? <Card key={item.name} item={item}/> : <></> : <></>)
      }
    </div>
  );
};

export default CardList;