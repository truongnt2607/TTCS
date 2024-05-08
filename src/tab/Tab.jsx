import React from 'react'
import './tab.scss';
import ListMovie from '../components/listMovie/ListMovie';
import { useParams } from 'react-router-dom';

const Tab = (prop) => {
  let type = prop.type
  let URL = prop.url
  const handleKeyword = (string) => {
    return string.keyword.replace('+', ' ')
  }
  const keyword = useParams()
  if (keyword.keyword) {
    URL += keyword.keyword + '&'
    type = 'Tìm kiếm: ' + handleKeyword(keyword)
  } else {
    URL += '?'
  }
  //console.log(URL)
  const page = prop.page
  return (
    <div className='tab-container'>
      <ListMovie
        url={URL}
        type={`${type}`}
      />
    </div>
  )
}

export default Tab
