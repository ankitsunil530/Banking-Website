import db from "../connect/db.js";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import Customer from "../models/customerModel.js";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";


export const register = asyncHandler(async (req, res) => {  
    const { username,name,password } = req.body;

    if(!username || !password||!name){
        res.status(400);
        throw new Error("Please fill all fields");
    }
    const userExists = await User.findOne({ username });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      
        username,
        name,
      password: hashedPassword,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        name:user.name,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  });
export const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });  

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        username: user.username,
        name:user.name,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid username or password");
    }
  
});

export const getUsers = asyncHandler(async (req, res) => {
    const users = await Customer.find({});

    res.json(users);
  
})
export const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
  }

