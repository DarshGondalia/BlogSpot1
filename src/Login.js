import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "./context/AuthProvider.js";
import axios from 'axios';
import { Input } from './styles/Input.style.js';
import { Button } from './styles/Button.style.js';

function Login() {
    const {setAuth}  = useContext(AuthContext);
    const [Success, setSuccess] = useState(false);

    const userRef = useRef();
    useEffect(() => {
        userRef.current.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password, remember } = e.target;
        const user = username.value;
        const pwd = password.value
        console.log(user)
        console.log(pwd)
        try {
            const data = JSON.stringify({username: user, password: pwd});
            const response = await axios.post('http://localhost:3001/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(JSON.stringify(response.data));
            setAuth({ user, pwd});
            setSuccess(true);
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <div className="text-center">
        <h2>Sign In to BlogSpot</h2>
        <div className="d-flex justify-content-center flex-column gap-3 mb-4">
        </div>
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
                minLength={8}
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
    // <>
    //     {success ? (
    //         <section>
    //             <h1>You are logged in!</h1>
    //             <br />
    //             <p>
    //             <Link className="NavLink" to="/">Go to Home</Link>
    //             </p>
    //         </section>
    //     ) : (
    //         <section>
    //             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    //             <h1>Sign In</h1>
    //             <form onSubmit={handleSubmit}>
    //                 <label htmlFor="username">Username:</label>
    //                 <input
    //                     type="text"
    //                     id="username"
    //                     ref={userRef}
    //                     autoComplete="off"
    //                     onChange={(e) => setUser(e.target.value)}
    //                     value={user}
    //                     required
    //                 />

    //                 <label htmlFor="password">Password:</label>
    //                 <input
    //                     type="password"
    //                     id="password"
    //                     onChange={(e) => setPwd(e.target.value)}
    //                     value={pwd}
    //                     required
    //                 />
    //                 <button className='loginFormButton'>Sign In</button>
    //             </form>
    //             <p>
    //                 Need an Account?<br />
    //                 <span className="line">
    //                     {/*put router link here*/}
    //                     <Link className="NavLink" to="/register">Sign Up</Link>
    //                 </span>
    //             </p>
    //         </section>
    //     )}
    // </>
  )
}

export default Login