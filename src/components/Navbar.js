import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider.js'
import { NavLink } from 'react-router-dom'
import logo from '../images/BlogSpotcrop.png'
import { Button } from '../styles/Button.style.js'
import SearchBar from './SearchBar.js'
import Notifications from '@mui/icons-material/Notifications.js';
import AccountCircle from '@mui/icons-material/AccountCircle.js';
import Login from '../Login.js'
import Register from '../Register.js'
import Modal from './Modal.js'

const NotificationsIcon = Notifications.default;
const AccountCircleIcon = AccountCircle.default;

export default function Navbar({userloggedIn}) {
  const {auth} = useContext(AuthContext);
  const [isOpen, SetIsOpen] = useState(false);
  const [Content, SetContent] = useState('');
  console.log(auth)


  const OpenHandler = (e) => {
    console.log(e.target);
    SetIsOpen(true);
    if (e.target.value === "Join") {
      SetContent(<Register />);
    } else {
      SetContent(<Login />);
    }
  }


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
                <span style={{cursor: 'pointer'}} onClick={(e) => OpenHandler(e)}>
                  Login
                </span>
                <Button sty="nav" color="white" onClick={(e) => OpenHandler(e)}>
                  Sign up
                </Button>
                <Modal open={isOpen} onClose={() => SetIsOpen(false)}>{Content}</Modal>
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
