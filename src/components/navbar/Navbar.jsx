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
  
  const handleClose = () => {
    handleInput('')
    setClose('')
  }

  const handleInput = (e) => {
    console.log(e)
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
                <Link to='/' className='tab'>Trang chủ</Link>
              </li>
              <li className="nav__item">
                <Link to='phim-moi' className='tab'>Phim mới</Link>
              </li>
              <li className="nav__item">
                <Link to='phim-bo' className='tab'>Phim bộ</Link>
              </li>
              <li className="nav__item">
                <Link to='phim-le' className='tab'>Phim lẻ</Link>
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
            ></CancelRoundedIcon>
            <Search className='nav__search-icon'></Search>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
