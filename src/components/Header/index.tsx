import { useState } from 'react';
import { SunIcon, MoonIcon, UserIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";

const Header = () => {
  const [ darkMode, setDarkMode ] = useState(false);
  const changeIconDark = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className='header'>
      <div className='header-logo'>
        <Link to={''}>Logo</Link>
      </div>
      <div className='header-icons'>
        { darkMode ? <SunIcon className='header-icon' onClick={changeIconDark}/> : <MoonIcon className='header-icon' onClick={changeIconDark}/> }
        <UserIcon className='header-icon'/>
      </div>
    </div>
  )
}

export default Header;