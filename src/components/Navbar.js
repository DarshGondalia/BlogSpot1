import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider.js'
import { NavLink } from 'react-router-dom'
import logo from '../images/BlogSpotcrop.png'
import { Button } from '../styles/Button.style.js'
import SearchBar from './SearchBar.js'
import Notifications from '@mui/icons-material/Notifications.js';
import AccountCircle from '@mui/icons-material/AccountCircle.js';

const NotificationsIcon = Notifications.default;
const AccountCircleIcon = AccountCircle.default;

export default function Navbar({userloggedIn}) {
  const {auth} = useContext(AuthContext)


  return (
    <>
        <nav className='d-flex align-items-center ps-3 pe-3 pt-1 pb-1'>
            <NavLink to="/">
                <img src={logo} alt="" width="45%"/>
            </NavLink>
            <SearchBar placeholder='posts, authors, content...'/>
          <div className='d-flex align-items-center ms-auto gap-4'>
            {userloggedIn ? (
              <>
                <NotificationsIcon />
                <AccountCircleIcon />
                {auth.user}
              </>
              ) : (
              <>
                <NavLink to="/login">
                  Login
                </NavLink>
                <NavLink to="/register">
                  <Button sty="nav" color="white">
                    Sign up
                  </Button>
                </NavLink>
              </>
              )
            }
          </div>
        </nav>
        <nav className='bg-primary'>
          {userloggedIn ? (
            <ul>
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/random">
                <li>Random</li>
              </NavLink>
              <NavLink to="/myblogs">
                <li>My Blogs</li>
              </NavLink>
            </ul>
            ) : (
              <ul>
                <NavLink to="/">
                  <li>Home</li>
                </NavLink>
                <NavLink to="/random">
                  <li>About</li>
                </NavLink>
                <NavLink to="/profile">
                  <li>Contact</li>
                </NavLink>
              </ul>
            )
          }
          </nav>
        </>
  )
}
