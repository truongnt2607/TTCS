import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Tab from './tab/Tab'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Details from './details/Details'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='tab/popular'
          element={<Tab
            url='https://api.themoviedb.org/3/movie/popular'
            type='Popular'
          />}
        />
        <Route path='tab/now-playing'
          element={<Tab
            url='https://api.themoviedb.org/3/movie/now_playing'
            type='Now Playing'
          />}
        />
        <Route path='tab/upcoming'
          element={<Tab
            url='https://api.themoviedb.org/3/movie/upcoming'
            type='Upcoming'
          />}
        />
        <Route path='tab/top-rated'
          element={<Tab
            url='https://api.themoviedb.org/3/movie/top_rated'
            type='Top Rated'
          />}
        />
        <Route path='tab/:keyword'
          element={<Tab
            url='https://api.themoviedb.org/3/search/movie?query='
            type='Tìm kiếm phim: '
          />}
        />
        <Route path='details/:idMovie' element={<Details />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
