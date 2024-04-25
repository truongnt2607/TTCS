import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
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
        <Route path='/' element={<Home/>} />
        <Route path='phim-moi' 
          element={<Tab
            url='https://api.themoviedb.org/3/movie/upcoming'
            page='1'
            type='Phim mới'
          />}
        />
        <Route path='phim-bo' 
          element={<Tab 
            url='https://api.themoviedb.org/3/movie/now_playing'
            page='2'
            type='Phim bộ'
          />}
        />
        <Route path='phim-le' 
          element={<Tab
            url='https://api.themoviedb.org/3/movie/popular'
            page='3'
            type='Phim lẻ'
          />}
        />
        <Route path='details' element={<Details/>} />
      </Routes>
      <Footer/> 
    </div>
  )
}

export default App
