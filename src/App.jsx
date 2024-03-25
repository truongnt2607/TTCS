import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './home/Home'
import Tab from './tab/Tab'
import Navbar from './components/navbar/Navbar'
import { GlobalStyles } from '@mui/material'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tab' element={<Tab/>} />
      </Routes>
    </div>
  )
}

export default App
