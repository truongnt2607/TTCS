import React, { useEffect, useState } from 'react'
import './listMovie.scss'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const ListMovie = (prop) => {

  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const URL = prop.url
  const type = prop.type

  const backHandle = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const nextHandle = () => {
      setPage(page + 1)
  }


  useEffect(() => {
    fetch(`${URL}api_key=4116248e941f7e6643a9525d5a0ef2de&page=${page}`)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      return (
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      )
    }, [URL, page]
)

  return (
    <div className='list-container'>
      <div className="list-title">{`${type}`}</div>
      <div className="list-wapper">
        {
          movies.map((movie, index) => 
            <Link to={`/details/${movie.id}`} className="list-item" key={index}>
              <div className="wapper-img">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="item-img" />
                {/* <img src={movie} alt="" className="item-img" /> */}
                <div className="item-status">Full HD</div>
              </div>
              <div className="movie-title">{movie.title}</div>
            </Link>
          )
        }
      </div>
      <div className='pagination-container'>
        <ArrowBackIosNewIcon className='back-icon icon' onClick={backHandle} />
        <div className="current-page">{page}</div>
        <ArrowForwardIosIcon className='forward-icon icon'onClick={nextHandle} />
    </div>
    </div>
  )
}

export default ListMovie
