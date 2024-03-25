import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.scss'
import { Search, Close, Menu } from '@mui/icons-material'

function Navbar() {
  const [showPage, setShowPage] = useState('');
  const [showSearch, setShowSearch] = useState('');
  const [showContainer, setShowContainer] = useState('');
  const [backgroundNav, setBackgroundNav] = useState('');
  const showSearchHandle = () => {
    if (showSearch === '') {
      setShowSearch('search--active');
      setShowContainer('nav__container--active');
    } else {
      setShowSearch('');
      setShowContainer('');
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
      <div className={`nav__container ${showContainer}`}>
        <div className="nav__left">
          <Link to='/'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" className='nav__logo'/>
          </Link>
          <div className={`nav__list ${showPage}`}>
            <ul className='nav__page'>
              <li className="nav__item">
                <Link to='/' className='tab'>Trang chủ</Link>
                </li>
              <li className="nav__item">
                <Link to='/tab' className='tab'>Phim mới</Link>
              </li>
              <li className="nav__item">
                <Link to='/tab' className='tab'>Phim bộ</Link>
              </li>
              <li className="nav__item">
                <Link to='tab' className='tab'>Phim lẻ</Link>
              </li>
              <li className="nav__item">
                <Link to='tab' className='tab'>Thể loại</Link>
              </li>
              <li className="nav__item">
                <Link to='tab' className='tab'>Quốc gia</Link>
              </li>
            </ul>
            <Close onClick={showPageHandle} className='nav__close'></Close>
          </div>
        </div>
        <div className="nav__actions">      
            <div className="nav__actions__search">
              <Search onClick={showSearchHandle} className='nav__actions__search__icon'></Search>
            </div>
            <Menu onClick={showPageHandle} className='nav__actions__menu'></Menu>
        </div>
      </div>
      <div className={`search ${showSearch}`}>
        <div className="search__box">
          <input type="text" className="search__box__input" placeholder='Nhập tên phim'/>
          <Close onClick={showSearchHandle} className='search__box__close'></Close>
        </div>
      </div>
    </div>
  )
}

export default Navbar
