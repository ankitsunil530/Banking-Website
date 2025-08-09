import express from "express";
import { login, register,getUsers } from "../controllers/user.js";
import { protect } from "../middlewares/authMiddleware.js";

const router=express.Router();


router.post('/register',register);
router.post('/login',login);
router.get('/users',protect,getUsers);

export default router;