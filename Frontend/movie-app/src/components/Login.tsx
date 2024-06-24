import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../style/login.css'; 
import GoogleLogin from './GoogleLogin';

const Login = () => {
  const navigate = useNavigate();
  const { setEmail, setPassword, handleLogin } = useAuth();

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Do you not have an account? <button onClick={() => navigate('/')}>Sign Up</button>
      </p>
      <div>
      <GoogleLogin />
    </div>
    </div>
  );
};

export default Login;
