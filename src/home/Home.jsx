import React from 'react'
import Suggest from '../components/suggest/Suggest'
import HomeContainer from '../components/homeContainer/HomeContainer'
import './home.scss'

const Home = () => {
  return (
      <div className='home'>
        <Suggest className='suggest'/>
        <HomeContainer className='main'></HomeContainer>
      </div>
  )
}

export default Home;
