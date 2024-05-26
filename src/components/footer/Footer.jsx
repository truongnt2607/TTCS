import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <div className='footer-container'>
      <div className="intro col">
        Giới thiệu
        <Link to="/" className='footer-item'>Trang chủ</Link>
        <a className='footer-item copyright'>Copyright <i className="fa-regular fa-copyright"></i> 2024 by NTT</a>
      </div>
      <div className="contact col">
        Hợp tác
        <a className='footer-item'>Đăng quảng cáo</a>
        <a className='footer-item'>Thông tin</a>
      </div>
      <div className="help col">
        Hỗ trợ giúp đỡ
        <a className='footer-item'>Liên Hệ</a>
        <a className='footer-item'>Báo cáo</a>
      </div>
      <div className="rules col">
        Điều khoản
        <a className='footer-item'>Điều khoản chung</a>
        <a className='footer-item'>Chính sách riêng tư</a>
      </div>
    </div>
  )
}

export default footer
