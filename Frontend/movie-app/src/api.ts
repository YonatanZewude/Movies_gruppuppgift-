import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";

export const fetchMovies = async (page: number, limit: number) => {
  try {
    const response = await axios.get(`${API_URL}/movies`, {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const fetchMovieById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/movies/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie:", error);
    throw error;
  }
};
