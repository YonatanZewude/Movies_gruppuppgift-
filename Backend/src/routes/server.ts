import express from "express";
import cors from "cors";
import session from "express-session";
import movieRoutes from "./app";
import authRoutes from "./auth";
import passport from "../config/passport";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", movieRoutes);
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
