import { Request, Response } from "express";
import supabase from "../config/supabase";

export const getMovies = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  const { data, error, count } = await supabase
    .from("movies")
    .select("*", { count: "exact" })
    .range(start, end);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json({ data, count });
};

export const getMovieById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
};

export const createMovie = async (req: Request, res: Response) => {
  const { title, description, release_year, imgUrl, price } = req.body;
  const { data, error } = await supabase
    .from("movies")
    .insert([{ title, description, release_year, imgUrl, price }])
    .single();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
};

export const updateMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, release_year, imgUrl, price } = req.body;
  const { data, error } = await supabase
    .from("movies")
    .update({ title, description, release_year, imgUrl, price })
    .eq("id", id)
    .single();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
};

export const deleteMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("movies")
    .delete()
    .eq("id", id)
    .single();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
};
