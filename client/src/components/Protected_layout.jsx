import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Protected_layout = () => {
  return (
    <div className='layout_structure'>
      <Navbar />
      <Outlet />
      <Footer />  
    </div>
  
  )
}

export default Protected_layout
