import React from 'react'
import './tab.scss';
import Item from '../components/item/Item';

const Page = () => {
  return (
      <div className='tab-container'>
        <div className="title">
          Phim mới
        </div>
        <div className="list">
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </div>
      </div>
  )
}

export default Page
