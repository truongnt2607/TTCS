import React from 'react'
import Slider from '../slider/Slider'
import ListMovie from '../listMovie/ListMovie'
import './homeContainer.scss'

const HomeContainer = () => {
  return (
    <div className='home-container'>
      <Slider 
        url='https://api.themoviedb.org/3/movie/now_playing'
        page='2'
        type='Đang chiếu'
      />
      <Slider 
        url='https://api.themoviedb.org/3/movie/popular'
        page='4'
        type='Nổi tiếng'
      />
      <ListMovie 
        url='https://api.themoviedb.org/3/movie/now_playing'
        page='3'
        type='Phim mới'
      />
      <ListMovie 
        url='https://api.themoviedb.org/3/movie/now_playing'
        page='4'
        type='Phim bộ'
      />
      <ListMovie 
        url='https://api.themoviedb.org/3/movie/now_playing'
        page='5'
        type='Phim lẻ'  
      />
    </div>
  )
}

export default HomeContainer
