import React from 'react'
import {LayoutDashboard, TimerReset, Astroid} from 'lucide-react'
import { Navigate } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar_wrapper'>
        <div className='navbar_container'>
          <div className='first_contents'>
            <li><Navigate to='/dashboard'><LayoutDashboard /> Dashboard </Navigate></li>
             <li><Navigate to='/sessions'><TimerReset />Sessions</Navigate></li>
              <li><Navigate to='/sessions'><Astroid />Pricing </Navigate></li>

          </div>
        </div>
    </div>
  )
}

export default Navbar