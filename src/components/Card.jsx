import React from 'react';
import { useNavigate } from 'react-router-dom';
import { COUNTRY_ROUTE } from '../utils/consts';

const Card = ({item, country}) => {
  const navigate = useNavigate();

  const navigateTo = (country) => {
    navigate(`${COUNTRY_ROUTE}/${item.alpha3Code}`, {state: {country}})
  }

  return (
    <div onClick={() => navigateTo(country)} className='card'>
      <div className='card__img' style={{backgroundSize: 'cover', backgroundImage: `url(${item.flag})`}}></div>
      <div className='card__info'>
        <span className='card__title'>{item.name}</span>
        <p className='card__text'>
          Population: <span>{item.population}</span><br />
          Region: <span>{item.region}</span><br />
          Capital: <span>{item.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;