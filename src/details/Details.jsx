import { useEffect, useState } from 'react'
import './details.scss'
import Info from '../components/info/Info'
import Slider from '../components/slider/Slider'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'

const Details = () => {

  const [movie, setMovie] = useState({})
  const [video, setVideo] = useState([])
  const [actor, setActor] = useState([])
  const { idMovie } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=4116248e941f7e6643a9525d5a0ef2de`)
      .then(res => res.json())
      .then(data => setMovie({ ...data }))
  }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=4116248e941f7e6643a9525d5a0ef2de`)
      .then(res => res.json())
      .then(data => setVideo(data.results))
  }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${idMovie}/casts?api_key=4116248e941f7e6643a9525d5a0ef2de`)
      .then(res => res.json())
      .then(data => setActor(data.cast))
  }, [])

  let keyYoutube = ''

  video?.map(ele => {
    if (ele.name === 'Official Trailer') {
      keyYoutube = ele.key
    }
  })

  return (
    <div className='details-container'>
      <div className="top">
        <div className="bg-wapper">
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className='bg' />
        </div>
        <Info details={movie} className='content' />
      </div>
      <div className="watch">
        <div className="actor-title">Actor</div>
        <div className="actor">
          {
            actor?.map(ele => {
              if (ele.profile_path)
                return (
                  <div className="actor-wapper">
                    <img src={`https://image.tmdb.org/t/p/original/${ele.profile_path}`} alt="" className="img-actor" />
                    <div className="name-actor">{ele.name}</div>
                  </div>
                )
            })
          }
        </div>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${keyYoutube}`}
          controls={true}
          className='player'
          width='85vw'
          height='calc(85vw / 16 * 8)'
        />
      </div>
      <Slider
        url={`https://api.themoviedb.org/3/movie/${idMovie}/similar`}
        type='Similar'
      />
    </div>
  )
}

export default Details
