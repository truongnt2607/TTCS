import React, { useRef } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './slider.scss';

const movies = [
  'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BNDhjMjE4NDItZTkyOC00NjIwLWI0MDQtYTJhZjY2YzlkMDQ0XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
  'https://posterspy.com/wp-content/uploads/2023/08/Oppenheimer-PosterSpy-4.jpg',
  'https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_FMjpg_UX1000_.jpg'
]

const Slider = () => {
  return (
    <div className='slider-container'>
      <div className="type-list">Phim chiếu rạp</div>
      <Splide className='list-item'
      options={ {
        type: 'loop',
        perPage: 8,
        gap : '13px',
        rewindByDrag: true,
        pagination: false,
        autoplay: true,
        interval: 4000,
        breakpoints: {
          1025: {
            perPage: 5
          },
          768: {
            perPage: 2
          }
        }
      } }
    >
        {
          movies.map((movie, index) => 
            <SplideSlide key={index} className='wapper-item'>
              <div className='wapper-img'>
                <img src={movie} alt="" className="item-img" />
                <div className='item-status'>Full HD</div>
              </div>
              <div className="item-title">Movie Name</div>
            </SplideSlide>
          )
        }
      </Splide>
    </div> 
  )
}

export default Slider
