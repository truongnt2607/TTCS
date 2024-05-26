import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.scss'
import { Search, Close, Menu } from '@mui/icons-material'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

function Navbar() {
  const [showPage, setShowPage] = useState('');
  const [backgroundNav, setBackgroundNav] = useState('');
  const [close, setClose] = useState('')
  const [keySearch, setKeySearch] = useState('')

  const handleKeyword = (keyword) => {
    return keyword.replace(/\s/g, '+')
  }
  
  const handleClose = () => {
    handleInput('')
    setClose('')
  }

  const handleInput = (e) => {
    setKeySearch(e)
    if (keySearch !== '') {
      setClose('search-close-active')
    }
  }

  const showPageHandle = () => {
    if (showPage === '') {
      setShowPage('nav__list-active');
    } else {
      setShowPage('');
    }
  }

  useEffect(() => {
    const backgroundNavHandle = () => {
      if (window.scrollY >= 60) {
        setBackgroundNav('nav-active');
      } else {
        setBackgroundNav('')
      }
    }

    window.addEventListener('scroll', backgroundNavHandle)
  }, [])

  return (
    <div className={`nav ${backgroundNav}`}>
      <div className={`nav__container`}>
        <div className="nav__left">
          <Menu onClick={showPageHandle} className='nav__menu'></Menu>
          <Link to='/'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Iqiyi_Logo_Baru.png" alt="logo" className='nav__logo' />
          </Link>
          <div className={`nav__list ${showPage}`}>
            <ul className='nav__page'>
              <li className="nav__item">
                <Link to='/' className='tab'>Home</Link>
              </li>
              <li className="nav__item">
                <Link to='/tab/popular' className='tab'>Popular</Link>
              </li>
              <li className="nav__item">
                <Link to='/tab/now-playing' className='tab'>Now Playing</Link>
              </li>
              <li className="nav__item">
                <Link to='/tab/upcoming' className='tab'>Upcoming</Link>
              </li>
              <li className="nav__item">
                <Link to='/tab/top-rated' className='tab'>Top Rated</Link>
              </li>
            </ul>
            <Close onClick={showPageHandle} className='nav__close'></Close>
          </div>
        </div>
        <div className="nav__actions">
          <div className="nav__search">
            <input 
              type="text" 
              placeholder='Search...' 
              className='input' 
              value={keySearch}
              onChange={(e) => handleInput(e.target.value)}
            />
            <div className="line"></div>
            <CancelRoundedIcon 
              className={`search-close ${close}`}
              onClick={handleClose}
            />
            <Link to={`/tab/${handleKeyword(keySearch)}`}  className='nav__search-icon'>
              <Search className='search-icon'></Search>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
