import React from 'react'
import './tab.scss';
import ListMovie from '../components/listMovie/ListMovie';

const Page = (prop) => {
  const URL = prop.url
  const page = prop.page
  const type = prop.type
  return (
    <div className='tab-container'>
      <ListMovie
        url={URL}
        page={page}
        type={type}
      />
    </div>
  )
}

export default Page
