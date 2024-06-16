import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../api';

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
    <div>
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
