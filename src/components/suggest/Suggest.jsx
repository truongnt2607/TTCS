import React from 'react'
import './suggest.scss'

const Suggest = () => {
  return (
    <div className='suggest'>
      <a href="">
        <img src="https://image.tmdb.org/t/p/original/j0stmN6ktCpqoWE5nT6xHCyDpwP.jpg" alt="" />
      </a>
      <div className="content">
        <div className="content__title">Điệp vụ Boston</div>
        <div className="content__top">
          <div className="status">Đang chiếu</div>
          The Departed
        </div>
        <div className="content__rates">
          <i class="fa-solid fa-star star--icon"></i>
          <div className="rate">8.0</div>
          <div className="content__year">2006</div>
          <div className="content__type">Phim chiếu rạp</div>
        </div>
        <div className="content__product">
          <div className="product__director">Đạo diễn: Martin Scorsese</div>
          <div className="product__type">Thể loại: Tội phạm, Giật gân</div>
        </div>
        <div className="content__decs">
        The Departed xoay quanh 2 người đàn ông và cuộc sống giằng xé bị giằng xé giữa bản chất và vỏ bọc ở chốn thành thị Boston đen tối và đầy rẫy hoạt động tội phạm. Họ chưa bao giờ biết nhau và luôn tìm cách truy lùng gương mặt thực sự của người còn lại.
        </div>
        <i class="fa-solid fa-circle-play play-icon"></i>
      </div>
    </div>
  )
}

export default Suggest;
