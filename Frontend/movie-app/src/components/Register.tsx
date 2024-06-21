import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../style/Register.css'; 

const SignUp = () => {
  const { handleSignUp, setEmail, setPassword } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignUp}>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Registrera</button>
      </form>
      <p>
        Har du redan ett konto? <button onClick={() => navigate('/loggain')}>Login</button>
      </p>
    </div>
  );
};

export default SignUp;
