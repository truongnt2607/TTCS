import React, { useEffect, useRef, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './slider.scss';
import { Link } from 'react-router-dom';

// const movies = [
//   'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
//   'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
//   'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
//   'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
//   'https://m.media-amazon.com/images/M/MV5BNDhjMjE4NDItZTkyOC00NjIwLWI0MDQtYTJhZjY2YzlkMDQ0XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg',
//   'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
//   'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
//   'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
//   'https://posterspy.com/wp-content/uploads/2023/08/Oppenheimer-PosterSpy-4.jpg',
//   'https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg',
//   'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_FMjpg_UX1000_.jpg',
//   'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
//   'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
//   'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
//   'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
//   'https://m.media-amazon.com/images/M/MV5BNDhjMjE4NDItZTkyOC00NjIwLWI0MDQtYTJhZjY2YzlkMDQ0XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg',
//   'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
//   'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
// ]

const Slider = (prop) => {

  const URL = prop.url
  const page = 1
  const type = prop.type
  const href = prop.href

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`${URL}?api_key=4116248e941f7e6643a9525d5a0ef2de&page=${page}`)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, [])

  return (
    <div className='slider-container'>
      <section className='slider-section'>
        <div className="header-slider">
          <div className="type-list">{type}</div>
          {
            href ?
              (<Link to={href} className='watch-more'>Watch more...</Link>)
              : (<h1></h1>)
          }
        </div>
        <Splide
          options={{
            rewind: true,
            perPage: 8,
            perMove: 1,
            gap: '1.3rem',
            rewindByDrag: true,
            pagination: false,
            autoplay: true,
            interval: 4000,
            breakpoints: {
              1025: {
                perPage: 5
              },
              768: {
                perPage: 3
              }
            }
          }}
        >
          {
            movies.map((movie, index) => {
              if (movie.poster_path)
                return (
                  <SplideSlide key={index}>
                    <Link to={`/details/${movie.id}`}>
                      <div className='wapper-img'>
                        {/* <img src={movie} alt="" className="item-img" /> */}
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="item-img" />
                        <div className='item-status'>Full HD</div>
                      </div>
                    </Link>
                    <div className="item-title">{movie.title}</div>
                  </SplideSlide>
                )
            })
          }
        </Splide>
      </section>
    </div>
  )
}

export default Slider
