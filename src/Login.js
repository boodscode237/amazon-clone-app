import React from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import { useState } from 'react';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const login = event => {
        event.preventDefault();// this stops the refresh
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in, redirect to homepage
                history.push('/');
            })
            .catch(e => alert(e.message));
    }

    const register = event => {
        event.preventDefault();// this stops the refresh
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // created a user and logged in, redirect to homepage
                history.push('/');
            })
            .catch(e => alert(e.message));
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className='login__container'>
                <h1>Sign In</h1>
                <form action="">
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type='submit' className="login__SignInButton">Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon Conditions of Use & Sales. Please see our Privacy Notice, our Cookies Notice and our Interest-based Ads Notice.</p>
                <button onClick={register} className='login__RegisterButton'>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
