import React from 'react';
import useTheme from '../hooks/use-theme';

const Navbar = () => {
  const {theme, setTheme} = useTheme() 

  const themeChanger = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className='section navbar__wrap'>
      <div className='container navbar'>
        <span className='navbar__title'>Where in the world?</span>
        <div onClick={() => themeChanger()} className='theme__chooser'>
          <svg className='theme__img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Moon</title><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
          <span className='theme__title'>Dark Mode</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;