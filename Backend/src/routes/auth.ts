import { Router } from "express";
import { signUp, signIn, getUser, signOut } from "../controllers/auth";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/user", getUser);
router.post("/signout", signOut);

export default router;
