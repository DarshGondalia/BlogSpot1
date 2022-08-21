import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider.js'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/BlogSpotcrop.png'
import { Button } from '../styles/Button.style.js'
import SearchBar from './SearchBar.js'
import Notifications from '@mui/icons-material/Notifications.js';
import Person from '@mui/icons-material/Person.js';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown.js';
import Face from '@mui/icons-material/Face.js';
import Logout from '@mui/icons-material/Logout.js';
import Login from '../Login.js'
import Register from '../Register.js'
import Modal from './Modal.js'

const NotificationsIcon = Notifications.default;
const PersonIcon = Person.default;
const ArrowDropDownIcon = ArrowDropDown.default;
const FaceIcon = Face.default;
const LogoutIcon = Logout.default;

export default function Navbar({userloggedIn}) {
  const {auth} = useContext(AuthContext);
  const [isOpen, SetIsOpen] = useState(false);
  const [Content, SetContent] = useState('');
  const [DropDownOpen, SetDropDownOpen] = useState(false);

  const DropDownHandler = () => SetDropDownOpen(!DropDownOpen);

  const OpenHandler = (e) => {
    SetIsOpen(true);
    if (e.target.id === "login_button") {
      SetContent(<Login />);
    } else {
      SetContent(<Register />);
    }
  }


  return (
    <>
        <nav className='bg-white d-flex align-items-center ps-3 pe-3 pt-1 pb-1'>
            <NavLink to="/">
                <img src={logo} alt="" width="45%"/>
            </NavLink>
            <SearchBar placeholder='posts, authors, content...'/>
          <div className='d-flex align-items-center ms-auto gap-4'>
            {userloggedIn ? (
              <>
                <NotificationsIcon />
                <div className='d-flex gap-2 pointer' onClick={() => DropDownHandler()}>
                  <PersonIcon />
                  {auth.user}
                  <ArrowDropDownIcon />
                  <div className={DropDownOpen ? 'dropdown-content-open' : 'hidden'}>
                    <div><Link to="/profile"><FaceIcon />Account</Link></div>
                    <div><LogoutIcon />Log out</div>
                  </div>
                </div>
              </>
              ) : (
              <>
                <span className='pointer' onClick={(e) => OpenHandler(e)} id="login_button">
                  Login
                </span>
                <Button sty="nav" color="white" onClick={(e) => OpenHandler(e)} id="join_button">
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
