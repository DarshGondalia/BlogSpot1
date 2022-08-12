import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Random from './Random.js';
import Profile from './Profile.js';
import MyBlogs from './MyBlogs.js';
import Register from './Register.js';
import { PrivateRoute } from './PrivateRoute.js';
import Login from './Login.js';
import { AuthContext } from './context/AuthProvider.js';

import Navbar from './components/Navbar.js'; 
import { GlobalStyles } from './styles/GlobalStyles.style.js';

function App() {
  const [auth, setAuth] = useState('');


  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      <GlobalStyles />
      <Router>
        {/* <div className='Title'>
          <div className='TitleName'>
            <strong>BlogSpot</strong>
            
          </div>
        </div> */}

        {/* <nav className="NavBar" id="NavBar">
          <Link className="NavLink" to="/"> Home </Link>
          <Link className='NavLink' to="/profile">Profile</Link>
          <Link className='NavLink' to="/random">Random</Link>
          <Link className='NavLink' to="/myblogs">MyBlogs</Link>
          <Link className='NavLinkLogin' to="/login"><button className="LoginButton">Login</button></Link> 
        </nav> */}
        
          {!auth? <Navbar />: <Navbar userloggedIn={true}/>}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/random" element={<PrivateRoute><Random /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/myblogs" element={<PrivateRoute><MyBlogs /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        

        </Router>
    </AuthContext.Provider>
  );
}

export default App;
