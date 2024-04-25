import React from 'react'
import './details.scss'
import ReactPlayer from 'react-player'

const Details = (prop) => {
  return (
    <div className='details-container'>
      <ReactPlayer
        url= 'https://www.youtube.com/watch?v=Kmsa5brhl_0'
        controls={true}
        mute={true}
      />
    </div>
  )
}

export default Details
