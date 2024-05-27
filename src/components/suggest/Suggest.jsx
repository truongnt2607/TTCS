import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import './suggest.scss'
import Info from '../info/Info';

const Suggest = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=4116248e941f7e6643a9525d5a0ef2de')
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, [])

  return (
    <div className='suggest'>
      <Splide
        options={{
          rewind: true,
          perPage: 1,
          pagination: false,
        }
        }
      >
        {
          movies.map((movie, index) =>

            < SplideSlide key={index}>
              <Link to={`/TTCS/details/${movie.id}`} className='suggest-img'>
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" className='background-img' />
              </Link>
              <Info
                details={movie}
                className='info'
              />
            </SplideSlide>
          )
        }
      </Splide>
    </div >
  )
}

export default Suggest;
