import React from 'react'
import HomeContainer from '../components/homeContainer/HomeContainer'
import './home.scss'
import Suggest from '../components/suggest/Suggest'

const Home = () => {
  return (
      <div className='home'>
        <Suggest />
        <HomeContainer />
      </div>
  )
}

export default Home;
