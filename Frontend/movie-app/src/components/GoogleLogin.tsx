import React from 'react';
import supabase from '../supabaseClient';

const GoogleLogin: React.FC = () => {
  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) {
        console.error('Error during sign-in:', error);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  return (
    <button onClick={handleLogin}>
      Logga in med Google
    </button>
  );
};

export default GoogleLogin;
