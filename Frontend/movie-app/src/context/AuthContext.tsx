import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const login = async (email: string, password: string) => {
    const response = await axios.post('http://localhost:3000/api/v1/auth/signin', { email, password });
    setUser(response.data.user);
  };

  const register = async (email: string, password: string) => {
    const response = await axios.post('http://localhost:3000/api/v1/auth/signup', { email, password });
    setUser(response.data.user);
  };

  const logout = async () => {
    await axios.post('http://localhost:3000/api/v1/auth/signout');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
