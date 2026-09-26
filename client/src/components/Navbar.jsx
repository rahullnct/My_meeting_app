import React from 'react'
import {LayoutDashboard, TimerReset, Astroid} from 'lucide-react'
import { Navigate, NavLink } from 'react-router-dom'
import {dummyUser} from "../assets/asset.js"
import { useLocation,Link } from 'react-router-dom'
import "../CSS_folder/Navbar.css"
import { UserButton } from '@clerk/react'

const Navbar = () => {

  const {isSignedup, user}= {user: dummyUser, isSignedup:true}
  // console.log("user_details",user);
  const location= useLocation()
  const userName= user?.firstName || user?.lastName || user?.primaryEmailAddress?.emailAddress.split("@")[0] || "User"
  console.log("userName:",userName)
  

  return (
    <div className='navbar_wrapper'>
        <div className='nav_links_and_logo'>
          <Link to='/dashboard' >
          <img src="/logo.svg" alt="logo" className="logo"/>
          <span className="logo-text">VMeetUp</span>
          </Link>
          <nav className='nav_links'>
            <NavLink to='/dashboard' className={`nav_link ${location.pathname==="/dashboard" ? "active" : ""}`}> <LayoutDashboard size={20}/>Dashboard </NavLink>
          <NavLink to='/sessions' className={`nav_link ${location.pathname === "/sessions" ? 'active': ""}`}><TimerReset size={20}/>Sessions</NavLink>
          <NavLink to='/pricing' className={`nav_link ${location.pathname === "/pricing" ? 'active': ""}`}><Astroid size={20}/>Pricing</NavLink>
          </nav>
        </div>
        { isSignedup && (
          <div className='user_details'>
          <span className="user-name"> Welcome, {userName}</span>
          <UserButton afterSignOutUrl="/login" />
            </div>
          )}
          
    </div>
  )
}

export default Navbar