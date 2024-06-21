import express from "express";
import cors from "cors";
import session from "express-session";
import movieRoutes from "./movie";
import checkoutRoutes from "./checkout";

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

app.use("/api/v1/movies", movieRoutes);
app.use("/api/v1/checkout", checkoutRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
