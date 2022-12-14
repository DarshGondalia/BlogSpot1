import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from "./context/AuthProvider.js";
import axios from 'axios';
import { Input } from './styles/Input.style.js';
import { Button } from './styles/Button.style.js';
import CheckCircle from '@mui/icons-material/CheckCircle.js';

const CheckCircleIcon = CheckCircle.default;

function Login() {
    const [Success, setSuccess] = useState(false);
    const {setAuth}  = useContext(AuthContext);

    const userRef = useRef();
    useEffect(() => {
        userRef.current.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password, remember } = e.target;
        const user = username.value;
        const pwd = password.value
        try {
            const data = JSON.stringify({username: user, password: pwd});
            const response = await axios.post('http://localhost:3001/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(JSON.stringify(response.data));
            setSuccess(true);
            setAuth({user, pwd})
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <>
        { Success ? (
            <div className='text-center'>
              <h2>LOGIN SUCCESSFUL</h2>
              <br />
              <CheckCircleIcon sx={{fontSize: "100px", color: "#34b233"}}/>
              <Navigate to="/"/>
            </div>
        ) : (
            <div className="text-center">
                <h1>Sign In to BlogSpot</h1>
                <br />
                <hr />
                <form onSubmit={handleSubmit}>
                    <Input
                        ref={userRef}
                        className="mb-3" 
                        type="text"
                        autoComplete='off'
                        name="username"
                        sty="modal"
                        placeholder="Username" 
                        required
                    />
                    <br />
                    <Input 
                        className="mb-3"
                        type="password" 
                        name="password"
                        sty="modal"
                        placeholder="Password"
                        required
                    />
                    <br />
                    <Button color="white" sty="modal">Continue</Button> <br />
                    <div className="d-flex justify-content-between mt-3 mb-3">
                        <div>
                            <input type="checkbox" name="remember"/>
                            <label className='ms-1'>
                                Remember me
                            </label>
                        </div>
                        <Button sty="link">Forgot Password?</Button>
                    </div>
                </form>
                <hr />
                <Button className="mt-2" sty="link" onClick={() => document.getElementById('join_button').click()}>Create a new account</Button>
            </div>
        )}
    </>
  )
}

export default Login