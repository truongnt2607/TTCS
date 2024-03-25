import React from 'react'
import Slider from '../slider/Slider'
import ListMovie from '../listMovie/ListMovie'
import './homeContainer.scss'

const HomeContainer = () => {
  return (
    <div className='home-container'>
      <Slider />
      <Slider />
      <ListMovie />
      <ListMovie />
      <ListMovie />
    </div>
  )
}

export default HomeContainer
