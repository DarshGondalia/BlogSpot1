import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "./context/AuthProvider.js";
import axios from 'axios';

function Login() {
    const {setAuth}  = useContext(AuthContext);

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = JSON.stringify({username: user, password: pwd});
            const response = await axios.post('http://localhost:3001/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(JSON.stringify(response.data));
            setAuth({ user , pwd});
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            errRef.current.focus();
            console.log(err);
        }
    }

  return (
    <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br />
                <p>
                <Link className="NavLink" to="/">Go to Home</Link>
                </p>
            </section>
        ) : (
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <button className='loginFormButton'>Sign In</button>
                </form>
                <p>
                    Need an Account?<br />
                    <span className="line">
                        {/*put router link here*/}
                        <Link className="NavLink" to="/register">Sign Up</Link>
                    </span>
                </p>
            </section>
        )}
    </>
  )
}

export default Login