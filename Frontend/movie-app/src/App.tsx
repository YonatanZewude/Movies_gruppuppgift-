import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

const styles = {
  main: {
    padding: '20px',
    minHeight: 'calc(100vh - 100px)', // Adjust based on header and footer height
  },
};

export default App;
