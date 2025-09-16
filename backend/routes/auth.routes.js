import express from "express";
import { login, singup, logout } from "../controllers/auth.controller.js";
const router = express.Router();

router.get("/login", login);
router.get("/logout", logout);

router.post("/singup", singup);

export default router;
