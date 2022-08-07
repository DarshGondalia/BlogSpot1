import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/BlogSpotcrop.png'
import { Button } from '../styles/Button.style.js'
import SearchBar from './SearchBar.js'
import NotificationsIcon from '@mui/icons-material/Notifications.js';

export default function Navbar() {

  return (
    <>
        <nav className='d-flex align-items-center ps-3 pe-3 pt-1 pb-1'>
            <NavLink to="/">
                <img src={logo} alt="" width="50%"/>
            </NavLink>
            <SearchBar placeholder='posts, authors, contents...'/>
          <div className='d-flex align-items-center ms-auto gap-4'>
            <NavLink to="/login">
                Login
            </NavLink>
            <NavLink to="/register">
              <Button sty="nav" color="white">
                Sign up
              </Button>
            </NavLink>
          </div>
        </nav>
        <nav className='bg-primary text-white'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
    </>
  )
}
