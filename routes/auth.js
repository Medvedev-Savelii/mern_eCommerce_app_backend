import { register, login } from "../controllers/authController.js";
import express from "express";

const router = express.Router();

//REGISTER
router.post("/register", register);
//LOGIN
router.post("/login", login);

export default router;
