import React from 'react'
import Slider from '../slider/Slider'
import ListMovie from '../listMovie/ListMovie'
import './homeContainer.scss'

const HomeContainer = () => {
  return (
    <div className='home-container'>
      <Slider 
        url='https://api.themoviedb.org/3/movie/popular'
        type='Popular'
        href='/TTCS/tab/popular'
      />
      <Slider 
        url='https://api.themoviedb.org/3/movie/now_playing'
        type='Now Playing'
        href='/TTCS/tab/now-playing'
      />
      <Slider 
        url='https://api.themoviedb.org/3/movie/upcoming'
        type='Upcoming'
        href='/TTCS/tab/upcoming'
      />
      <Slider 
        url='https://api.themoviedb.org/3/movie/top_rated'
        type='Top Rated'
        href='/TTCS/tab/top_rated'
      />
    </div>
  )
}

export default HomeContainer
