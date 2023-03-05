import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { COUNTRY_ROUTE } from '../utils/consts';

const CountryPage = () => {
  const navigate = useNavigate()
  const param = useParams();
  const data = PUBLIC_URL + '/data.json';
  const country = data.filter((item) => item.alpha3Code === param.id) 


  return (
    <div className='section country__wrap'>
      <div className='container country'>
        <div onClick={() => navigate(-1)} className='back'>
          <button className='back__btn'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Back</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292"/></svg> 
            <span>Back</span>
          </button>
        </div>
        <div className='country__information'>
          {/* <div className='country__img' style={{backgroundImage: `url(${country[0].flag})`}}></div> */}
          <img className='country__img' src={country[0].flag} alt="" />
          <div className='country__info'>
            <div className='country__title'><h2>{country[0].name}</h2></div>
            <div className='country__info-info'>
              <p>
                NativeName: <span>{country[0].nativeName}</span> <br />
                Population: <span>{country[0].population}</span> <br />
                Region: <span>{country[0].region}</span> <br />
                Sub Region: <span>{country[0].subregion}</span> <br />
                Capital: <span>{country[0].capital}</span>
              </p>
              <p>
                Top Level Domain: <span>{country[0].topLevelDomain}</span> <br />
                Currencies: <span>{country[0].currencies.map((item, index) => index !== country[0].currencies.length - 1 ? `${item.name}, ` : `${item.name}`)}</span> <br />
                Languages: <span>{country[0].languages.map((item, index) => index !== country[0].languages.length - 1 ? `${item.name}, ` : `${item.name}`)}</span> <br />
              </p>
            </div>
            <div className='border-countries'>
              <span className='border__title'>Border Countries:</span>
              {country[0].borders ? country[0].borders.map((item) => <button onClick={() => navigate(COUNTRY_ROUTE + '/' + item)} className='border__btn'>{item}</button>) : <button className='border__btn'>None</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
