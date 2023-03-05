import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { COUNTRY_ROUTE } from '../utils/consts';

const CountryPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { country } = location.state;
  const data = country.filter((item) => item.alpha3Code === id);

  const navigateTo = (item) => {
    navigate(`${COUNTRY_ROUTE}/${item}`, {state: {country}})
  }
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
          <img className='country__img' src={data[0].flag} alt="" />
          <div className='country__info'>
            <div className='country__title'><h2>{data[0].name}</h2></div>
            <div className='country__info-info'>
              <p>
                NativeName: <span>{data[0].nativeName}</span> <br />
                Population: <span>{data[0].population}</span> <br />
                Region: <span>{data[0].region}</span> <br />
                Sub Region: <span>{data[0].subregion}</span> <br />
                Capital: <span>{data[0].capital}</span>
              </p>
              <p>
                Top Level Domain: <span>{data[0].topLevelDomain}</span> <br />
                Currencies: <span>{data[0].currencies.map((item, index) => index !== data[0].currencies.length - 1 ? `${item.name}, ` : `${item.name}`)}</span> <br />
                Languages: <span>{data[0].languages.map((item, index) => index !== data[0].languages.length - 1 ? `${item.name}, ` : `${item.name}`)}</span> <br />
              </p>
            </div>
            <div className='border-countries'>
              <span className='border__title'>Border Countries:</span>
              {data[0].borders ? data[0].borders.map((item) => <button onClick={() => navigateTo(item)} className='border__btn'>{item}</button>) : <button className='border__btn'>None</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
