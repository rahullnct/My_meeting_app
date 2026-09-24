import React from 'react'
import { Outlet } from 'react-router-dom'

const Protected_route = () => {
  return (
      <Outlet />
  )
}

export default Protected_route
