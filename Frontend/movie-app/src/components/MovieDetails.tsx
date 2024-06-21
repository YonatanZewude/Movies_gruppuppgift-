import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieById } from '../api';
import '../style/MovieDetails.css'; 

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movie = await fetchMovieById(id!);
        setMovie(movie);
      } catch (error) {
        console.error('Error fetching movie:', error);
        setError('Failed to fetch movie');
      }
    };

    getMovie();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="movie-details">
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <img src={movie.imgUrl} alt={movie.title} />
          <p>{movie.description}</p>
          <h3>{movie.price} kr</h3>
          <Link to={`/checkout`} state={{ price: movie.price }}>
            <button>Köp</button>
          </Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
