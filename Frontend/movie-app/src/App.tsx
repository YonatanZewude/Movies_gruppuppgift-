import React, { useEffect } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga4';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import StripeWrapper from './components/Checkout';
import Success from './components/Success';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return (
    <div>
      <AuthProvider>
      <Header />
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<StripeWrapper />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<h2>Betalning avbröts</h2>} />
        </Routes>
      </main>
      <Footer />
    </AuthProvider>
    </div>
  );
};

const styles = {
  main: {
    padding: '20px',
    minHeight: 'calc(100vh - 100px)', 
  },
};

export default App;
