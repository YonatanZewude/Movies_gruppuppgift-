import express from "express";
import {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movie";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Movie API",
    routes: {
      movies: "/api/v1/movies",
      movieById: "/api/v1/movies/:id",
      createMovie: "POST /api/v1/movies",
      updateMovie: "PUT /api/v1/movies/:id",
      deleteMovie: "DELETE /api/v1/movies/:id",
      auth: {
        signUp: "POST /api/v1/auth/signup",
        signIn: "POST /api/v1/auth/signin",
        getUser: "GET /api/v1/auth/user",
        signOut: "POST /api/v1/auth/signout",
      },
    },
  });
});

router.get("/movies", getMovies);
router.get("/movies/:id", getMovieById);
router.post("/movies", createMovie);
router.put("/movies/:id", updateMovie);
router.delete("/movies/:id", deleteMovie);

export default router;
