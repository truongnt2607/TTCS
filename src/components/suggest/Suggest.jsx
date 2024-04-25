import React, { useEffect, useState } from 'react'
import './suggest.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

const Suggest = () => {

  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])

  const getGenres = (idList, ref) => {
    let res = []
    idList.map(ele => {
      ref.forEach((x) => {
        if (ele === x.id) {
          res.push(x.name)
        }
      })
    })
    return res;
  }

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=4116248e941f7e6643a9525d5a0ef2de')
      .then(res => res.json())
      .then(data => setMovies([...data.results]))
  }, [])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=4116248e941f7e6643a9525d5a0ef2de')
      .then(res => res.json())
      .then(data => setGenres([...data.genres]))
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
              <Link to="/details" className='suggest-img'>
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" className='background-img' />
              </Link>
              <div className="content">
                <div className="content__title">{movie.title}</div>
                <div className="content__top">
                  <div className="status">Đang chiếu</div>
                  {movie.title}
                </div>
                <div className="content__rates">
                  <div className="rate"><i className="fa-solid fa-star star--icon"></i> 8.0 </div>
                  <div className="content__year">{movie.release_date.substring(0, 4)}</div>
                  <div className="content__type">Phim chiếu rạp</div>
                </div>
                <div className="content__product">
                  <div className="product__director">Đạo diễn: Martin Scorsese</div>
                  <div className="product__types">{`Thể loại: `}
                    {
                      getGenres(movie.genre_ids, genres).map((data, idx, arr) => {
                        if (idx !== arr.length - 1) {
                          return (
                            <a href="https://www.youtube.com" key={idx} className='product__type'>{`${data}, `}</a>
                          )
                        }
                        else {
                          return (
                            <a href="https://www.youtube.com" key={idx} className='product__type'>{`${data}`}</a>
                          )
                        }
                      }
                      )
                    }
                  </div>
                </div>
                <div className="content__decs">
                  {movie.overview}
                </div>
                <i className="fa-solid fa-circle-play play-icon"></i>
              </div>
            </SplideSlide>
          )
        }
      </Splide>
    </div >
  )
}

export default Suggest;
