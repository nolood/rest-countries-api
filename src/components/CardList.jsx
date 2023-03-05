import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardList = ({activeFilter, searchFilter}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://nolood.github.io/rest-countries-api/data.json');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='cardlist'>
      {
        searchFilter === '' ?
          activeFilter === 'Filter by region' ?
            data.map((item, index) => < Card country={data} key={`${index}${item.alpha3Code}${item.name}`} item={item}/>)
          :
            data.map((item, index) => item.region === activeFilter ? < Card country={data} key={`${index}${item.alpha3Code}${item.name}`} item={item}/> : <></>)
        :
          activeFilter === 'Filter by region' ?
            data.map((item, index) => item.name.toLowerCase().includes(searchFilter.toLowerCase()) ? < Card country={data} key={`${index}${item.alpha3Code}${item.name}`} item={item}/> : <></>)
          :
            data.map((item, index) => item.region === activeFilter ? item.name.includes(searchFilter) ? < Card country={data} key={`${index}${item.alpha3Code}${item.name}`} item={item}/> : <></> : <></>)
      }
    </div>
  );
};

export default CardList;
