import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../api';
import '../style/MovieList.css';  

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 10; 

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data, count } = await fetchMovies(page, limit);
        setMovies(data);
        setTotalPages(Math.ceil(count / limit));
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError('Failed to fetch movies');
      }
    };

    getMovies();
  }, [page]);

  if (error) {
    return <div>{error}</div>;
  }

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <h1>Movie List</h1>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={movie.imgUrl} alt={movie.title} />
              <p>{movie.title}</p>
              <h3>{movie.price} kr</h3> 
            </Link>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieList;
