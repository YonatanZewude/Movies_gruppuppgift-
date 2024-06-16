import { Request, Response } from "express";
import supabase from "../config/supabase";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signUp = async (req: Request, res: Response) => {
  const { email, password, first_name, last_name } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  const { user } = data;

  if (user) {
    const { error: insertError } = await supabase.from("users").insert([
      {
        id: user.id,
        email,
        first_name,
        last_name,
        password: hashedPassword,
        created_at: new Date(),
      },
    ]);

    if (insertError) {
      return res.status(400).json({ error: insertError.message });
    }
  }

  res.json(user);
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { data: users, error: selectError } = await supabase
    .from("users")
    .select("*")
    .eq("email", email);

  if (selectError || !users || users.length === 0) {
    return res.status(400).json({ error: "User not found" });
  }

  const user = users[0];

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ error: "Invalid password" });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  res.json({ token, user });
};

export const getUser = async (req: Request, res: Response) => {
  const { data, error } = await supabase.auth.getUser();
  if (!data.user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(data.user);
};

export const signOut = async (req: Request, res: Response) => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json({ message: "Signed out successfully" });
};
