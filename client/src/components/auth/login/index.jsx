import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../../firebase/firebase.config';
import image from './google-icon.png';
import './style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User logged in successfully:', userCredential.user);
        localStorage.setItem('email', userCredential.user.email);
        window.location.href = '/otp'; // Redirect after successful login
        window.alert('logged in successfully');
      })
      .catch((error) => {
        setError('Error logging in user. Please check your credentials.');
        console.error('Error logging in user:', error);
        window.alert('Error logged in')
      });
  };

  const handleGoogleLogin = async () => {
    signInWithPopup(auth, provider).then((data) => {
      localStorage.setItem('email', data.user.email);
      window.location.href = '/otp'; // Redirect after successful Google login
    });
  };

  return (
    <div className="l-container">
      <div className="l-card">
        <h1 className="l-card-title">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="l-form-group">
            <br/>
            <label htmlFor="email" className="l-form-label">Email</label>
            <input
              type="email"
              id="email"
              className="l-form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br/>
          <div className="l-form-group">
            <label htmlFor="password" className="l-form-label">Password</label>
            <input
              type="password"
              id="password"
              className="l-form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br/>
          <button type="submit" className="l-btn btn-primary">Login</button>
          <br/>
        </form>
        <div className="l-or-separator">or</div>
        <button
          type="button"
          className="l-btn btn-primary mt-3 l-btn-google"
          onClick={handleGoogleLogin}
        >
          <img src={image} alt="Google Icon" className="l-google-icon" />
          <span>Login with Google</span>
        </button>
        {error && <p className="l-error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Login;