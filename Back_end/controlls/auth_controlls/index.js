import express from "express";
import { registerUser } from "./Auth_controlls.js";

const auth_router = express.Router();

auth_router.post("/register",registerUser);
export default auth_router;
